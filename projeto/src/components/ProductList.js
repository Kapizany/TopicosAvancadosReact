import React, {useEffect, useState} from 'react';
import {Channel} from '../services/EventService';

function ProductList(props) {
    
    const [products, setProducts] = useState([]);
    
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
            {
                products.map(product => (
                    <li key={product.id} className="product-list-item">
                        <button 
                            onClick={() => {remove(product);}}
                        >X</button>
                        <img src={product.image} alt={ product.description } />
                        <div>{ product.description }</div>
                        <div>{ product.price }</div>
                    </li>
                ))
            }
            
        </ul>
    )

}

export default ProductList;