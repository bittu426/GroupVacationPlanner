import axios from "axios";

const baseURL = "http://flask-api:5000";
Authorization: Bearer <access_token>

export default class APIService{
     

     create_user(firstname,lastname,email,username,password,mobile,intro,profile){
        return axios.post(`${baseURL}/register`,{firstname: firstname,lastname: lastname,email: email,username: username,password: password
        ,mobile: mobile, intro: intro, profile: profile})
    }

    


}


