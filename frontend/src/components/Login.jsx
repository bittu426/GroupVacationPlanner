import React, { useState, useEffect } from "react";
import { Form , Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import APIService from './APIService'



import { useNavigate } from "react-router-dom";
//import "./Login.css";

export default function Login(props) {

    
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleNew() {
        navigate("/registration");
  }



        // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    
    };

    function validateForm() {



        return username.length > 0 && password.length > 0;
    
      }


// JSX code for login form
return (
<div className="Login">
    <meta charSet="UTF-8" />
    <section>
        <Form onSubmit={handleSubmit}>
            
                <FormGroup controlId="username" size="lg">
                    <div>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="userid"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    </div>
                </FormGroup>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
                
        </Form>
    </section>
    <br />
    <br />
    <h1>First Time user?</h1>
    <Button onClick={handleNew} type="submit" id="login">
        Register today
    </Button>

</div>
 );

}