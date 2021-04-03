import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BooksTable = ({ books, authors }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Created at</th>
                </tr>
            </thead>
            <tbody>
                {books && authors && books.map(book => {
                    let sec = book.created_at.seconds;
                    let newDate = new Date(sec * 1000);
                    console.log(newDate);
                    let authorId = authors.findIndex((a) => a.id === +book.author_id);
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td> {authors[authorId].last_name} {authors[authorId].first_name}</td>
                            <td>{book.year}</td>
                            <td>{newDate.toString()}</td>
                            <td className="text-right">
                                <Link to={`details/${book.id}`}><Button className="mr-2" variant="success"><FontAwesomeIcon icon={faEye} /></Button></Link>
                                <Button className="mr-2" variant="info"><FontAwesomeIcon icon={faEdit} /></Button>
                                <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

export default BooksTable;