import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #1472b6;
    margin-bottom: 16px;
    object-fit: cover;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }
  h2 {
    color: #fff;
    margin: 0 0 10px 0;
  }

  .container-input-row {
      flex-direction: row;
      display: flex;

     input {
      width: 290px;
      margin-bottom: 8px;

      transition: transform 0.5s;

      &:hover {
        transform: scale(0.9);
      }
    }

    label {
        color: #fff;
        font-weight: bold;
      }

    .input-right {
        > label {
          flex-direction: column;
          display: flex;
        }
      }
      .input-left {
        > label {
          flex-direction: column;
          display: flex;
        }
    }
  }

  .container-input-column {
    flex-direction: column;
    display: flex;
    color: #fff;
    font-weight: bold;

     input {
      width: 584px;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .input-up {
      > label {
        flex-direction: column;
        display: flex;
      }
    }

    .input-down {
      margin-top: 8px;

      > label {
        flex-direction: column;
        display: flex;
      }
    }
  }

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
