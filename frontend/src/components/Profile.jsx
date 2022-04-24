import { useState, useEffect } from "react";
import Header from "./Header";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Text, TextInput } from "react-native";
import zxcvbn from "zxcvbn";

import "../styles/Profile.css";

function Profile(props) {
 
  
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [intro, setintro] = useState("");
  const [mobile, setmobile] = useState("");
  const [firstname, setfirst] = useState("");
  const [lastname, setlast] = useState("");

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Intro, setIntro] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Firstname, setFirst] = useState("");
  const [Lastname, setLast] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.apiservice.update_user()(username, email, password,intro, mobile,firstname,lastname)
  }
  useEffect(() => {
    props.apiservice.get_user(props.username).then((result) => {
      console.log(result.data);
      setUsername(result['data']['username']);
      setEmail(result['data']['email']);
      setPassword(result['data']['password']);
      setIntro(result['data']['bio']);
      setMobile(result['data']['mobile']);
      setFirst(result['data']['first']);
      setLast(result['data']['last']);
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
            <h1 className="pic-text">{Username}</h1>
          </div>
          <div className="right">
            <p className="info">First name:   {Firstname}</p>
            <p className="info">Last name:   {Lastname}</p>
            <p className="info">Username:  {Username}</p>
            <p className="info">Email:  {Email}</p>
            <p className="info">Phone Number:   {Mobile}</p>
            <p className="info">Bio:   {Intro}</p>

          <form>
          <label>Username: </label>
            <input onChange={(e)=>setusername(e.target.value)}></input>
          <label>Password: </label>
            <input onChange={(e)=>setpassword(e.target.value)}></input>
          <label>Email: </label>

            <input  onChange={(e)=>setemail(e.target.value)}></input>

            <label>mobile:  </label>

            <input  onChange={(e)=>setmobile(e.target.value)}></input>

            <label>Bio: </label>

            <input  onChange={(e)=>setintro(e.target.value)}></input>

          <button onClick={handleSubmit}>Submit</button>

          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
