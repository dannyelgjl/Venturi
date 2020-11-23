import React, { useEffect, useState } from 'react'
import api from '../../services/api';

import Header from '../../components/Header';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, StyledLink } from './styles';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
    });

  }, [products]);

  return (
  <>
    <StyledLink to="/storage">Criar Armazém</StyledLink>
    <ProductList>
      {products.map(product => (
         <li key={product.id}>
         <img
           src="https://media.gazetadopovo.com.br/2019/05/07153445/bmw-x5-suv-premium-brasil-1-660x372.jpg"
           alt="Carro"
           />
           <span>Armazém: {product.category.title}</span>
           <strong>Carro: {product.title}</strong>
           <span>R$ {product.price}</span>

           <span>Descrição: {product.description}</span>

           <button type="button">
             <div>
               <MdAddShoppingCart  size={16} color="#FFF" />
               3
             </div>
             <span>ADICIONAR AO CARRINHO</span>
           </button>
       </li>
      ))}
    </ProductList>
  </>
  )
}

export default Product;