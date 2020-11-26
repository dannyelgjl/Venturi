import React, { useState, useCallback, useEffect } from 'react';
// Component
import Button from '../../components/Button';
// react-router-dom
import { useHistory } from 'react-router-dom';
// Api
import api from '../../services/api';
// Toast
import { toast } from 'react-toastify';
// Componentes estilizados
import { StorageList, Container } from './styles';

const Storage = () => {
  const history = useHistory();

  // Estados
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [storages, setStorages] = useState([]);


  // Criando armazém
  const handleSubmit = useCallback(async (event) => {
    try {
      event.preventDefault();

    const response = await api.post('categories', {
      title,
      image
    });

    if (response.data) {
      toast.success(<span>Armazém <strong>{response.data.title}</strong> criado com Sucesso! 🤩</span>);
      setTitle("");
      setImage("");
    }
    }catch (err) {
      toast.error('Verifique se os dados estão corretos ou se você deixou algum campo vazio 😉');
    }

  },[title, image]);

  // Passando dados do armazém por parâmetro
  const handleParams = useCallback((data) => {
    history.push({
      pathname: '/createproduct',
      state: {  data  },
    })
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

          <input
            placeholder="Adicione uma URL de imagem para criar seu Armazém..."
            value={image}
            onChange={event => setImage(event.target.value)}
            type="text"
          />

          <Button type="submit">Criar</Button>
        </form>

        <StorageList>
          {storages.map(data => (
            <li key={data.id}>
              <img src={data.image} alt={data.title}/>
              <span><strong>Armazém:</strong> {data.title}</span>
              <Button  onClick={() => handleParams(data)}>Crie seus Produtos</Button>
            </li>
          ))}
        </StorageList>
      </Container>
  );
}

export default Storage;
