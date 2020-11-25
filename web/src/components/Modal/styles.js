import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalStyle = styled.div`
  background-color: #232129;
  color: #000;
  width: 60%;
  height: 60%;
  border-radius: 20px
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  position: relative;
  right: calc(-100% + 64px);
  top: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 36px;
    position: absolute;
    color: #fff
  }

`
export const Content = styled.div`

`

