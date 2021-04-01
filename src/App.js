import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CreateBook from "./components/create-book/create-book";
import Header from './components/layouts/header';
import Authors from './components/pages/authors';
import Books from './components/pages/books';
import Home from './components/pages/home/home';

function App({ books }) {
  return (
    <Router>
      <Container>
        <div className='App'>
          <Header />
          <Route path='/' exact>
            <Home books={books} />
          </Route>
          <Route path='/authors'>
            <Authors />
          </Route>
          <Route path='/create-book'>
            <CreateBook />
          </Route>
          <Route path='/books'>
            <Books />
          </Route>
        </div>
      </Container>
    </Router>
  );
}

const mapStateToProps = ({ createBook }) => {
  return { books: createBook.books };
}

export default connect(mapStateToProps)(App);
