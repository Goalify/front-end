import * as React from 'react'
import {Goals, Goal} from '../../tsInterfaces/interfaces'
import {goal1, goal2, goal3} from "../../testcases/samples"
import GoalItem from './Goal';
import { Card, Button, Collapse, Modal, Form } from 'react-bootstrap';
import './GoalsList.css';
import GoalStats from './statistics/GoalStats';
import { useAuth } from 'hooks/useAuth';
function GoalsList() {

    const [goals, setGoals] = React.useState<Goals>({list: []});
    const [visibileGoalForm, setVisibleGoalForm] = React.useState<boolean>(false);
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

        fetch(`http://localhost:4001/goals?token=${auth?.token}&username=${auth?.username}`, requestOptions)
            .then(response => response.json())
            .then(data => {
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
        new_goals[j] = goal;
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

        setGoals(new_goals);
    }

    const addGoal = (goal: Goal) => {
        const new_goals = goals.list.slice();
        new_goals.push(goal);
        setGoals({ list: new_goals });
        setVisibleGoalForm(x => !x);
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
    
    const handleAdd = () => {
        if (!nameRef || !nameRef.current || !descriptionRef || !descriptionRef.current) return;
        if(!nameRef.current.value){
            alert('Fields shouldn\'t be empty')
            return;
        }
        
        let today = new Date();

        const nlBEFormatter = new Intl.DateTimeFormat('nl-BE');
        let dateCreated = nlBEFormatter.format(today);

        let goal: Goal = {
            id: 'id',
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            deadline: "something",
            dateCreated: dateCreated,
            state: "ToDo",
            published: false,
            milestones: [],
            dateFinished: null,
        }
        addGoal(goal);
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