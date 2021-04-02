import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { booksLoaded } from '../../redux/actions';

const CreateBook = ({ booksLoaded }) => {
    const [values, setTitle] = useState({});
    const [validated, setValidated] = useState(false);
    const handleChange = (e) => {
        setTitle({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            form.reset();
            setValidated(false);
            console.log(values);
            //booksLoaded(values);
        }
    }
    return (
        <div className="create-book">
            <h1>Create Book</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required name="title" onChange={handleChange} type="text" placeholder="Book title" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicyear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control required name="year" onChange={handleChange} type="number" placeholder="Year" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Author Id</Form.Label>
                            <Form.Control required name="author_id" onChange={handleChange} type="number" placeholder="Author id" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Image</Form.Label>
                            <Form.Control required name="image" onChange={handleChange} type="text" placeholder="Base 64" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Button size="lg" block variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (books) => {
            dispatch(booksLoaded(books))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateBook);