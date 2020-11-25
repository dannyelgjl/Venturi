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
  }

  .container-input-row {
      flex-direction: row;
      display: flex;

     input {
      width: 290px;
      margin-bottom: 8px
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
