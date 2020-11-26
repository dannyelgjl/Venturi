import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Link } from 'react-router-dom';
// Action redux
import { signOut } from '../../store/modules/auth/actions';
// Icons
import { MdShoppingBasket } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
// Logo
import venturiV from '../../assets/images/venturiV.png';
// Componentes estilizados
import { Container, Content, Profile, SignOut, Cart } from './styles';


export default function Header() {
  const dispatch = useDispatch();

  // Infors cartSize && profile
  const cartSize = useSelector(state => state.cart.length);
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <a href="https://vntrx.com/" target="_blank"> <span className="logo"><img src={venturiV} alt="Venturi V"/></span></a>
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
              <strong>{profile.name}<img src={profile.avatar}/></strong>
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
