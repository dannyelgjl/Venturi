import React, { useState, useCallback } from 'react';
import api from '../../services/api';
import Button from '../Button';

import { useHistory, useLocation } from 'react-router-dom';

import { Form } from './styles'

const FormUpdate = () => {
  const location = useLocation();
  const history = useHistory();
  const productDataParams = location.state.data;


  const [title, setTitle] = useState(productDataParams.title);
  const [image, setImage] = useState(productDataParams.image);
  const [description, setDescription] = useState(productDataParams.description);
  const [price, setPrice] = useState(productDataParams.price);
  const [stock, setStock] = useState(productDataParams.stock);
  const [categoryId, setCategoryId] = useState(productDataParams.categoryId);

  const handleSubmitUpdate = useCallback(async (id) => {
    const response = await api.put(`products/${id}`, {
      title,
      description,
      image,
      price: parseFloat(price),
      categoryId: parseInt(categoryId),
      stock: parseInt(stock),
    });


    console.log(id);

    if (response.data) {
      console.log(response.data);

      history.push('/dashboard');
    }
  }, [title, description, price, productDataParams, stock, history, image, categoryId]);


  return (
    <Form onSubmit={handleSubmitUpdate}>
          <input
            placeholder="Nome do Produto..."
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
          <input
            placeholder="Coloque a URL da imagem do seu Produto..."
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
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
            placeholder="Quantidade de estoque disponível"
            type="text"
            value={stock}
            onChange={e => setStock(e.target.value)}
          />
          <Button type="submit">Alterar dados</Button>
        </Form>
  );
}

export default FormUpdate;
