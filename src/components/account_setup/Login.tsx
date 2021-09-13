import axios from "axios";
import {useState, useEffect, useRef, FormEvent, useContext} from "react";
import { useHistory } from "react-router-dom";
import {http} from "../../api/calls"
import { HttpResponse } from "../../tsInterfaces/interfaces";
import { userToken } from "../../index";
const Login = () => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const curToken = useContext(userToken);

    const history = useHistory();

    useEffect(() => {
        if (usernameRef && usernameRef.current)
            usernameRef.current.focus()
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();        

        const response = await axios.post(
            'http://localhost:4001/login',
            {                
                "username": "test-username",
                "password": "test-password"
            },
            {
                headers: 
                { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
          )
        console.log(await response.data)
        
        curToken.setToken(true);

        history.push('/dashboard');
        // TODO useContext
    }
    
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

export default Login;