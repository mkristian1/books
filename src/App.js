import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { compose } from "redux";
import './App.css';
import CreateBook from "./components/create-book/create-book";
import Header from './components/layouts/header';
import Authors from './components/pages/authors/authors';
import Books from './components/pages/books/books';
import BookDetails from "./components/pages/books/book-details";
import Home from './components/pages/home/home';
import editBook from "./components/edit-book/edit-book";
import AuthorDetails from "./components/pages/authors/author-details";

function App({ books, authors }) {
  return (
    <Router>
      <Container>
        <div className='App'>
          <Header />
          <Route path='/' exact>
            <Home books={books} authors={authors} />
          </Route>
          <Route path='/books'>
            <Books books={books} authors={authors} />
          </Route>
          <Route path='/details/:id' component={BookDetails} />
          <Route path='/author/details/:id' component={AuthorDetails} />
          <Route path='/edit/:id' component={editBook} />

          <Route path='/authors'>
            <Authors authors={authors} />
          </Route>
          <Route path='/create-book'>
            <CreateBook />
          </Route>
        </div>
      </Container>
    </Router>
  );
}

const mapStateToProps = ({ firestore }) => {
  return {
    books: firestore.ordered.books,
    authors: firestore.ordered.authors
  };
}

export default compose(connect(mapStateToProps), firestoreConnect([
  { collection: 'books' },
  { collection: 'authors' }
]))(App);
