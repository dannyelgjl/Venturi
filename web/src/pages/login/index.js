import React from 'react'

import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg'

import { Container, Content } from './styles';

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo"/>
      
      <form>
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