import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { GlobalStyle } from './../global-styled';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');

    function goToHome() {
        history.push('./')
    }

    function register() {
        const usersList = []
        if (localStorage.getItem('users') != null) {
            let users = localStorage.getItem('users')
            users = JSON.parse(users)
            users.map((u) => {
                usersList.push(u)
            })
            let account = {
                "name": name,
                "email": email,
                "cep": cep
            }
            usersList.push(account)
            localStorage.setItem('users', JSON.stringify(usersList))
        }
        else {
            let account = {
                "name": name,
                "email": email,
                "cep": cep
            }
            usersList.push(account)
            localStorage.setItem('users', JSON.stringify(usersList))
        }
    }

    return (
        <>
            <GlobalStyle />
            <S.Header><h1><a href="" onClick={goToHome}> Tavano Tech</a></h1></S.Header>
            <S.RegisterContent>
                <S.Register>
                    <form action="">
                        <h2>Nome</h2>
                        <input type="text" id="nome" onChange={e => setName(e.target.value)} />
                        <h2>E-mail</h2>
                        <input type="text" id="email" onChange={e => setEmail(e.target.value)} />
                        <h2>CEP</h2>
                        <input type="text" id="cep" onChange={e => setCep(e.target.value)} />
                        <input type="submit" value="Cadastrar" id="cadastrar" onClick={register} />
                    </form>
                </S.Register>
            </S.RegisterContent>

        </>
    )
}