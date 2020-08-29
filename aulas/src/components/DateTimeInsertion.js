import React, {useState} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

function DateTimeInsertion() {

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
        
        <div>
            
            <div className="buttons">
                <button onClick={() => add()}>ADD</button>
                <button onClick={() => remove()}>REMOVE</button>
            </div>

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
    );
  }
  
  export default DateTimeInsertion;
  