import React from 'react';
import './App.css';
import DateTimeInsertion from './components/DateTimeInsertion';
import Index from './views/index';
import About from './views/about';
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <div>
        <Prompt 
          when={true} 
          message={(location) => {return `Deseja ir para ${location.pathname}`}}/>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/datetime/">Counter</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Route path="/datetime/" component={DateTimeInsertion}/>
          <Route path="/" exact={true} component={Index}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
