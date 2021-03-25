import react from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
             <h1>Header</h1>
             <ul>
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/books'>Books</Link></li>
                 <li><Link to='/authors'>Authors</Link></li>
             </ul>
        </header>       
    );
}

export default Header;