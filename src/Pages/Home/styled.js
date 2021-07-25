import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Body = styled.body`
margin: 0;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
background-color: #157ED2;
padding: 0 30px;
`

export const HeaderContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 1260px;
`

export const Container = styled.section`
width: 100%;
max-width: 1260px;
display:flex;
justify-content: space-around;
align-items: space-around;
margin: auto;
flex-wrap: wrap;
`

export const Card = styled.article`
width: 30%;
border-radius: 30px;
margin: 20px;
`

export const ProductInfo = styled.div`
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Image = styled.div`
height: 70%;
display: flex;
justify-content: center;
align-items: center;
`

export const Nav = styled.nav`
display: flex;
justify-content: space-around;
`

export const Popup = styled.div`
width: 350px;
height: 150px;
background-color: #157ED2;
position: fixed;
top: 100px;
left: -350px;
border-radius: 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 1s;
`

export const textPopup = styled.p`
color:white;
font-size: 1.5rem;
margin: 10px;
`
