import { faPortrait, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthorsTable from './authors-table';


const Authors = ({ authors }) => {
    return (
        <div className="books">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h1><FontAwesomeIcon icon={faPortrait} /> Authors</h1>
                <Link to='/create-author'><Button variant="outline-success"><FontAwesomeIcon icon={faPlus} /></Button></Link>
            </div>
            <AuthorsTable authors={authors} />
        </div>
    )
}

export default Authors;