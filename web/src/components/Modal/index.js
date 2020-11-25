import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { Container, ModalStyle, Button, Content } from './styles';

const Modal = ({ id="modal", onClose = () => {}, children }) => {
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
