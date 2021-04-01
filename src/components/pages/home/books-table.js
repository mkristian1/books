import React from 'react';
import { Button, Table } from 'react-bootstrap';

const BooksTable = ({ books, authors }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                {books && authors && books.map(book => {

                    let author = authors.find((a) => a.id == books.author_id);
                    console.log(author, 'author');

                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{ }</td>
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