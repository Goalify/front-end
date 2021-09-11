import React, {useState, useEffect, useRef, FormEvent} from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory, Redirect } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import {Goal, LoginProps} from "../../tsInterfaces/Goals"
import App from "../../App";

let goal2: Goal = {
    state: "In progress",
    name: "Goal 2",
    dateCreated: "10/Sep",
}

const Login = (props: LoginProps) => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(false);

    useEffect(() => {
        if (usernameRef && usernameRef.current)
            usernameRef.current.focus()
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        // TODO: request from backend and reply to user accordingly.

        setIsLoginSuccessful(true);
        props.setIsLoggedIn(true);
    }
    
    

    if (isLoginSuccessful){
        console.log(isLoginSuccessful);
        return <App />
    }
    else {
        return <form onSubmit={(event) => {handleSubmit(event)}}>
                    <label>
                    Username:
                    <input ref={usernameRef} type="text" name="name" 
                    onChange={(event) => {setUsername(event.target.value);}}
                    />
                    </label>

                    <label>
                    Password:
                    <input  type="password" name="password" onChange={(event) => {setPassword(event.target.value);}}/>
                    </label>

                    <input type="submit" value="submit" />
                </form>
    }
}

export default Login;