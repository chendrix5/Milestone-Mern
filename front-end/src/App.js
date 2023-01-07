
import './App.css';

import Home from './components/Home'
import Vacations from './components/Vacations'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Take a look at some cool vacation spots!</h1>
        
        <div className="navbar">
          <ul>
            <li>
              <a href={<Home />}>Home</a>
            </li>
            <li>
              <a href={<Vacations />}></a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
