import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 80px;
background-color: #157ED2;
`

export const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Cart = styled.div`
width: 90%;
max-width: 1260px;
height: 100%;
max-height: 700px;
overflow: auto;
border: 5px solid #157ED2;
margin: 40px;
padding: 20px 40px;
border-radius: 10px;
`

export const ProductContainer = styled.div`
height: auto;
display: flex;
align-items: center;
justify-content:center;
border-bottom: 2px solid #157ED2;
padding:10px;
margin: 10px;
flex-wrap: wrap;
`

export const Image = styled.div`
width: 100px;
height: 100px;
    img{
        width: 100px;
        max-width: 100px;
        height: auto;
    }
`

export const Nome = styled.p`
    color: black;
    font-size: 1.5rem;
    width: 25%;
    margin-left:40px;
`

export const AvisoVazio = styled.h2`
color: black;
width: 100%;
font-size: 2.5rem;
text-align: center;
margin: 0;
`

export const Excluir = styled.p`
color: red;
font-size: 0.8rem;
width: 20%;
cursor: pointer;
`

export const Comprar = styled.div`
width: 500px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Total = styled.h3`
    color: black;
    font-size: 2rem;
    text-align: center;
    margin-top: 10px;
    width: 324px;
    border: 3px solid #157ED2;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 20px;
`

export const Finalizar = styled.button`
font-size: 1.8rem;
margin-top: -25px;
height: 60px;
width: 350px;
border-radius: 0px 0px 20px 20px;
`