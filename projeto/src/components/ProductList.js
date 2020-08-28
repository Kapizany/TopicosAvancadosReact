import React, {useEffect, useState} from 'react';
import {Channel} from '../services/EventService';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

function ProductList(props) {
    
    const [products, setProducts] = useState([]);
    const [classExit, setClass] = useState();
    
    useEffect(() => {
        if (props.products) {
          setProducts(props.products);
        }
      }, [props.products]);

    function remove(product){
        Channel.emit('product:remove', product.id);
    }

    return (
        <ul className="product-list">
            <TransitionGroup>
                {
                    products.map(product => {
                        return(
                            <CSSTransition 
                                key={product.id}  
                                timeout={{'enter':300, 'exit':300}}
                                classNames={{
                                    enter:'entrando',
                                    exitActive: 'saindo'
                                  }}>
                                <li className="product-list-item">
                                    <button 
                                        onClick={() => {remove(product);}}
                                    >X</button>
                                    <img src={product.image} alt={ product.description } />
                                    <div>{ product.description }</div>
                                    <div>{ product.price }</div>
                                </li>
                        </CSSTransition>
                        )
                        
                    })
                }
            </TransitionGroup>
            
            
        </ul>
    )

}

export default ProductList;