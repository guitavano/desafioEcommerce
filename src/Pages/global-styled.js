import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: montserrat;
    background-color: white;
  }
  h1{
      color: white;
  }
  h2{
      color: white;
      margin-left: 40px;
  }
  h3{
      color: black;
      font-size: 1rem;
      margin-bottom: 10px;
  }
  h4{
    color: black;
    font-size: 1rem;
    margin:0;
    margin-bottom: 20px;
  }
  img{
      width: 100%;
      max-width: 280px;
      height: auto;
  }
  button{
      width: 80%;
      border-style:none;
      border-radius:20px;
      height: 40px;
      background-color: #157ED2;
      color: white;
      font-weight: 700;
      font-size: 1rem;
      cursor:pointer;
  }
  a{
      text-decoration:none;
      color: white;
  }
  .carrinho::-webkit-scrollbar{
    width: 15px;  
  }
  .carrinho::-webkit-scrollbar-track{
    background: white;
    border-radius: 10px;
  }
  .carrinho::-webkit-scrollbar-thumb{
    background-color: #157ED2; 
    border-radius: 20px;
  }
  @media(max-width: 800px){
    body{
      font-size: 50%;
    }
    .remover{
      width:50% !important;
    }
    .carrinho{
      padding:0 !important;
    }
  }
`