import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import background from '../../assets/images/background.svg'

export const StyledLink = styled(Link)`
      background: #545454;
      width: 150px;
      margin: 30px 0;
      padding: 10px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#545454' )}
      }
`;


export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: 50px;
  margin-bottom: 50px;


  li {
    display: flex;
    flex-direction: column;
    background: #232129;
    border-radius: 4px;
    padding: 20px;

    .container-infor-card {
      flex-direction: row;
      display: flex;


      .image-card {
      > img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid #1472b6;
        margin: 30px 10px 10px;
      }
    }

    .text-card {
        display: flex;
        flex-direction: column;

      > span {
        margin-top: 15px;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
      }

        h2 {
        color: #fff;
        margin-top: 20px;
        line-height: 38px
      }

      strong {
        color: #fff;
        font-size: 16px;
      }

        h3 {
        color: #fff;
        margin-top: 10px;
      }
    }
  }

    img {
      align-self: center;
      max-width: 250px;
      height: 150px;
      border-radius: 4px;
      border: 1px solid #1472b6;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    .container-button-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 18px;

      .button-delete-card {
        >button {
          background: #B60000
        }
      }
    }

    button {
      background: #1472b6;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#1472b6' )}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
