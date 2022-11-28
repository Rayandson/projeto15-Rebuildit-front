import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { TokenContext } from "../contexts/TokenContext"
import { UserContext } from "../contexts/UserContext"
import { URL } from "../assets/URL.js"
import { CartContext } from "../contexts/CartContext"
import NavBar from "./NavBar"

export default function SignInPage() {
    
    const {token} = useContext(TokenContext)
    const {user} = useContext(UserContext)
    const {cart} = useContext(CartContext)

    function SendInfo(event) {
        axios.post(`${URL}/purchases`, {user, purchases: cart}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            alert("Compra realizada com sucesso")
        }).catch ((err) => {
            alert(err.response.data)
            })
            // event.preventDefault();
    }

    return(
        <Container>
        <NavBar />
        <Logo>Rebuild it</Logo>
        <Content>
        <p>Comprador: {user.name}</p>
        <Botao onClick={SendInfo}>Finalizar compra</Botao>
        </Content>
        </Container>
    )
}

const Container = styled.div`
margin-top: 58px;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #00093d;
    p {
        color: black;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        margin-top: 36px;
        margin-bottom: 25px;
    }
   
`
const Logo = styled.h1`
    color: #FFFFFF;
    font-family: 'Audiowide', cursive;
    font-size: 32px;
    margin-bottom: 28px;
`
const Content = styled.div`
    width: 90%;
    min-height: 85% ;
    background-color: #FFF;
`


const Botao = styled.button`
width: 340px;
height: 46px;
background: blue;
border-radius: 5px;
color: #FFFFFF;
font-family: 'Raleway', sans-serif;
font-weight: 700;
cursor: pointer;
@media(max-width: 326px) {
        width: 90vw;
    }
`
