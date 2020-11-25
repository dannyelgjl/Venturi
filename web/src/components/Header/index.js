import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, SignOut, Cart } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header({ title }) {
  const dispatch = useDispatch();

  const cartSize = useSelector(state => state.cart.length);
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <span className="logo">{title}</span>
          <Link to="/dashboard">Dashboard</Link>
        </nav>



        <aside>
          <Cart to="/cart">
            <div>
              <strong>Meu carrinho</strong>
              <span>{cartSize} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
          </Cart>

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>

          <SignOut>
            <button type="button" onClick={() => dispatch(signOut())}>
            <p>
             Sair
            </p>
            <FiLogOut size={16}/>
            </button>
          </SignOut>
        </aside>
      </Content>
    </Container>
  );
}
