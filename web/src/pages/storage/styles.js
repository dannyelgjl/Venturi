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
  margin-top: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    align-items: center;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid #ccc;
      margin-bottom: 10px
    }

    > button {
        width: 160px;
        height: 40px;
    }
  }




`
