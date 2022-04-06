import React, {useState} from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
//import "./Login.css";

export default function Login() {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUser] = useState("");
    const history = useHistory();
    function handleNew() {
        history.push("/registration");
  }

    const [email, setEmail] = useState("");


    const [errorMessages, setErrorMessages] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

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

        return email.length > 0 && password.length > 0;
    
      }


// JSX code for login form
return (
<div className="Login">
<meta charSet="UTF-8" />
    <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" block size="lg" type="submit" disabled={!validateForm()}>
            Login
        </Button>
    </Form>
    <br />
    <br />
    <h1>First Time user?</h1>

    <Button onClick={handleNew} type="submit" id="login">
        Register today
    </Button>

</div>
 );

}