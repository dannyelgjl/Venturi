import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';

import { StorageList, Container } from './styles';

const Storage = () => {
 // const params = useParams();

  const history = useHistory();
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

  const handleParams = (data) => {
    history.push({
      pathname: '/createproduct',
      state: {  data  },
    })

    console.log(data);
  }

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
          {storages.map(data => (
            <li key={data.id}>
              <strong>{data.id}</strong>
              <span>{data.title}</span>
              <button  onClick={() => handleParams(data.id)}>Crie seus Produtos</button>
            </li>
          ))}
        </StorageList>
      </Container>
  );
}

export default Storage;
