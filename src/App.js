import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import the content, header, and components files so they can be displayed from this single page react app
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
//Import the bootstrap assets from bootstrap using react
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import {Read} from './components/read';
import {Create} from './components/create';

//create a child class so that we can use the methods from the component class
class App extends React.Component {
  render() {
    return (

      <Router>
        <div className="App">
      
 //adds the bootstrap navbar
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Book App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Content</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      
//allows the functionality to display differnt pages using the navbar
          <Routes>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read/>} exact></Route>
            <Route path='/Create' element={<Create/>} exact></Route>
          </Routes>

          <br />
          {/* <Header></Header>
          <Content></Content>
          <Footer /> */}
        </div>

      </Router>
    );
  }
}

export default App;

