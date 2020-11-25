import React, { useState, useCallback } from 'react';
// Component
import Button from '../Button';
// react-router-dom
import { useHistory, useLocation } from 'react-router-dom';
// API
import api from '../../services/api';
// Componentes estilizados
import { Form } from './styles'

const FormUpdate = () => {
  const location = useLocation();
  const history = useHistory();

  // Pegando dados por parâmetro
  const productDataParams = location.state.data;

  const [title, setTitle] = useState(productDataParams.title);
  const [image, setImage] = useState(productDataParams.image);
  const [description, setDescription] = useState(productDataParams.description);
  const [price, setPrice] = useState(productDataParams.price);
  const [stock, setStock] = useState(productDataParams.stock);
  const [categoryId, setCategoryId] = useState(productDataParams.categoryId);

  // Alterando dados do Produto
  const handleSubmitUpdate = useCallback(async (id, event) => {
    event.preventDefault();

    const response = await api.put(`products/${id}`, {
      title,
      description,
      image,
      price: parseFloat(price),
      categoryId: parseInt(categoryId),
      stock: parseInt(stock),
    });


    if (response.data) {
      console.log(response.data);

      history.push('/dashboard');
    }
  }, [title, description, price, productDataParams, stock, history, image, categoryId]);

  return (
    <Form onSubmit={() => handleSubmitUpdate()}>
      <img src={image} alt={title}/>
        <div className="container-input-row">
          <div className="input-left">
            <label>Nome do Produto</label>
            <input
                placeholder="Nome do Produto..."
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
          </div>

          <div className="input-right">
            <label>Preço</label>
            <input
              placeholder="Preço"
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              />
          </div>
        </div>

        <div className="container-input-column">
          <div className="input-up">
            <label>Descrição</label>
              <input
                placeholder="Descrição"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
          </div>

          <div className="input-down">
            <label>Estoque</label>
              <input
                placeholder="Quantidade de estoque disponível"
                type="text"
                value={stock}
                onChange={e => setStock(e.target.value)}
              />
          </div>
        </div>
          <Button type="submit">Alterar dados</Button>
        </Form>
  );
}

export default FormUpdate;
