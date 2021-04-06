import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editAuthor } from '../../redux/actions/edit-author';
import { editBook } from '../../redux/actions/edit-book';

const EditAuthor = ({ docId, AuthorActionEdit, author }) => {
    const [values, setValues] = useState({
        created_at: new Date(),
        first_name: author.first_name,
        last_name: author.last_name,
        author_id: author.author_id
    });
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            setValidated(false);
            AuthorActionEdit(values, docId);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000)
        }
    }

    return (
        <div className="edit-author">
            <h1>Edit Author</h1>
            <Form className="mb-3" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={values.last_name} required name="last_name" onChange={handleChange} type="text" placeholder="Last Name" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={values.first_name} required name="first_name" onChange={handleChange} type="text" placeholder="First Name" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                </Row>
                <Button size="lg" block variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
            <Alert show={show} variant="success">
                <Alert.Heading className="text-center">Author successfully edited</Alert.Heading>
            </Alert>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const authors = state.firestore.data.authors;
    const author = authors ? authors[id] : null;
    console.log(state, 'state');
    return {
        docId: id,
        author: author
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AuthorActionEdit: (bookData, docId) => {
            dispatch(editAuthor(bookData, docId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAuthor);