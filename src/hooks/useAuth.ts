import { useState, useEffect } from 'react';

type Auth = {
    token: string,
    username: string
}

export function useAuth() {
    const [auth, setAuth] = useState<Auth | null>(null);

    const get_cookie = (name: string) => document.cookie.split('; ').find(row => row.startsWith(name))?.split('=')[1];

    useEffect(() => {
        const token = get_cookie('token');
        const username = get_cookie('username');
        if(token && username){
            setAuth({
                token: token,
                username: username
            })
        }
        return () => {
            setAuth(null);
        }
    }, []);

    return auth;
}