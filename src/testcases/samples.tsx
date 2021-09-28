import {Goal, Goals} from '../tsInterfaces/interfaces'
/*
    id: string,
    state: string,
    name: string,
    description: string,
    milestones: milestones[],
    dateCreated: string;

*/


export const goal1: Goal = {
    id: "1",
    state: "in progress",
    name: "Lose Weight",
    description: "this is the description",
    milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
    {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
    published: true,
    deadline: "12/Sep",
    dateFinished: "",
    dateCreated: "10/Sep",
}

export const goal2: Goal = {
    id: "2",
    state: "completed",
    name: "kick dwik's ass",
    description: "easy goal",
    milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
    {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
    published: false,
    deadline: "24/Sep",
    dateFinished: "",
    dateCreated: "22/Sep",
}

export const goal3: Goal = {
    id: "3",
    state: "idle",
    name: "play the piano",
    description: "learn bella ciao song",
    milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
    {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
    published: false,
    deadline: "14/Oct",
    dateFinished: "",
    dateCreated: "10/Oct",
}

export const goal4: Goal = {
    id: "4",
    state: "idle",
    name: "play the piano",
    description: "learn bella ciao song",
    milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
    {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
    published: true,
    deadline: "11/Nov",
    dateFinished: "",
    dateCreated: "10/Oct",
}