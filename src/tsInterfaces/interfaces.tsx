import * as React from 'react';
import { useContext } from 'react';

export interface milestone{
    id: string,
    setMilestone: any,
    state: boolean,
    name: string,
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
    milestones: milestone[],
    published: boolean,
    deadline: string,
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