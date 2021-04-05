import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createAuthor } from '../../redux/actions/create-author';

const CreateAuthor = ({ createAuthorAction, authors }) => {

    const [values, setTitle] = useState({});
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setTitle({ created_at: new Date(), ...values, [e.target.name]: e.target.value });
    }
    console.log(values);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            var authorId = authors.length;
            console.log(++authorId);
            form.reset();
            setValidated(false);
            const authorData = { values, authorId }
            createAuthorAction(authorData);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000)
        }
    }
    return (
        <div className="create-author">
            <h1>Create Author</h1>
            <Form className="mb-3" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required name="first_name" onChange={handleChange} type="text" placeholder="First Name" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required name="last_name" onChange={handleChange} type="text" placeholder="Last Name" />
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
            <Alert show={show} variant="success">
                <Alert.Heading className="text-center">Book successfully added</Alert.Heading>
            </Alert>
        </div>

    )
}

const mapStateToProps = ({ firestore }) => {
    const authors = firestore.ordered.authors;
    return {
        authors: authors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAuthorAction: (author) => {
            dispatch(createAuthor(author))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAuthor);