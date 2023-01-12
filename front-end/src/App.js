import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css';
import VacaForm from './Components/Create';

import Home from './Components/Home'
import Vacations from './Components/Vacations'

import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  
    return (
      <div className="App">
        <Router>
            <header>
                <div className="navBar">
                    <ul>
                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li>
                      <Link to="/vacations">Vacations</Link>
                      </li>
                    </ul>
                </div>
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
