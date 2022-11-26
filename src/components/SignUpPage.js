import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { URL } from "../assets/URL"

export default function SignUpPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const navigate = useNavigate()

    function signUp(event) {
        alert("foi")
        axios.post(`${URL}/sign-up`, {name, email, password, passwordConfirmation})
        .then((res) => {
            navigate("/")
            setName("")
            setEmail("")
            setPassword("")
            setPasswordConfirmation("")
        }).catch ((err) => {
            alert(err)
            })
            event.preventDefault();
    }

    return(
        <Container>
        <Logo>Rebuild it</Logo>
        <StyledForm onSubmit={signUp}>
        <StyledInput placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name}/>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <StyledInput type="password" placeholder="Confirme a senha" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
        <Botao type="submit" value="Cadastrar" />
        </StyledForm>
        <p>Já tem uma conta ? <Link to="/" ><span>Entrar</span></Link></p>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #00093d;
    p {
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        margin-top: 36px;

        span {
            cursor: pointer;
            color: #2972fb;
            font-weight: 700;
        }
        a {
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: #fff;
        }
    }
   
`
const Logo = styled.h1`
    color: #FFFFFF;
    font-family: 'Audiowide', cursive;
    font-size: 32px;
    margin-bottom: 28px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    
            
`

const StyledInput = styled.input`
    width: 340px;
    height: 46px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    outline: none;
    padding-left: 15px;
        &::placeholder {
            color: #000000;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
        }
        @media(max-width: 326px) {
        width: 90vw;
    }
`
const Botao = styled.input`
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
