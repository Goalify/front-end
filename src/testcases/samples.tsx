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
    name: "Presentation",
    description: "this is the description",
    milestones: [],
    published: true,
    deadline: "12/Sep",
    dateCreated: "10/9/2021",
    dateFinished: null
}

export const goal2: Goal = {
    id: "2",
    state: "Done",
    name: "Finish SSAD project",
    description: "description here",
    milestones: [],
    published: false,
    deadline: "24/Sep",
    dateCreated: "10/7/2021",
    dateFinished: "10/9/2021"
}

export const goal3: Goal = {
    id: "3",
    state: "ToDo",
    name: "Lose weight",
    description: "description here",
    milestones: [],
    published: false,
    deadline: "24/Sep",
    dateCreated: "10/8/2021",
    dateFinished: "10/9/2021"

}

// export const goal3: Goal = {
//     id: "3",
//     state: "idle",
//     name: "play the piano",
//     description: "learn bella ciao song",
//     milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
//     {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
//     published: false,
//     deadline: "14/Oct",
//     dateFinished: "",
//     dateCreated: "10/Oct",
// }

// export const goal4: Goal = {
//     id: "4",
//     state: "idle",
//     name: "play the piano",
//     description: "learn bella ciao song",
//     milestones: {list: [{id: "1", state: true, description: "description", dateFinished: "fds", dateCreated: 'ww'},
//     {id: "1", state: false, description: "description", dateFinished: "fds", dateCreated: 'ww'}]},
//     published: true,
//     deadline: "11/Nov",
//     dateFinished: "",
//     dateCreated: "10/Oct",
// }