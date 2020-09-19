import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
      background: rgb(236, 240, 245);
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Helvetica, Sans-Serif;
    }

    table{
      padding: 0;
      margin: 0;
    }

  img{
    display: block;
    width: 100%;
  }
  
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #333;
  }

`

export const Container = styled.main`
  width: 60rem;
  margin: auto;
`;

export const Title = styled.div`
    text-align: center;
`;
