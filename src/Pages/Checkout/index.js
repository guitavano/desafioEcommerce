import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './../global-styled';
import * as S from './styled'
import { useHistory } from 'react-router-dom';

export default function Checkout() {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productsCart = localStorage.getItem('cart')
        if (productsCart != null) {
            productsCart = JSON.parse(productsCart);
            setProducts(productsCart);
            document.querySelector('#vazio').style.display = "none"
        } else {
            document.querySelector('#vazio').style.display = "block"
        }
    }, []);

    function goToHome() {
        history.push('./')
    }

    function removeProduct(obj, event) {
        products.splice(products.indexOf(obj), 1)
        localStorage.setItem('cart', JSON.stringify(products))
        history.push('./checkout')
        somaTotal()
    }

    function somaTotal() {
        let valorProduto = 0
        let valorTotal = 0
        products.map(product => {
            valorProduto = product.p.replace("R$", "").replace(".", "").replace(",", ".")
            valorProduto = parseFloat(valorProduto)
            valorTotal += valorProduto
        })
        valorTotal = valorTotal.toFixed(2)
        setTimeout(function () { document.querySelector('#valor-total').textContent = "R$" + valorTotal.toString() }, 1)
    }
    somaTotal()

    return (
        <>
            <GlobalStyle />
            <S.Header>
                <h1><a href="" onClick={goToHome}> Tavano Tech</a></h1>
            </S.Header>
            <S.Container>
                <S.Cart className="carrinho">
                    {products.map(product => {
                        return (
                            <S.ProductContainer>
                                <S.Image> <img src={product.i} alt="" /> </S.Image>
                                <S.Nome>{product.n}</S.Nome>
                                <S.Excluir onClick={(e) => removeProduct(product, e)} className="remover">Remover</S.Excluir>
                                <S.Nome>{product.p}</S.Nome>
                            </S.ProductContainer>
                        )
                    })}
                    <S.AvisoVazio id="vazio">Carrinho Vazio</S.AvisoVazio>
                </S.Cart>
                <S.Comprar>
                    <S.Total>Total <span id="valor-total"></span> </S.Total>
                    <S.Finalizar>Finalizar Compra</S.Finalizar>
                </S.Comprar>
            </S.Container>
        </>
    )
}