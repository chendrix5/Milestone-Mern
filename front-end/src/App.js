import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css';
import VacaForm from './Components/Create';

import Home from './Components/Home'
import Vacations from './Components/Vacations'

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  
  return (
    <div className="App">
      <Router>
          <header>
              <Navbar collapseOnselect fixed='sticky' expand='sm' bg='dark' variant='dark'>
                <Container>
                  <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                      <Nav.Link href='/'>Home</Nav.Link>
                      <Nav.Link href='/vacations'>Vacations</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
          </header>
        
        <div className="display">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacations" element={<Vacations vacations={[]}/>}  />
                <Route path="/addVacation" element={<VacaForm />} />
            </Routes>
        </div>
        
        
        </Router>
      </div>
    );
}
  
  export default App;
