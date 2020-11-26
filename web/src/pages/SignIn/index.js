import React, { useCallback } from 'react';
// Component
import Button from '../../components/Button';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Action
import { signInRequest } from '../../store/modules/auth/actions';
// UnForm
import { Form, Input } from '@rocketseat/unform';
// Yup
import * as Yup from 'yup';
// Venturi Logo
import venturiLogo from '../../assets/images/venturi.jpg';


// Validações de erros
const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SingIn = () => {
  const dispatch = useDispatch();

  // Loading do botão de login
  const loading = useSelector(state => state.auth.loading);

  // Função para logar na aplicação
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
        </Form>
    </>
  );
}

export default SingIn;
