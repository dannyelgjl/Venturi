import React, { useState, useCallback } from 'react';
// Component
import Button from '../../components/Button';
// react-router-dom
import { useHistory, useLocation } from 'react-router-dom';
// API
import api from '../../services/api';
// Toast
import { toast } from 'react-toastify';
// Estilização de componentes
import { Container, Title } from './styles';

const CreateProduct = () => {
  const history = useHistory();
  const location = useLocation();

  // Estados
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  // Dados que estão vindo por parâmetro
  const categoryDataParams = location.state.data;

 // Função para criar Produto
  const handleSubmit = useCallback(async (event) => {
    try {
      event.preventDefault();

      const response = await api.post('products', {
        title,
        description,
        image,
        price: parseFloat(price),
        categoryId: parseInt(categoryDataParams.id),
        stock: parseInt(stock),
      });

      if (response.data) {
        toast(<span>🚀 Produto <strong>{response.data.title}</strong> criado com Sucesso!!🚀</span>)
        history.push('/dashboard');
      }

    }catch(err) {
      toast.error('Verifique se os dados estão corretos ou se você deixou algum campo vazio 😉');
    }

  }, [title, description, price, categoryDataParams, stock, history, image]);

  return (
      <Container>
        <Title>
          <img src={categoryDataParams.image} alt=""/>
          <h1>ARMAZÉM: <strong>{categoryDataParams.title}</strong></h1>
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
            type="number"
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
