import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createBook } from '../../redux/actions/create-book';

const CreateBook = ({ booksLoaded, authors }) => {
    const [values, setTitle] = useState({});
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setTitle({ created_at: new Date(), ...values, [e.target.name]: e.target.value });
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
            booksLoaded(values);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000)
        }
    }

    const authorsOption = authors.map(author => {
        return (
            <option value={author.id} key={author.id}>{author.last_name} {author.first_name}</option>
        )
    })
    return (
        <div className="create-book">
            <h1>Create Book</h1>
            <Form className="mb-3" noValidate validated={validated} onSubmit={handleSubmit}>
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
                    <Col md={3}>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Author</Form.Label>
                            <Form.Control name="author_id" onChange={handleChange} custom required as="select" size="md">
                                <option>Please select Author</option>
                                {authorsOption}
                            </Form.Control>
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
        booksLoaded: (books) => {
            dispatch(createBook(books))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);