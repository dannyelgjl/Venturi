import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;

  input {
      background: #fff;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 50%;
      color: #000;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px
      }
    }

    button {
      width: 250px;
    }
`;
