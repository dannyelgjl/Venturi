import React from 'react';

// Componente estilizado
import { Container } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <Container {...rest}>{children}</Container>
  )
}

export default Button;
