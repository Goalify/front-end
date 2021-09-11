import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";

const Register = () => {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [repeatPassword, setRepeatPassword] = React.useState<string>("");
    const [flag, setFlag] = React.useState<boolean>(false);


    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(password !== repeatPassword){
            alert("Passwords are not identical!!!");
            return;
        }
        if(password.length < 5){
            alert("Password is weak make sure to have at least 5 charchers!!!");
            return;
        }
        setFlag(true);
    }

    if(!flag){
        return (
            <div>
                <form onSubmit={(event) => {handleSubmit(event)}}> 
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
                            E-mail:
                            <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} />
                            Password:
                            <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
                            Repeat Password:
                            <input type="password" value={repeatPassword} onChange={(event) => {setRepeatPassword(event.target.value)}} />
                        </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    else{
        return ( 
            <Redirect to="/dashboard" />
        );
    }
}

export default Register;