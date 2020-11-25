import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal';
import FormUpdate from '../../components/FormUpdate';
import api from '../../services/api';
import * as CartAction from "../../store/modules/cart/actions";

import { useLocation, useHistory } from 'react-router-dom';

import { formatPrice } from '../../util/format';

import { MdAddShoppingCart, MdDelete, MdUpdate } from 'react-icons/md';

import { ProductList, StyledLink, Form } from './styles';

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {}));


   useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  const deleteProduct = useCallback(async (id) => {
    const response = await api.delete(`products/${id}`);

    //const product = products.filter(product => product.id === id)

    setProducts(products.filter(product => product.id !== id));
    toast(`${response.data} 😥`);
  }, [products]);

  function handleAddProduct(id) {
    dispatch(CartAction.addToCartRequest(id));
  };

 const updateProduct = useCallback((data, product) => {
  history.push({
    pathname: '/dashboard',
    state: {  data, product  },
  })
  console.log(data);

   setIsModalVisible(true);
  }, []);

  return (
  <>
    <StyledLink to="/storage">Criar Armazém</StyledLink>
    {isModalVisible ?
    <Modal onClose={() => setIsModalVisible(false)} >
      <FormUpdate />
    </Modal>
      :
      <ProductList>
      {products.map(product => (
         <li key={product.id}>
         <img
           src={product.image}
           alt={product.title}
           />
           <span>Armazém: {product.category.title}</span>
           <strong>Carro: {product.title}</strong>
           <span>{product.priceFormatted}</span>

           <span>Descrição: {product.description}</span>

           <button  style={{ width:'30px', marginBottom: '5px' }} onClick={() => updateProduct(product)}>
            <MdUpdate size={30} style={{ position: 'relative',  }} />
           </button>

           <button  style={{ width:'30px', marginBottom: '5px' }} onClick={() => deleteProduct(product.id)}>
            <MdDelete size={30} style={{ position: 'relative',  }} />
           </button>
           <button type="button" onClick={() => handleAddProduct(product.id)}>
             <div>
               <MdAddShoppingCart  size={16} color="#FFF" />
               {amount[product.id] || 0}
             </div>

             <span>ADICIONAR AO CARRINHO</span>
           </button>
       </li>
      ))}
    </ProductList>
    }

  </>
  )
}

export default Product;
