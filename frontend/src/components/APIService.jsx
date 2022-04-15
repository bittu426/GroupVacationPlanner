import axios from "axios";

const baseURL = "ec2-18-224-195-130.us-east-2.compute.amazonaws.com";

export default class APIService{
     

     create_user(firstname,lastname,email,username,password,mobile,intro,profile){
        return axios.post(`${baseURL}/api/register`,{firstname: firstname,lastname: lastname,email: email,username: username,password: password
        ,mobile: mobile, intro: intro, profile: profile})
    }

    


}


