import React, { useCallback } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Formatador de preço
import { formatPrice } from "../../util/format";
// Action Redux
import * as CartActions from "../../store/modules/cart/actions";
// react-router-dom
import { useHistory } from 'react-router-dom';
// Toast
import { toast } from 'react-toastify';
// Icons
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
// Componentes estilizados
import { Container, ProductTable, Total } from "./styles";


const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Função para Somar e multiplicar a quantidade de Produtos no carrinho
  const total = useSelector(state => formatPrice(
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  ));

  // Função para formatar o preço dos Produtos
  const cart = useSelector(state => state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })));

  // Função para incrementa o Produto
  const increment = useCallback((product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }, []);

  // Função para decrementar o Produto
  const decrement = useCallback((product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }, [])

  // Função para Exibir Toast e Mudar de rota
  const completedOrder = useCallback(() => {
      toast.success('Compra finalizada com Sucesso!!💰🤑');

      history.push('/dashboard');
  }, []);

  return (
    <Container style={{ background: "#fff", padding: 30, borderRadius: 5 }}>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#A4A408" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#1472b6" />
                  </button>
                </div>
              </td>
              <td>
                <strong className="subtotal">{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeFromCart(product.id))}
                >
                  <MdDelete size={20} color="#B60000" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button onClick={() => completedOrder()} type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong  >{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
