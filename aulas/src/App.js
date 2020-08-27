import React from 'react';
import './App.css';
import {useState} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

function App() {

  const [myList, setList] = useState([]);

  function add(){
    setList([...myList, {'id': Date.now()}]);
  }

  function remove(){
    if(myList.length){
      setList(myList.slice(1,myList.length));
    }
    
  }

  return (
    <div className="App">
        <div>
          <button onClick={() => add()}>ADD</button>
          <button onClick={() => remove()}>REMOVE</button>
          <TransitionGroup>
            {
              myList.map( item => {
                return (
                      <CSSTransition key={item.id} timeout={{
                                                enter:300,
                                                exit:500
                                              }} classNames={{
                                                enter:'entrando',
                                                exitActive: 'saindo'
                                              }}>
                                               <div className={'btn'}> {item.id} </div>
                      </CSSTransition>
                )
              })
            }
              
          </TransitionGroup>
          
        </div>
    </div>
  );
}

export default App;
