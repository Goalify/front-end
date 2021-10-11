import * as React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import logo from '../../Goalify-logos.jpeg';
import { useRef } from "react";
import { useHistory } from "react-router";

const Register = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const history = useHistory();

    const handleSubmit = ()  =>  {
        if (!usernameRef ||
            !passwordRef ||
            !emailRef ||
            !usernameRef.current ||
            !passwordRef.current ||
            !emailRef.current) return;
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                email: emailRef.current.value
            })
        }

        fetch('http://localhost:4001/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                history.push('/login');
            });
    }

    return <div>
                <div className='login-form'>
                    <img src={logo} alt="logo"/>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" ref={emailRef} required/>
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" ref={usernameRef} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                        </Form.Group>
                
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Register
                        </Button>
                        <div className = 'register'>
                            Have an account?
                            <Link to="/login">
                                Login.
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
}

export default Register;