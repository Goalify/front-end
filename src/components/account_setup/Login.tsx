import {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from 'react';
import * as actions from "../../redux/account_setup/actions";
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth";
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import logo from '../../Goalify-logos.jpeg';
const Login: React.FC = () => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch: Dispatch<UserAction> = useDispatch();
    const auth = useAuth();
    const user = useSelector((state: UserState) => state.user);

    useEffect(() => {
        if (usernameRef && usernameRef.current)
            usernameRef.current.focus()
    }, []);

    const handleSubmit = ()  =>  {
        if (!usernameRef || !passwordRef || !usernameRef.current || !passwordRef.current) return;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
        }

        fetch('http://localhost:4001/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                document.cookie = `token=${data.token};Secure`;
                document.cookie = `username=${data.username};Secure`;
                dispatch({
                    type: actions.ADD_USER,
                    user: {
                        id: data._id,
                        username: data.username,
                        encPassword: data.password,
                        token: data.token
                    }
                })
            });
    }

    if(auth || user){
        return <Redirect to="/dashboard" />;
    }
    return <div>
            <div className='login-form'>
                <img alt="logo" src={logo}/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" ref={usernameRef} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Login
                    </Button>
                    <div className = 'register'>
                        Don't have an account?
                        <Link to="/register">
                            Register.
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
}

export default Login;