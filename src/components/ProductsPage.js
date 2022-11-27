import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { URL } from "../assets/URL.js"

export default function StorePage() {
  const [store, setStore] = useState([]);
  const promise = axios.get(`${URL}/products`);
  promise.then((props)=>setStore(props.data))
  promise.catch((err)=>console.log(err.response.data))
  if(store.length!==0){
    console.log(store)
    return (
        <StoreContainer>
          <Logo>Rebuild It</Logo>
          <StoreBG>
            {store.map((product) => (
              <Product>
                <img src={product.img} />
                <ProductDescription>
                  <p>{product.item}</p>
                  <h3>R$:{product.price},00</h3>
                  <div>
                    <ion-icon
                      name="add-circle-outline"
                      style={{ color: "green" }}
                    ></ion-icon>
                    <ion-icon
                      name="remove-circle-outline"
                      style={{ color: "red" }}
                    ></ion-icon>
                  </div>
                </ProductDescription>
              </Product>
            ))}
          </StoreBG>
        </StoreContainer>
    )
  }
  
}

const StoreContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00093d;
`;

const Logo = styled.h1`
  color: #ffffff;
  font-family: "Audiowide", cursive;
  font-size: 32px;
  margin-bottom: 28px;
`;

const StoreBG = styled.div`
  width: 90vw;
  /* height: 800px; */
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  img {
    width: 100px;
    height: 160px;
  }
`;

const Product = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 20px;
  justify-content: center;
  p {
    color: black;
    font-size: 20px;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }
  h3 {
    color: #2dcf58;
    font-size: 18px;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    text-align: center;
  }
  div {
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
    ion-icon {
      width: 25px;
      height: 25px;
    }
  }
`;

{
  /* <Product>
          <img src="https://storage-asset.msi.com/global/picture/features/MB/Gaming/B450/B450Tomahawk/b450-tomahawk-tuning-1920.png" />
          <ProductDescription>
            <p>Placa Mãe MSI B450 Tomahawk</p>
            <h3>R$: 720,00</h3>
            <div>
              <ion-icon name="add-circle-outline" style={{color:"green"}}></ion-icon>
              <ion-icon name="remove-circle-outline" style={{color:"red"}}></ion-icon>
            </div>
          </ProductDescription>
        </Product> */
}


/* return (
  <StoreContainer>
    <Logo>Rebuild It</Logo>
    <StoreBG>
      {store.map((product) => (
        <Product>
          <img src={product.img} />
          <ProductDescription>
            <p>{product.item}</p>
            <h3>R$:{product.price},00</h3>
            <div>
              <ion-icon
                name="add-circle-outline"
                style={{ color: "green" }}
              ></ion-icon>
              <ion-icon
                name="remove-circle-outline"
                style={{ color: "red" }}
              ></ion-icon>
            </div>
          </ProductDescription>
        </Product>
      ))}
    </StoreBG>
  </StoreContainer>
); */