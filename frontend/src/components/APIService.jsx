import axios from "axios";


export default class APIService{
     

     create_user(firstname,lastname,email,username,password,mobile,intro,profile){
        return axios.post(`/api/register`,{firstname: firstname,lastname: lastname,email: email,username: username,password: password
        ,mobile: mobile, intro: intro, profile: profile})
    }

    login(user, password){
        return axios.post(`/api/token`, {username: user, password: password})
    }



    message(user, password){
      axios.get(`/api/chatscreen`, {username: user, password: password})
    }

    joingroup(user, group, status){
      return axios.post(`/api/get-started`, {user: user, group: group , status: status})
    }

    creategroup(user , title, status, profile){
      return axios.post(`/api/get-started`, {created_by: user, title: title , status: status, profile: profile})
    }
    
    save_event(user , title, date, content, group_id){
      return axios.post(`/api/exam`, {user: user, title: title , date: date, content: content, group_id:group_id})
    }

/*    logout() {
        this.user_token = 0;
        this.config = {
            headers: {
                Authorization: 'Bearer ' + props.token
              }
        }
    }

  */  


}


