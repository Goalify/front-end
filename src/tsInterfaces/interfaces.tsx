import * as React from 'react';
import { useContext } from 'react';

export interface milestone{
    id: string,
    state: boolean,
    dateFinished: string,
    dateCreated: string,
    description: string;
}

export interface milestones{
    list: milestone[];
}

export interface Goal {
    id: string,
    state: string,
    name: string,
    description: string,
    milestones: milestones,
    published: boolean,
    deadline: string,
    dateFinished: string,
    dateCreated: string;
};

export interface Goals {
    list: Goal[];
};

export interface LoginProps{
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HttpResponse extends Response {
    parsedBody?: JSON;
}

export interface User{
    token: boolean,
    toggleToken: React.Dispatch<React.SetStateAction<boolean>>;
}