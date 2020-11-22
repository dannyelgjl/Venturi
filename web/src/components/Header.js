import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';


import { Container, Cart } from './styles';

import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <Container>
      <Link to="/product">
        <img src={logo} alt="ProductFast"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>5 itens</span>
        </div>

        <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}

export default Header;