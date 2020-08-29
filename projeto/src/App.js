import React from 'react';
import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <header>
              <ul className='link-list'>
                <li>
                  <Link to={'/'}>Novo</Link>
                </li>
                <li>
                  <Link to={'/list'}>Lista</Link>
                </li>
              </ul>
            </header>
            <div>
              <Route path={'/'} exact={true} component={NewProductView} />
              <Route path={'/list'} component={ProductListView} />
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
