import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { booksLoaded } from '../../redux/actions';

const CreateBook = ({ booksLoaded }) => {
    const [values, setTitle] = useState({});

    const handleChange = (e) => {
        setTitle({ ...values, [e.target.name]: e.target.value });
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(values);
        booksLoaded(values);
    }
    return (
        <div className="create-book">
            <h1>Create Book</h1>
            <Form>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" onChange={handleChange} type="text" placeholder="Book title" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicyear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control name="year" onChange={handleChange} type="number" placeholder="Year" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Author Id</Form.Label>
                            <Form.Control name="author_id" onChange={handleChange} type="number" placeholder="Author id" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="image" onChange={handleChange} type="text" placeholder="Base 64" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button size="lg" block onClick={(e) => sendData(e)} variant="primary" type="submit">
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