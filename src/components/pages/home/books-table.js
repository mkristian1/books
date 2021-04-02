import React from 'react';
import { Button, Table } from 'react-bootstrap';

const BooksTable = ({ books, authors }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                {books && authors && books.map(book => {

                    let authorId = authors.findIndex((a) => a.id === book.author_id);
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td> {authors[authorId].last_name} {authors[authorId].first_name}</td>
                            <td>{book.year}</td>
                            <td><Button>Del</Button></td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

export default BooksTable;