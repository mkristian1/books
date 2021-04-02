import React from 'react';
import { Link } from 'react-router-dom';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooksTable from './books-table';
import { Button } from 'react-bootstrap';


const Books = ({ books, authors }) => {
    return (
        <div className="books">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h1><FontAwesomeIcon icon={faBook} /> Books</h1>
                <Link to='/create-book'><Button variant="outline-success"><FontAwesomeIcon icon={faPlus} /></Button></Link>
            </div>
            <BooksTable books={books} authors={authors} />
        </div >
    )
}

export default Books;