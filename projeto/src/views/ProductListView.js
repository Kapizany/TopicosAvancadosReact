import React, {useState, useEffect} from 'react';
import {ProductService} from '../services/ProductService';
import {Channel} from '../services/EventService';
import ProductList from '../components/ProductList';

function ProductListView(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        startData();
    },[]);

    useEffect(() => {

        Channel.on('product:remove', remove);
        Channel.on('product:insertion', startData);
        return  function cleanListener(){
            Channel.removeListener('product:remove', remove);
            Channel.removeListener('product:insertion', startData);
        }
    }, []);

    async function startData(){
        const prod = await ProductService.list();
        setProducts(prod);
    }

    async function remove(id){
        const prod = await ProductService.list();
        const prodIndex = prod.findIndex(product => product.id == id);
        prod.splice(prodIndex,1);
        setProducts(prod);
        await ProductService.remove(id);
    }

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ProductList products={products}/>
        </div>
    )
}

export default ProductListView;