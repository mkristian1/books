import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from "react-redux-firebase";
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteAuthor } from '../../../redux/actions/delete-author';

const AuthorsTable = ({ authors, deleteAuthorAction }) => {

    const HandleDeleteAuthor = (bookId) => {
        deleteAuthorAction(bookId)
    }
   

    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th className="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {authors && authors.map(author => {
                    return (
                        <tr key={author.author_id}>
                            <td>{author.last_name}</td>
                            <td> {author.first_name}</td>
                            <td className="text-right d-flex justify-content-end">
                                <Link to={`author/details/${author.id}`}><Button className="mr-2" variant="success"><FontAwesomeIcon icon={faEye} /></Button></Link>
                                <Button className="mr-2" variant="info"><FontAwesomeIcon icon={faEdit} /></Button>
                                <Button onClick={() => HandleDeleteAuthor(author.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
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
        deleteAuthorAction: (authorId) => {
            dispatch(deleteAuthor(authorId))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
    { collection: 'books' },
    { collection: 'authors' }
]))(AuthorsTable);