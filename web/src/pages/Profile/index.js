import React, { useState, useEffect } from 'react';
// API
import api from '../../services/api.github';
// Icons
import { FiChevronRight  } from 'react-icons/fi';
import { SiInstagram  } from 'react-icons/si';
// Estilização dos Componentes
import { Repositories, RepositoryInfo } from './styles';

export default function Profile() {
  // Estados
  const [repositories, setRepositories] = useState([]);
  const [myUser, setMyUser] = useState([]);

  // Carregando dados dos Repositórios
  useEffect(() => {
      async function loadRepositories() {
        const response = await api.get('/users/dannyelgjl/repos?size=33');

        const request = response.data;

        console.log(request);
        setRepositories(request);
      }

      loadRepositories();
  }, []);

  // Carregando dados do meu Perfil
  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/dannyelgjl');

      const request = response.data;

      setMyUser(request);
    }

    loadRepositories();
}, []);

 return (
  <>
    <RepositoryInfo>
      <header>
        <img
          src={myUser.avatar_url} alt="{repository.owner.login}" />
        <div>
          <strong>{myUser.name}</strong>
          <h2>{myUser.location}<a href={myUser.blog} target="_blank" ><SiInstagram color="#fff" size={24} /></a> </h2>
          <p>{myUser.bio}</p>
        </div>
      </header>
    </RepositoryInfo>

    <Repositories>
      <h1>Meus Repositórios 🐱‍🏍🐱‍💻🚀🐱‍👤</h1>
      {repositories.map(repository =>(
        <a key={repository.full_name} target="_blank" href={repository.html_url}>
        <img src={repository.owner.avatar_url} alt="" />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      ))}
    </Repositories>
  </>
 )
}
