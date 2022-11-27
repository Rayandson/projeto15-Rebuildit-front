import styled from "styled-components"
import "../style/icons.css"
import { BiUser } from "react-icons/bi";
import { UserContext } from "../contexts/UserContext"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveContext } from "../contexts/ActiveContext";

export default function NavBar() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const {active, setActive} = useContext(ActiveContext)

    function redirect(route, tab) {
        navigate(route)
        setActive(tab)
        window.scrollTo(0, 0);
    }

        return (
            <>
            <Header>
                <Logo onClick={() => redirect("/")}>Rebuild it</Logo>
                <RightDiv>
                    <MenuContainer>
                        <ProductsLi active={active} onClick={() => redirect("/products", "products")}>PRODUTOS</ProductsLi>
                        <CartLi active={active} onClick={() => redirect("/cart", "cart")}>CARRINHO</CartLi> 
                    </MenuContainer>
                    <SeparationDiv />
                    <UserContainer>
                        <p>Olá, {user?.name}</p>
                        <BiUser className="user-icon"></BiUser>  
                    </UserContainer>
                </RightDiv>
            </Header>
            
            <HeaderMobile>
                <Logo onClick={() => redirect("/")}>Rebuild it</Logo> 
                <UserContainer>
                    <BiUser className="user-icon"></BiUser>  
                </UserContainer>
            </HeaderMobile>
            </>
        )
    
}

const Header = styled.header`
    width: 100%;
    height: 58px;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    @media (max-width: 680px) {
        display: none;
    }
`

const HeaderMobile = styled.header`
    width: 100%;
    height: 53px;
    background-color: #460A65;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    display: none;
    @media (max-width: 680px) {
        display: flex;
    }
`

const Logo = styled.h1`
    color: #01093D;
    font-family: 'Audiowide', cursive;
    font-size: 18px;
`

const UserContainer = styled.div`
min-width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    p {
        font-size: 17px;
        color: black;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`

const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    li {
        cursor: pointer;
    }
`

const ProductsLi = styled.li`
    color: ${props => props.active === "products" ? "#D1BC6C" : "black"};
    font-weight: 700;
`

const CartLi = styled.li`
    color: ${props => props.active === "cart" ? "#D1BC6C" : "black"};
    font-weight: 700;
`

const SeparationDiv = styled.div`
width: 1px;
height: 85%;
background-color: lightgray;
`

const RightDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 55px;

`