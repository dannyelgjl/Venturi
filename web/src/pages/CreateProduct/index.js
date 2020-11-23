import React, { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';

import { Container } from './styles';

const CreateProduct = () => {
  const history = useHistory();
  const location = useLocation();

  const categoryId = location.state.data;

  console.log(categoryId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const response = await api.post('products', {
      title,
      description,
      price: parseFloat(price),
      categoryId: parseInt(categoryId),
      stock: parseInt(stock),
    });

    if (response.data) {
      console.log(response.data);
      history.push("/dashboard");
    }
  }, [title, description, price, categoryId, stock, history]);

  return (
      <Container>
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
            placeholder="Quantidade de estoque disponível"
            type="text"
            value={stock}
            onChange={e => setStock(e.target.value)}
          />

          <Button type="submit">Criar</Button>
        </form>
      </Container>
  );
}

export default CreateProduct;
