import {useState, useEffect, useRef, FormEvent, useContext, MouseEventHandler} from "react";
import { Link, useHistory } from "react-router-dom";
import { HttpResponse } from "../../tsInterfaces/interfaces";
import { authenticate } from "../common/utilities";
import { Redirect } from "react-router-dom";
import React from 'react';
import * as actions from "../../redux/account_setup/actions";
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"


const Login: React.FC = () => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch: Dispatch<UserAction> = useDispatch();
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
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
        }

        fetch('http://localhost:4001/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.token);
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

    if(authenticate()){
        return <Redirect to="/dashboard" />;
    }

    return (<div>
                <div className="container">  
                    <label>
                    Username:
                    <input id="username" required ref={usernameRef} type="text" name="name" placeholder="Enter Username"/>
                    </label>

                    <label>
                    Password:
                    <input id="password" ref={passwordRef} required type="password" name="password" placeholder="Enter Password"/>
                    </label>
                </div>
                
                <button id="submit" value="submit" onClick={handleSubmit} />
                Don't have an account?
                <Link to="/register">
                    Register.
                </Link>
            </div>)
}

export default Login;