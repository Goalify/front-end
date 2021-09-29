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
    state: "InProgress",
    name: "Lose Weight",
    description: "this is the description",
    milestones: [],
    published: true,
    deadline: "12/Sep",
    dateCreated: "2 Days ago",
}

export const goal2: Goal = {
    id: "2",
    state: "Done",
    name: "Finish SSAD project",
    description: "description here",
    milestones: [],
    published: false,
    deadline: "24/Sep",
    dateCreated: "4 Days ago",
}

export const goal3: Goal = {
    id: "3",
    state: "idle",
    name: "play the piano",
    description: "learn bella ciao song",
    milestones: [],
    published: false,
    deadline: "14/Oct",
    dateCreated: "10/Oct",
}

export const goal4: Goal = {
    id: "4",
    state: "idle",
    name: "play the piano",
    description: "learn bella ciao song",
    milestones: [],
    published: true,
    deadline: "11/Nov",
    dateCreated: "10/Oct",
}