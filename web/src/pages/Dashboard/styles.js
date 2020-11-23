import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import background from '../../assets/images/background.svg'

export const StyledLink = styled(Link)`
      background: #545454;
      width: 150px;

      margin: 10px 0;
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

  li {


    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 4px
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #545454;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#545454' )}
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