import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SingIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(({ email, password }) => {
    dispatch(signInRequest(email, password));
  }, []);

  return (
    <>
      <span className="logo">LOGO</span>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}

export default SingIn;
