import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { TokenContext } from "../contexts/TokenContext"
import { UserContext } from "../contexts/UserContext"
import { URL } from "../assets/URL.js"

export default function SignInPage() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {token, setToken} = useContext(TokenContext)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function signIn(event) {
        axios.post(`${URL}/sign-in`, {email, password})
        .then((res) => {
            setToken(res.data.token)
            setUser(res.data)
            console.log(res.data)
            setEmail("")
            setPassword("")
            navigate("/products")
        }).catch ((err) => {
            alert(err.response.data)
            })
            event.preventDefault();
    }

    return(
        <Container>
        <Logo>Rebuild it</Logo>
        <StyledForm onSubmit={signIn}>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Botao type="submit" value="Entrar" />
        </StyledForm>
        <p>Ainda não possui uma conta ? <Link to="/sign-up" ><span>Cadastrar</span></Link></p>
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
