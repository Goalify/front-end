import axios from "axios";
import {useState, useEffect, useRef, FormEvent, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
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

        // const response = await axios.post(
        //     'http://localhost:4001/login',
        //     {                
        //         "username": username,
        //         "password": password
        //     },
        //     {
        //         headers: 
        //         { 
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     }
        //   )
        // console.log(await response.data)
        
        curToken.setToken("test");

        history.push('/dashboard');
    }
    
    return (<div>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <div className="container">  
                    <label>
                    Username:
                    <input required ref={usernameRef} type="text" name="name" placeholder="Enter Username"
                    onChange={(event) => {setUsername(event.target.value);}}
                    />
                    </label>

                    <label>
                    Password:
                    <input required type="password" name="password" placeholder="Enter Password" 
                    onChange={(event) => {setPassword(event.target.value);}}/>
                    </label>
                </div>
                
                <input type="submit" value="submit" />
                
            </form>
                Don't have an account?
                <Link to="/register">
                    Register.
                </Link>
            </div>)
}

export default Login;