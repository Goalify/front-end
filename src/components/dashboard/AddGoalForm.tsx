import React, {FormEvent, useState, useRef, useEffect, useContext} from 'react'
import { Goal } from '../../tsInterfaces/interfaces'
import { getUserId } from '../common/utilities';

const AddGoalForm = (props: {addGoal: (goal: Goal) => void}) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");    
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const nlBEFormatter = new Intl.DateTimeFormat('nl-BE');
        
        let today = new Date();
        let dateCreated = nlBEFormatter.format(today);

        let goal: Goal = {
            id: getUserId(),
            name: name,
            description: description,
            deadline: deadline,
            dateCreated: dateCreated,
            state: "idle",
            published: false,
            milestones: [],
        }
        props.addGoal(goal);
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
                    <input required ref={nameRef} type="text" name="name" placeholder="Enter the goal name"
                    onChange={(event) => {setName(event.target.value);}}
                    />
                    </label>
                </div>
                <div>  
                    <label>
                    Description:
                    <input type="text" name="description" placeholder="Enter the description"
                    onChange={(event) => {setDescription(event.target.value);}}
                    />
                    </label>
                </div>
                <div>  
                    <label>
                    Deadline:
                    <input type="text" name="deadline" placeholder="Enter the deadline"
                    onChange={(event) => {setDeadline(event.target.value);}}
                    />
                    </label>
                </div>

                <input type="submit" value="submit" />
                
            </form>

    )
}

export default AddGoalForm;