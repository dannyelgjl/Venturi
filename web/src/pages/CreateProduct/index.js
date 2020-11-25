import React, { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Button from '../../components/Button';

import { Container, Title } from './styles';

const CreateProduct = () => {
  const history = useHistory();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const categoryIdParams = location.state.data.id;
  const categoryTitleParams = location.state.data.title;
  const categoryImageParams = location.state.data;

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const response = await api.post('products', {
      title,
      description,
      image,
      price: parseFloat(price),
      categoryId: parseInt(categoryIdParams),
      stock: parseInt(stock),
    });

    if (response.data) {
      toast(<span>🚀 Produto <strong>{response.data.title}</strong> criado com Sucesso!!🚀</span>)
      history.push('/dashboard');
    }
  }, [title, description, price, categoryIdParams, stock, history, image]);

  return (
      <Container>
        <Title>
          <img src={categoryImageParams.image} alt=""/>
          <h1>ARMAZÉM: <strong>{categoryTitleParams}</strong></h1>
        </Title>
        <form onSubmit={handleSubmit}>
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

          <Button type="submit">Criar</Button>
        </form>
      </Container>
  );
}

export default CreateProduct;
