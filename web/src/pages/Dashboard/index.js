import React, { useEffect, useState } from 'react'

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, StyledLink } from './styles';

const Product = () => {
  const [products, setProducts] = useState([]);

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
           <span>{product.priceFormatted}</span>

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
