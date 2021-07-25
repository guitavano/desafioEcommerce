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

export const RegisterContent = styled.section`
width: 100%;
display: flex;
justify-content: center;
`

export const Register = styled.div`
width: 100%;
max-width: 860px;
margin: 50px;
padding: 30px;
border-radius: 20px;
border: 3px solid #157ED2;
display: flex;
flex-direction: column;
align-items: center;
    form{
        width: 80%;
    }
    input{
        width: 100%;
        height: 40px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    h2{
        color: #157ED2;
        margin: 0;
    }
    #cadastrar{
      width: 100%;
      border-style:none;
      border-radius: 10px;
      background-color: #157ED2;
      color: white;
      font-weight: 700;
      font-size: 1.3rem;
      height: 50px;
      cursor:pointer;
    }
`