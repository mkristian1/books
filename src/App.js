import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/layouts/header';
import Authors from './components/pages/authors';
import Books from './components/pages/books';
import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Container>
        <div className='App'>
          <Header />
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/authors'>
            <Authors />
          </Route>
          <Route path='/books'>
            <Books />
          </Route>
        </div>
      </Container>
    </Router>
  );
}

export default App;
