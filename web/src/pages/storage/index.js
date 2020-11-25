import React, { useState, useCallback, useEffect } from 'react';

// Component
import Button from '../../components/Button';

import { useHistory } from 'react-router-dom';

// Api
import api from '../../services/api';

import { toast } from 'react-toastify';

// Stylizations
import { StorageList, Container } from './styles';

const Storage = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [storages, setStorages] = useState([]);


  // Criando armazém
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const response = await api.post('categories', {
      title
    });

    if (response.data) {
      toast.success(<span>Armazém <strong>{response.data.title}</strong> criado com Sucesso! 🤩</span>);
      setTitle("");
    }
  },[title]);

  // Passando dados do armazém por parâmetro
  const handleParams = useCallback((data) => {
    history.push({
      pathname: '/createproduct',
      state: {  data  },
    })

    console.log(data);
  }, [])

  // Listando Armazéns
  useEffect(() => {
    api.get('categories').then(response => {
      setStorages(response.data);
    });
  },[storages]);

  return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Digite um nome para criar seu Armazém..."
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text"
          />
          <Button type="submit">Criar</Button>
        </form>

        <StorageList>
          {storages.map(data => (
            <li key={data.id}>
              <img src="https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg" alt=""/>
              <span><strong>Armazém:</strong> {data.title}</span>
              <Button  onClick={() => handleParams(data.id)}>Crie seus Produtos</Button>
            </li>
          ))}
        </StorageList>
      </Container>
  );
}

export default Storage;
