
from array import array
from ast import Str
from datetime import datetime
from sqlite3 import DatabaseError
from typing import Text
from unicodedata import category
from sqlalchemy import MetaData, create_engine, Column, String, Integer, DateTime, select
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from flask_sqlalchemy import SQLAlchemy



#Database variables
db_url = 'database:5432'
db_name = 'VacationIO'
db_user = 'postgres'
db_password = 'postgres'

#Connect to database through sqlalchemy
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_url}/{db_name}')
Session = sessionmaker(bind=engine)

Base = declarative_base()





class User_Post(Base):
    """Message acount for user"""

    __tablename__ = "user_post"

    id = Column(Integer, primary_key=True, autoincrement="auto")
    user_id = Column(Integer,nullable=False)
    sender_id = Column(Integer,nullable=False)
    message = Column(Text)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    def __init__(self, user_id, sender_id, message, created_at, updated_at):

        self.user_id = user_id
        self.sender_id = sender_id
        self.message = message
        self.created_at = created_at
        self.updated_at = updated_at


class User_Message(Base):
    """Message acount for user"""

    __tablename__ = "user_message"

    id = Column(Integer, primary_key=True, autoincrement="auto")
    source_id = Column(Integer,nullable=False)
    target_id = Column(Integer,nullable=False)
    message = Column(Text)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

    def __init__(self, source_id, target_id, message, created_at, updated_at):

        self.source_id = source_id
        self.target_id = target_id
        self.message = message
        self.created_at = created_at
        self.updated_at = updated_at


class User(Base):
    """User account."""

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement="auto")
    username = Column(String(255), unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    mobile = Column(String(255))
    first_name = Column(String(255))
    last_name = Column(String(255))
    intro = Column(Text)
    profile = Column(Text)

    def __init__(self,  username, password,email,mobile, first_name,last_name, intro, profile):
        
        self.username = username
        self.password = password
        self.email = email
        self.mobile - mobile
        self.first_name = first_name
        self.last_name = last_name
        self.intro = intro
        self.profile = profile
    
    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    def __repr__(self):
        return '<User {0}>'.format(self.email)