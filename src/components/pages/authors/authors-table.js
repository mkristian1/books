import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorsTable = ({ authors }) => {

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

export default AuthorsTable;