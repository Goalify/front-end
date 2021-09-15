import * as React from 'react'
import { useHistory } from 'react-router-dom';


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

export function getCurrentDateFormat(){
    const nlBEFormatter = new Intl.DateTimeFormat('nl-BE');

    let today = new Date();

    const tranformFormat = (time: string) => {
        const hours = time.length == 2 ? time : "0" + time;
        return hours;
    }

    let dateCreated = nlBEFormatter.format(today) + " " + tranformFormat(today.getHours().toString()) + ":" + tranformFormat(today.getMinutes().toString());
    return dateCreated;
}
