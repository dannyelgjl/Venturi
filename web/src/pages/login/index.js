import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { singInRequest } from '../../store/modules/auth/actions'

import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg'


import { Container, Content } from './styles';
 


const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(({ email, password }) => {
    dispatch(singInRequest(email, password));

    console.log(singInRequest);

   history.push("product");
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo"/>
        <form onSubmit={handleSubmit}> 
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" type="text"/>
          <input placeholder="Senha" type="password"/>
          <button type="submit" >Entrar</button>
            <a href="#">
              <FiLogIn />
              Criar conta
            </a>
        </form>
      </Content>
    </Container>
  )
}

export default Login;