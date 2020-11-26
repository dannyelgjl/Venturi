import styled from 'styled-components';

export const Container = styled.div`
  input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
      margin-top: 60px;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px
      }
    }
`;

export const StorageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 60px 0 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    align-items: center;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;

      object-fit: cover;
      border: 2px solid #1472b6;
      margin-bottom: 10px
    }

    > button {
        width: 160px;
        height: 40px;
    }
  }




`
