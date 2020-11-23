import React from 'react';

import { Container } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <Container {...rest}>{children}</Container>
  )
}

export default Button;
