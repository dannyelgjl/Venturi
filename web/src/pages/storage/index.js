import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../components/Button';

import { StorageList, Container } from './styles';

const Storage = () => {
  const [title, setTitle] = useState("");
  const [storages, setStorages] = useState([]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const response = await api.post('categories', {
      title
    });
    if (response.data) {
      console.log(response.data);
      setTitle("");
    }
  },[title]);

  useEffect(() => {
    api.get('categories').then(response => {
      setStorages(response.data);
    });
  },[storages]);


  return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Digite o nome do seu Armazém..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
          />
          <Button type="submit">Criar</Button>
        </form>

        <StorageList>
          {storages.map(storage => (
            <li key={storage.id}>
              <strong>{storage.id}</strong>
              <span>{storage.title}</span>
              <Link to="/createproduct">Crie seus Produtos</Link>
            </li>
          ))}
        </StorageList>
      </Container>
  );
}

export default Storage;
