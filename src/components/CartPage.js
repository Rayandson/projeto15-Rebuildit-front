import NavBar from "./NavBar";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
export default function Cart() {
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
        {/* flex */}
        <Item>
          <ItemDescription>
            <img
              src="https://images7.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_m.jpg"
              alt=""
            />
            <p>Processador AMD Ryzen 7 5700X, 3.4 GHz (4.2GHz Max Turbo)</p>
          </ItemDescription>
          <h3>R$:1300,00</h3>
          <Quantity>
            <ion-icon name="remove-circle" style={{ color: "red" }}></ion-icon>
            <h4>3</h4>
            <ion-icon name="add-circle" style={{ color: "green" }}></ion-icon>
          </Quantity>
          <TotalPrice>
            <h5>R$:1300,00</h5>
            <ion-icon name="close-circle"></ion-icon>
          </TotalPrice>
        </Item>
        <Item>
          <ItemDescription>
            <img
              src="https://images7.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_m.jpg"
              alt=""
            />
            <p>Processador AMD Ryzen 7 5700X, 3.4 GHz (4.2GHz Max Turbo)</p>
          </ItemDescription>
          <h3>R$:1300,00</h3>
          <Quantity>
            <ion-icon name="remove-circle" style={{ color: "red" }}></ion-icon>
            <h4>3</h4>
            <ion-icon name="add-circle" style={{ color: "green" }}></ion-icon>
          </Quantity>
          <TotalPrice>
            <h5>R$:1300,00</h5>
            <ion-icon name="close-circle"></ion-icon>
          </TotalPrice>
        </Item>
        <Item>
          <ItemDescription>
            <img
              src="https://images7.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_m.jpg"
              alt=""
            />
            <p>Processador AMD Ryzen 7 5700X, 3.4 GHz (4.2GHz Max Turbo)</p>
          </ItemDescription>
          <h3>R$:1300,00</h3>
          <Quantity>
            <ion-icon name="remove-circle" style={{ color: "red" }}></ion-icon>
            <h4>3</h4>
            <ion-icon name="add-circle" style={{ color: "green" }}></ion-icon>
          </Quantity>
          <TotalPrice>
            <h5>R$:1300,00</h5>
            <ion-icon name="close-circle"></ion-icon>
          </TotalPrice>
        </Item>
        <Item>
          <ItemDescription>
            <img
              src="https://images7.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_m.jpg"
              alt=""
            />
            <p>Processador AMD Ryzen 7 5700X, 3.4 GHz (4.2GHz Max Turbo)</p>
          </ItemDescription>
          <h3>R$:1300,00</h3>
          <Quantity>
            <ion-icon name="remove-circle" style={{ color: "red" }}></ion-icon>
            <h4>3</h4>
            <ion-icon name="add-circle" style={{ color: "green" }}></ion-icon>
          </Quantity>
          <TotalPrice>
            <h5>R$:1300,00</h5>
            <ion-icon name="close-circle"></ion-icon>
          </TotalPrice>
        </Item>
        <SummaryDiv>
          <p>Subtotal: R$: 000,00</p>
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

const Item = styled.div`
  display: flex;
  width: 80%;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  border: 5px double rgba(0, 0, 0, 0.7);
  & ion-icon {
    color: black;
    width: 25px;
    height: 25px;
  }
  & p {
    font-size: 22px;
    max-width: 250px;
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  & h3 {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 180px;
  }
`;

const ItemDescription = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  gap: 40px;
  margin-right: 320px;
  & img {
    width: 120px;
    height: 120px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  gap: 5px;
  max-width: 7vw;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  gap: 5px;
  margin-right: 120px;
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