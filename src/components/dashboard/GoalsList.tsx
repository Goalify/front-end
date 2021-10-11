import * as React from 'react'
import {Goals, Goal} from '../../tsInterfaces/interfaces'
import GoalItem from './Goal';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './GoalsList.css';
import GoalStats from './statistics/GoalStats';
import { useAuth } from 'hooks/useAuth';
function GoalsList() {

    const [goals, setGoals] = React.useState<Goals>({list: []});
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const auth = useAuth();


    React.useEffect(() => {
        if (!auth)
            return;
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://localhost:4001/get-goals?token=${auth?.token}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGoals(data);
            }).catch(e => console.log(e));
    }, [auth])

    const setGoal = (goal: Goal) => {
        const new_goals = goals.list.slice();


        let j = 0;
        for (let i = 0; i < new_goals.length; i++) {
            if (new_goals[i].id === goal.id) {
                j = i;
                break;
            }
        }


        let count = 0;
        for (let i = 0; i < goal.milestones.length; i++) {
            if (goal.milestones[i].state) {
                count += 1;
            }
        }

        let new_goal = goal;
        if(count === new_goal.milestones.length && count !== 0) {
            let today = new Date();

            const nlBEFormatter = new Intl.DateTimeFormat('nl-BE');
            let dateFinished = nlBEFormatter.format(today);

            new_goal = {
                ...goal,
                dateFinished: dateFinished
            }
        }

        new_goals[j] = new_goal;

        let val = new_goal.dateFinished === null ? 'null' : new_goal.dateFinished.toString()

        let sent_goal: any = {
            ...new_goal,
            published: new_goal.published.toString(),
            milestones: new_goal.milestones.toString(),
            dateFinished: val
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                goal: sent_goal,
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/edit-goal', requestOptions)
            .then(response => {
                setGoals({ list: new_goals });
            }).catch(e => console.log(e));

        setGoals({ list: new_goals });
        
    }

    const deleteGoal = (goal: Goal) => {
        
        const old_goals = goals.list.slice();
        let new_goals: Goals = { list: [] };

        for (let i = 0; i < old_goals.length; i++) {
            if (old_goals[i].id === goal.id) {
                continue;
            }
            new_goals.list.push(old_goals[i]);
        }
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: goal.id,
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/remove-goal', requestOptions)
            .then(response => {
                setGoals(new_goals);
            }).catch(e => console.log(e));
        }

    const addGoal = (goal: Goal) => {
        const new_goals = goals.list.slice();
        new_goals.push(goal);
        setGoals({ list: new_goals });
    }

    return <div style={{marginLeft: '20%', marginRight:'20%' }}>
        {goals.list.map((goal) =>
            <div key={goal.id}><GoalItem
                goal={goal} setGoal={setGoal} deleteGoal={deleteGoal} 
            /><GoalStats goal={goal} />
            </div>)}
        <Card className="text-center" onClick={() => setModalShow(true)}>
            <Card.Body >
                <Card.Title>
                    Add a new goal
                </Card.Title>
            </Card.Body>
        </Card>
        <AddGoalModal addGoal={addGoal} show={modalShow} handleClose={() => setModalShow(false)}/>
    </div>;
}


const AddGoalModal = ({addGoal, show, handleClose} : any) => { 
    const nameRef = React.useRef<HTMLInputElement>(null);
    const descriptionRef = React.useRef<HTMLInputElement>(null);
    const auth = useAuth();
    
    const handleAdd = () => {
        if (!nameRef || !nameRef.current || !descriptionRef || !descriptionRef.current) return;
        if(!nameRef.current.value){
            alert('Fields shouldn\'t be empty')
            return;
        }
        
        let today = new Date();

        const nlBEFormatter = new Intl.DateTimeFormat('nl-BE');
        let dateCreated = nlBEFormatter.format(today);

        console.log("Reererer")
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                goal:{
                    name: nameRef.current.value,
                    description: descriptionRef.current.value,
                    deadline: "None",
                    dateCreated: dateCreated,
                    state: "Idle",
                    published: 'false',
                    milestones: '[]',
                    dateFinished: 'null'
                },
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/add-goal', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!nameRef || !nameRef.current || !descriptionRef || !descriptionRef.current) return;
                let new_goal: Goal = {
                    id: data.id.toString(),
                    name: nameRef.current.value,
                    description: descriptionRef.current.value,
                    deadline: "None",
                    dateCreated: dateCreated,
                    state: "Idle",
                    published: false,
                    milestones: [],
                    dateFinished: null,
                }
                addGoal(new_goal);
            });
        

        handleClose();
    }

    React.useEffect(() => {
        if (nameRef && nameRef.current)
            nameRef.current.focus()
    }, []);

    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required ref={nameRef} type="text" placeholder="Goal name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required ref={descriptionRef} type="text" placeholder="Goal description" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
    </Modal>)
}

export default GoalsList;