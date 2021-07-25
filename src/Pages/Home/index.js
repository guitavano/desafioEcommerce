import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { GlobalStyle } from './../global-styled';
import { useHistory } from 'react-router-dom';

function App(props) {
    const history = useHistory();
    const [product, setProduct] = useState([]);

    function saveProducts() {
        axios.get("https://my.api.mockaroo.com/products.json?key=6d944250")
            .then(response => {
                const products = response.data;
                localStorage.setItem('products', JSON.stringify(products))
            })
    }

    saveProducts()

    useEffect(() => {
        let products = JSON.parse(localStorage.getItem('products'))
        setProduct(products)
    }, []);

    function goToLogin() {
        history.push('./login')
    }

    function goToCheckout() {
        history.push('./checkout')
    }

    function goToHome() {
        history.push('./')
    }

    function addtoCart(obj, event) {
        let cart = localStorage.getItem('cart')
        let productsCart = []

        if (cart != null) {
            cart = JSON.parse(cart)
            cart.map((product) => {
                productsCart.push(product);
            });
            productsCart.push(obj)
        }
        else {
            productsCart[0] = obj
        }
        localStorage.setItem('cart', JSON.stringify(productsCart))

        //Popup
        document.querySelector('#popup').style.left = "100px";
        setTimeout(function () {
            document.querySelector('#popup').style.left = "-350px";
        }, 2000)
        document.querySelector('#produto-popup').textContent = JSON.stringify(obj.n)
    }

    return (
        <>
            <GlobalStyle />
            <S.Header>
                <S.HeaderContent>
                    <h1><a href="" onClick={goToHome}> Tavano Tech</a></h1>
                    <S.Nav>
                        <h2><a href="" onClick={goToLogin}>Sign In</a></h2>
                        <h2><a href="" onClick={goToCheckout}>Cart</a></h2>
                    </S.Nav>
                </S.HeaderContent>
            </S.Header>
            <S.Container>
                {product.map(product => {
                    return (
                        <S.Card>
                            <S.Image><img src={product.i} alt="" /></S.Image>
                            <S.ProductInfo><h3>{product.n}</h3><h4>{product.p}</h4><button onClick={(e) => addtoCart(product, e)}>Comprar</button></S.ProductInfo>
                        </S.Card>
                    )
                })}
            </S.Container>
            <S.Popup id="popup">
                <S.textPopup id="produto-popup"></S.textPopup>
                <S.textPopup>Adicionado ao Carrinho</S.textPopup>
            </S.Popup>
        </>
    );
}

export default App;