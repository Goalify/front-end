import React, {useState, useEffect, useRef, FormEvent} from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import {Goal} from "../../tsInterfaces/Goals"

let goal2: Goal = {
    state: "In progress",
    name: "Goal 2",
    dateCreated: "10/Sep",
}

const Login = () => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    let history = useHistory();

    useEffect(() => {
        if (usernameRef && usernameRef.current)
            usernameRef.current.focus()
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        history.push("/dashboard");

        // TODO: request from backend and reply to user accordingly.
        if (true){
            
        }
        else{

        }
        
    }

    return <form onClick={(event) => {handleSubmit(event)}}>
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

export default Login;