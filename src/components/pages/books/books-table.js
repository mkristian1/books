import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestoreConnect } from "react-redux-firebase";
import moment from 'moment';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { deleteBook } from '../../../redux/actions/delete-book';

const BooksTable = ({ books, authors, deleteBookAction }) => {
    const HandleDeleteBook = (bookId) => {
        deleteBookAction(bookId)
    }
   
    return (
        <Table striped responsive bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Created at</th>
                    <th className="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {books && authors && books.map(book => {
                    let sec = book.created_at.seconds;
                    let createdAt = new Date(sec * 1000);
                    let authorId = authors.findIndex((a) => +a.author_id === +book.author_id);
                   
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td> {authors[authorId].last_name} {authors[authorId].first_name}</td>
                            <td>{book.year}</td>
                            <td>{moment(createdAt).fromNow()}</td>
                            <td className="text-right d-flex justify-content-end">                                
                                <Link to={`/book/details/${book.id}`}><Button className="mr-2" variant="success"><FontAwesomeIcon icon={faEye} /></Button></Link>
                                <Link to={`/book/edit/${book.id}`}><Button className="mr-2" variant="info"><FontAwesomeIcon icon={faEdit} /></Button></Link>
                                <Button onClick={() => HandleDeleteBook(book.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

const mapStateToProps = ({ firestore }) => {
    return {
        books: firestore.ordered.books,
        authors: firestore.ordered.authors
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBookAction: (bookId) => {
            dispatch(deleteBook(bookId))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
    { collection: 'books' },
    { collection: 'authors' }
]))(BooksTable);
