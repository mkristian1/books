import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { compose } from "redux";
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

const mapStateToProps = ({ firestore }) => {
  console.log(firestore);
  return { books: firestore.ordered.books };
}

export default compose(connect(mapStateToProps), firestoreConnect([
  { collection: 'books' }
]))(App);
