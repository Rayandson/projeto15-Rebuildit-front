import NavBar from "./NavBar";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext.js";
import Item from "./Item.js"
import { TotalContext } from "../contexts/TotalContext";


export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { total, setTotal } = useContext(TotalContext);
  
  return (
    <CartContainer>
      <NavBar />
      <CartBG>
        <Title>Seu Carrinho</Title>
        <Labels>
          <h2>Item</h2>
          <h3>Preço</h3>
          <h4>Quantidade</h4>
          <h5>Total</h5>
        </Labels>
        {cart.map((i)=> (<Item info={i}/>))}
        <SummaryDiv>
          <p>Subtotal: R$: {total},00</p>
          <p>Frete: R$: 0,00</p>
          <p>Preço final: R$: 0,00</p>
          <button>Ir para o Checkout</button>
        </SummaryDiv>
      </CartBG>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00093d;
`;

const CartBG = styled.div`
  width: 90vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  text-align: center;
  width: 100%;
  height: 50px;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  gap: 30px;
  & h2 {
    width: 50%;
  }
  & h3 {
    width: 20%;
    text-align: center;
  }
  & h4 {
    width: 20%;
    text-align: center;
  }
  & h5 {
    width: 10%;
    text-align: center;
    padding-right: 50px;
  }
`;

const SummaryDiv = styled.div`
font-family: "Raleway", sans-serif;
  font-size: 16px;
  gap:5px;
  button{
    margin-top: 30px;
    border: none;
    background-color: #00093d;
    color:white;
    font-size: 16px;
    border-radius:3px;
  }
`