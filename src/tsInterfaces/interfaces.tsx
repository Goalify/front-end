import * as React from 'react';
import { useContext } from 'react';

export interface Milestone{
    id: string,
    state: boolean,
    name: string,
    goal_id: string
}

export interface Goal {
    id: string,
    state: string,
    name: string,
    description: string,
    milestones: Milestone[],
    published: boolean,
    deadline: string,
    dateFinished: string | null,
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