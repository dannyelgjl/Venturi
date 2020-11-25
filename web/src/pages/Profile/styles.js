import styled from 'styled-components';


export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;



      strong {
        font-size: 36px;
        color: #fff
      }

      h2 {
        color: #fff;
        margin-top: 8px;

        a {
        svg {
          margin-left: 10px;
          transition: transform 0.5s;

          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px
      }

    }

  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;



    li {
      & + li {
        margin-left: 80px
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80
      }
    }
  }
`;


export const Repositories = styled.div `
  margin-top: 80px;
  margin-bottom: 20px;
  width: 600px;
  max-width: 700px;

  h1 {
    color: #fff;
    margin-bottom: 10px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px
    }

    &:hover {
      transform: translateX(10px)
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
