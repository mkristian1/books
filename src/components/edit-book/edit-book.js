import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editBook } from '../../redux/actions/edit-book';

const EditBook = ({ docId, booksActionEdit, book, authors }) => {
    const [values, setValues] = useState({
        created_at: new Date(), title: book.title, year: book.year, author_id: book.author_id, image: book.image
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
            booksActionEdit(values, docId);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000)
        }
    }
    const authorsOption = authors.map(author => {
        return (
            <option value={author.id} key={author.id}>{author.last_name} {author.first_name}  (id-{author.id})</option>
        )
    })
    return (
        <div className="edit-book">
            <h1>Edit Book</h1>
            <Form className="mb-3" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={values.title} required name="title" onChange={handleChange} type="text" placeholder="Book title" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicyear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control value={values.year} required name="year" onChange={handleChange} type="number" placeholder="Year" />
                            <Form.Control.Feedback type="invalid">
                                Please fill out this field
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formBasicAuthorId">
                            <Form.Label>Author Id</Form.Label>
                            <Form.Control name="author_id" onChange={handleChange} custom required as="select" size="md">                                
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
                            <Form.Control value={values.image} required name="image" onChange={handleChange} type="text" placeholder="Base 64" />
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
                <Alert.Heading className="text-center">Book successfully edited</Alert.Heading>
            </Alert>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const books = state.firestore.data.books;
    const authors = state.firestore.ordered.authors;
    const book = books ? books[id] : null;

    return {
        docId: id,
        book: book,
        authors: authors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        booksActionEdit: (bookData, docId) => {
            dispatch(editBook(bookData, docId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);