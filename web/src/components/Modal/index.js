import React from 'react';
// Icon
import { AiOutlineCloseCircle } from 'react-icons/ai'
// Componentes estilizados
import { Container, ModalStyle, Button, Content } from './styles';

const Modal = ({ id="modal", onClose = () => {}, children }) => {

  // Função para fechar o modal quando clicar fora do modal
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <Container id="modal"onClick={handleOutsideClick}>
      <ModalStyle>
        <Button onClick={onClose} >
          <AiOutlineCloseCircle />
        </Button>
        <Content>{children}</Content>
      </ModalStyle>
    </Container>
  );
}

export default Modal;
