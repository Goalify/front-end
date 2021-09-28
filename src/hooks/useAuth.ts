import { useState, useEffect } from 'react';

type Auth = {
    token: string;
}

export function useAuth() {
    const [auth, setAuth] = useState<Auth | null>(null);

    const get_cookie = (name: string) => document.cookie.split('; ').find(row => row.startsWith(name))?.split('=')[1];

    useEffect(() => {
        const token = get_cookie('token');
        if(token){
            setAuth({
                token: token
            })
        }
        return () => {
            setAuth(null);
        }
    }, []);

    return auth;
}