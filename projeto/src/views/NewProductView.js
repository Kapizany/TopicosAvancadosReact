import React, {useState} from 'react';
import {ProductService} from '../services/ProductService';
import {Channel} from '../services/EventService';

function NewProductView (){
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    async function handleSubmit(event){
        event.preventDefault();
        const newProduct = {image,description,price};
        if (newProduct.description && newProduct.price){
            const response = await ProductService.create(newProduct);
            setDescription('');
            setImage('');
            setPrice(0);
            Channel.emit('product:insertion');
        }    
    }
    
    return(
        <div>
            <h1>Novo Produto:</h1>
            <form 
                className="product-form" 
                onSubmit={event => handleSubmit(event)}>
                <label htmlFor="">
                    <span>Imagem</span>
                    <input 
                        name="image" 
                        type="text" 
                        onChange={event => setImage(event.target.value)}
                        value={image}
                    />
                </label>
                <label htmlFor="">
                    <span>Descrição</span>
                    <input 
                        name="description" 
                        type="text" 
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                    />
                </label>
                <label htmlFor="">
                    <span>Preço</span>
                    <input 
                        name="price" 
                        type="text" 
                        onChange={event => setPrice(event.target.value)}
                        value={price}
                    />
                </label>
                <button type="submit">
                    Criar Produto
                </button>
            </form>
        </div>
    )
}

export default NewProductView;