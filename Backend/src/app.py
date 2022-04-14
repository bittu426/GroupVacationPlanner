# coding=utf-8
from datetime import timedelta, datetime, timezone
from flask.cli import FlaskGroup
from flask_cors import CORS
from flask_migrate import Migrate
from flask import Flask, jsonify, request,redirect,render_template, session, url_for
from sqlalchemy import null, select
from .models import Session, engine, Base
from .models import User, Group, Group_Member
from urllib.request import Request, urlopen
import json
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager


#Imports for connecting backend to auth0
from six.moves.urllib.request import urlopen
from functools import wraps
import json
from os import environ as env
from werkzeug.exceptions import HTTPException
from dotenv import load_dotenv, find_dotenv
from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode
from .auth import API_AUDIENCE, AuthError, requires_auth




# creating the Flask application
server = Flask(__name__)
server.config.from_object("src.config.Config")
server.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(server)
CORS(server)
cli = FlaskGroup(server)



session = Session()



#API
@server.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@server.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response

@server.route('/')
def home():
    return render_template('Dashboard.html')
     

@server.route('/get-started', methods=['POST'])
# @requires_auth
def get_started():
    json_data = request.json
    #mount group object
    group = Group(
        created_by = json_data['creaated_by'],
        title = json_data['title'],
        meta_title = json_data['meta_title'],
        slug = json_data['slug'],
        status = json_data['status'],
        profile = json_data['profile']
    )
    try:
        # persist group 
        session.add(group)
        session.commit()
        status = 'succes'
    except:
        status = 'error unknown error'
    session.close()

    return jsonify({'result': status})

@server.route('/join')
#@requires_auth
def joinGroup():
    json_data = request.json
    # receives data from frontend. parses data into columns to be inputted
    member = Group_Member(
        group_id = json_data['access_key'],
        user_id = json_data['user_id'],
        role_id = json_data['role_id'],
        status = json_data['status']
    )
    try:
        # persist group 
        session.add(member)
        session.commit()
        status = 'succes'
    except:
        status = 'error unknown error'
    session.close()

    return jsonify({'result': status})



@server.route('/send-access-key')
def accesskey():
    return render_template('join.html')

@server.route('/send-invite')
def sendinvite():
    return render_template('Intro.html')


@server.route('/register', methods=['POST'])
def register():
    json_data = request.json
      # mount User object
    user = User(

        username=json_data['username'],
        password=json_data['password'],
        email=json_data['email'],
        firstname=json_data['firstname'],
        lastname=json_data['lastname'],
        mobile=json_data['mobile'],
        intro=json_data['intro'],
        profile=json_data['profile']       
    )
    try:
        # persist user
        session.add(user)
        session.commit()
        status = 'success'
    except:
        status = 'this user is already registered'
     # return created user

    session.close()
    return redirect('/callback')

   

# Routes for login, callback 
@server.route('/login')
def login():
    json_data = request.json
    user = User.query.filter_by(email=json_data['email']).first()
    if user(
            user.password, json_data['password']):
        session['logged_in'] = True
        status = True
    else:
        status = False
    return auth0.authorize_redirect(redirect_uri='http://localhost:4200', audience = API_AUDIENCE)

@server.route('/logout')
def logout():
    # Clear session stored data
    session.clear()
    session.pop('logged_in', None)
    # Redirect user to logout endpoint
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response
   # params = {'returnTo': url_for('home', _external=True), 'client_id': 'ECUr7U2H6cH2fdYno1UWDIOaRYwDwsA1'}
   # return redirect('https://https://dev-dm6nugc4.us.auth0.com' + '/v2/logout?' + urlencode(params))

@server.route('/callback')
def callback_handling():
    # Handles response from token endpoint
    auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()

    # Store the user information in flask session.
    session['jwt_payload'] = userinfo
    session['profile'] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture']
    }
    return redirect('/dashboard')

@server.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response