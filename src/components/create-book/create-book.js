import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateBook = () => {
    const [title, setTitle] = useState();

    const sendData = (e) => {
        e.preventDefault();
        console.log(title);
    }   
    return (
        <div className="create-book">
            <h1>Create Book</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title" /> 
                </Form.Group>      
                <Button onClick={(e) => sendData(e)} variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>

    )
}

export default CreateBook;