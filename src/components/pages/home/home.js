import React from 'react';
import './home.css';
import { faBook, faPlus, faPortrait } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import BooksTable from './books-table';

const Home = ({ books }) => {
    return (
        <div className="home-page">
            <div className="home-page__menu mb-4">
                <div>
                    <Link to='/books'>
                        <FontAwesomeIcon className="home-page__menu__icon" icon={faBook} />
                    </Link>
                </div>
                <div>
                    <Link to='/authors'>
                        <FontAwesomeIcon className="home-page__menu__icon" icon={faPortrait} />
                    </Link>
                </div>
            </div>
            <Link to='/create-book'>
                <FontAwesomeIcon className="home-page__menu__icon" icon={faPlus} />
            </Link>
            <div className="home-page__books-table">
                <BooksTable books={books} />
            </div>
        </div>

    )
}

export default Home;