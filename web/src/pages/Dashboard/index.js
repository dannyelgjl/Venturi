import React, { useEffect, useState, useCallback } from 'react'
// Components
import Modal from '../../components/Modal';
import FormUpdate from '../../components/FormUpdate';
// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';
// Action Redux
import * as CartAction from "../../store/modules/cart/actions";
// Router-dom
import { useHistory } from 'react-router-dom';
// API
import api from '../../services/api';
// Formatador de preços
import { formatPrice } from '../../util/format';
// Toast
import { toast } from 'react-toastify';
// Icons
import { MdAddShoppingCart, MdDelete, MdUpdate } from 'react-icons/md';
// Componentes estilizados
import { ProductList, StyledLink } from './styles';


const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  // Soma do produto
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {}));

  // Carregando Produtos da API e formatando o preço
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

  // Deletando um Produto
  const deleteProduct = useCallback(async (id) => {
    const response = await api.delete(`products/${id}`);

    //const product = products.filter(product => product.id === id)

    setProducts(products.filter(product => product.id !== id));
    toast.error(`${response.data} 😥`);
  }, [products]);

  // Adicionando um Produto ao carrinho
  function handleAddProduct(id) {
    dispatch(CartAction.addToCartRequest(id));
  };

  // Alterando Dados de um Produto
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
            <div className="container-infor-card">
              <div className="image-card">
                <img src={product.category.image} alt={product.category.title}/>
              </div>
            <div className="text-card">
              <h2> Armazém: {product.category.title}</h2>
                <strong>Produto: {product.title}</strong>
                <span>{product.priceFormatted}</span>
                <h3>Descrição: {product.description}</h3>
              </div>
            </div>

          <div className="container-button-card">
            <div className="button-update-card">
              <button  style={{ width:'30px', marginBottom: '5px' }} onClick={() => updateProduct(product)}>
                  <MdUpdate size={30} style={{ position: 'relative',  }} />
              </button>
            </div>

            <div className="button-delete-card">
              <button  style={{ width:'30px', marginBottom: '5px' }} onClick={() => deleteProduct(product.id)}>
                <MdDelete size={30} style={{ position: 'relative',  }} />
              </button>
            </div>
          </div>

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
