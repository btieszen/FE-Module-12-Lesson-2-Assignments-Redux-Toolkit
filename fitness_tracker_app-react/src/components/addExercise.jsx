import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExercise } from '../features/exerciseSlices';
import { Button,Form,Container,Row,Col } from 'react-bootstrap';

const AddExercise = () =>{
    const[type,setType] = useState('');
    const[duration,setDuration] = useState('');
    const[calories,setCalories] = useState('');
    const dispatch=useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(addExercise({id:Date.now(),type,duration,calories}));

        setType('');
        setDuration('');
        setCalories('');
    };

return(
    <Container>
        <Row className = "justify-content-md-center">
            <Col md={6}>
                <h2>Add New Exercise</h2>
                    <Form onSubmit = {handleSubmit}>
                    <Form.Group className = 'mb-3'>
                    <Form.Label>Exercise Type</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter Exercise Type"
                        value={type}
                        onChange={(e)=>setType(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Duration(minutes)</Form.Label>
                        <Form.Control
                            type = 'number'
                            placeholder="Duration in Minutes"
                            value={duration}
                            onChange={(e)=>setDuration(e.target.value)}
                            />
                        </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Calories burn"
                            value={calories}
                            onChange={(e)=>setCalories(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant ="primary" type="submit">
                        Add Exercise
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddExercise;