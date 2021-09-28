import * as React from 'react'


// TODO integrate with backend


export function authenticate(){
    const current_token = localStorage.getItem('access_token');
    return current_token === 'true' ? true : false;
}

export function getUserId(): string{
    const id = localStorage.getItem('id');
    if(id === null){
        return "";
    }
    return id;
}

export function logOut(){
    localStorage.setItem('access_token', 'false');
}
