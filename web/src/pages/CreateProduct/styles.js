import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;

   input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
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

export const Title = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;

    object-fit: cover;
    border: 2px solid #1472b6;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  h1 {
    color: #fff;

    strong {
      font-size: 28px;
    }
  }
`;
