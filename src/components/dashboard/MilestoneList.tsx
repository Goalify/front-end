import React, {useState, useRef, FormEvent, useEffect, ChangeEventHandler, ChangeEvent} from "react";
import {Goal, Milestone} from "../../tsInterfaces/interfaces";
import {DbClickField} from "./Goal"

const AddMilestoneForm = (props: {addMilestone: (milestone: Milestone) => void}) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let milestone: Milestone = {
            id: "456",
            name: name,
            state: false
        }
        props.addMilestone(milestone);
    }

    useEffect(() => {
        if (nameRef && nameRef.current)
            nameRef.current.focus()
    }, []);

    return (
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <div>  
                    <label>
                    Name:
                    <input required ref={nameRef} type="text" name="name" placeholder="Enter the milestone name"
                    onChange={(event) => {setName(event.target.value);}}
                    />
                    </label>
                </div>
                <input type="submit" value="submit" />
                
            </form>

    )
}

function MilestoneItem(props: {milestone: Milestone, setMilestone: any, deleteMilestone: any}){

    let milestone = props.milestone
    function edit_name(name: string){
        let new_milestone = JSON.parse(JSON.stringify(milestone));
        new_milestone.name = name;
        props.setMilestone(new_milestone);
    }
    const edit_state = (event:ChangeEvent<HTMLInputElement>) => {
        let new_milestone = JSON.parse(JSON.stringify(milestone));
        new_milestone.state = !new_milestone.state;
        props.setMilestone(new_milestone);
    }

    return(
        <div>
            <div>
                <DbClickField text={milestone.name} setText={edit_name}></DbClickField>
                <div>
                    Completed: <input type="checkbox" checked={milestone.state} onChange={(event) => edit_state(event)}/>
                </div>
            </div>
        </div>
    );
}

export function MilestonesList(props: {milestonesList: Milestone[]}){

    const [milestones, setMilestones] = React.useState<Milestone[]>(props.milestonesList);
    const [visibileMilestoneForm, setVisibileMilestoneForm] = React.useState<boolean>(false);

    const setMilestone = (milestone: Milestone) => {
        const new_milestones = milestones.slice();

        let j = 0;
        for(let i=0;i<new_milestones.length;i++){
            if(new_milestones[i].id === milestone.id){
                j = i;
                break;
            }
        }
        new_milestones[j] = milestone;
        setMilestones(new_milestones);
        
    }

    const deleteMilestone = (milestone: Milestone) => {
        
        const old_milestones = milestones.slice();
        let new_milestones: Milestone[] = [];

        for(let i=0;i<old_milestones.length;i++){
            if(old_milestones[i].id === milestone.id){
                continue;
            }
            new_milestones.push(old_milestones[i]);
        }

        setMilestones(new_milestones);
    }

    const showMilestoneForm = () => {
        setVisibileMilestoneForm(x => !x);
    }

    const addMilestone = (milestone: Milestone) => {
        const new_milestones = milestones.slice();
        new_milestones.push(milestone);
        setMilestones(new_milestones);
        setVisibileMilestoneForm(x => !x);
    }

    let milestoneList = <ul>
        {milestones.map((milestone, ind) => 
           <li key={milestone.id}><MilestoneItem milestone={milestone} setMilestone={setMilestone} deleteMilestone={deleteMilestone} /></li>)}
        </ul>;

    return <div>
        <button onClick={showMilestoneForm}>+</button>
        {visibileMilestoneForm ? <AddMilestoneForm addMilestone={addMilestone}/>: null}
        {milestoneList}
        </div>
}