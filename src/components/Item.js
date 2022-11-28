import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { TotalContext } from "../contexts/TotalContext.js";

export default function Item({ info }) {
  const [counter, setCounter] = useState(1);
  const { total, setTotal } = useContext(TotalContext);
  const subtotalItem = (info.price*counter)
  useEffect(() => {
    setTotal(total + info.price);
  }, []);
  return (
    <ItemContainer>
      <ItemDescription>
        <img src={info.img} alt={info.img} />
        <p>{info.item}</p>
      </ItemDescription>
      <h3>{info.price}</h3>
      <Quantity>
        <ion-icon
          name="remove-circle"
          style={{ color: "red" }}
          onClick={() => {
            setCounter(counter - 1);
            setTotal(total - info.price);
          }}
        ></ion-icon>
        <h4>{counter}</h4>
        <ion-icon
          name="add-circle"
          style={{ color: "green" }}
          onClick={() => {
            setCounter(counter + 1);
            setTotal (total + info.price);
          }}
        ></ion-icon>
      </Quantity>
      <TotalPrice>
        <h5>R$:{subtotalItem},00</h5>
        <ion-icon name="close-circle"></ion-icon>
      </TotalPrice>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
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
