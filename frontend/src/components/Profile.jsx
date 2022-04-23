import { useState, useEffect } from "react";
import Header from "./Header";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Text, TextInput } from "react-native";
import zxcvbn from "zxcvbn";

import "../styles/Profile.css";

function Profile(props) {
  const [profileData, setProfileData] = useState(null);
  
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [intro, setintro] = useState("");
  const [mobile, setmobile] = useState("");
  const [firstname, setfirst] = useState("");
  const [lastname, setlast] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.apiservice.update_user()(username, email, password,intro, mobile,firstname,lastname)
  }
  useEffect(() => {
    props.apiservice.get_user().then((result) => {
      console.log(result.data);
      setusername(result['data']['username']);
      setemail(result['data']['email']);
      setpassword(result['data']['password']);
      setintro(result['data']['bio']);
      setmobile(result['data']['mobile']);
      setfirst(result['data']['first']);
      setlast(result['data']['last']);
    });
 
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile">
          <div className="left">
            <div>
              <img
                className="avatar"
                src="https://www.w3schools.com/w3images/avatar2.png"
              />
            </div>
            <h1 className="pic-text">{username}</h1>
          </div>
          <div className="right">
            <p className="info">First name:   {firstname}</p>
            <p className="info">Last name:   {lastname}</p>
            <p className="info">Username:  {username}</p>
            <p className="info">Email:  {email}</p>
            <p className="info">Phone Number:   {mobile}</p>
            <p className="info">Bio:   {intro}</p>

          <form>
          <label>Username: </label>
            <br/>
            <input onChange={(e)=>setusername(e.target.value)}></input>
            <br/>
          <label>Password: </label>
            <br/>
            <input onChange={(e)=>setpassword(e.target.value)}></input>
            <br/>
          <label>Email: </label>
            <br/>
            <input  onChange={(e)=>setemail(e.target.value)}></input>
            <br/>
            <label>mobile:  </label>
            <br/>
            <input  onChange={(e)=>setmobile(e.target.value)}></input>
            <br/>
            <label>Bio: </label>
            <br/>
            <input  onChange={(e)=>setintro(e.target.value)}></input>
            <br/>
          <button onClick={handleSubmit}>Submit</button>
          <br/>
          <br/>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
