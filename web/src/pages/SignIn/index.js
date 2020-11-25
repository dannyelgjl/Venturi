import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import venturiLogo from '../../assets/images/venturi.jpg';


import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SingIn = ({ error }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = useCallback(({ email, password }) => {
    dispatch(signInRequest(email, password));
  }, []);

  return (
    <>
         <img src={venturiLogo} alt="Venturi Logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">{ loading ? 'Carregando...' : 'Entrar' }</Button>
          <Link to="/register">Criar conta</Link>
        </Form>
    </>
  );
}

export default SingIn;
