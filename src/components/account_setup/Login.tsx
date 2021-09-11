import {useState, useEffect, useRef, FormEvent} from "react";
import { useHistory } from "react-router-dom";
import {http} from "../../api/calls"

const Login = () => {
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(false);
    const history = useHistory();

    useEffect(() => {
        if (usernameRef && usernameRef.current)
            usernameRef.current.focus()
    }, []);
    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        // TODO: request from backend and reply to user accordingly.
        const respone = await http<Todo[]>("https://jsonplaceholder.typicode.com/todos"
        );
        
        setIsLoginSuccessful(true);
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