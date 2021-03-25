import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header mb-5">
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to='/'><FontAwesomeIcon className="mr-2" icon={faBookOpen} /> BooksLibrary</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/books">Books</Nav.Link>
                        <Nav.Link as={Link} to="/authors">Authors</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;