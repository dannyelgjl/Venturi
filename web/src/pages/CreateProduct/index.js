import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const CreateProduct = () => {
  const [title, setTitle] = useState("asdasd");
  const [description, setDescription] = useState("asdasd");
  const [price, setPrice] = useState(123123);
  const [categoryId, setCategoryId] = useState(2);
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    const response = await api.post('products', {
      title, 
      description, 
      price, 
      categoryId,
    });

    if (response.data) {
      console.log(response.data);
      history.push("/product");
    }
   
  }, [title, description, price, categoryId]);

  return (
    <form onSubmit={handleSubmit}>
      <input  
        placeholder="Produto" 
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      <input  
        placeholder="Preço" 
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value)}
        />
      <input  
        placeholder="Descrição" 
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
      <input  
        placeholder="Armazém" 
        type="text"
        value={categoryId}
        onChange={e => setCategoryId(e.target.value)}
        />

      <button type="submit" >Criar</button>
    </form>
  );
}

export default CreateProduct;