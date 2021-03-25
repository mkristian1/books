import React from 'react';
import { Button, Table } from 'react-bootstrap';

const BooksTable = ({ books }) => {
    console.log(books);

    return (
        <Table striped bordered hover>
            <tbody>
                {books && books.map(book => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.date}</td>
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