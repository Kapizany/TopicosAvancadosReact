import React from 'react';
import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView'
import './App.css';

function App() {
  return (
    <div className="App">
        <NewProductView />
        <ProductListView />
    </div>
  );
}

export default App;
