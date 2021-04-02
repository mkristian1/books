import React from 'react';
import './home.css';
import { faBook, faPortrait, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-page">
            <Jumbotron>
                <h1 className="text-center">Welcome to BooksLibrary <FontAwesomeIcon icon={faSmileWink} /></h1>
            </Jumbotron>
            <div className="home-page__menu mb-4">
                <div className="text-center">
                    <Link to='/books'>
                        <h3>Books</h3>
                        <FontAwesomeIcon className="home-page__menu__icon" icon={faBook} />
                    </Link>
                </div>
                <div className="text-center">
                    <Link to='/authors'>
                        <h3>Authors</h3>
                        <FontAwesomeIcon className="home-page__menu__icon" icon={faPortrait} />
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default Home;