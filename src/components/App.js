import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import { TokenContextProvider } from "../contexts/TokenContext";
import { UserContextProvider } from "../contexts/UserContext";
import GlobalStyle from "./GlobalStyle";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
      <UserContextProvider>
      <TokenContextProvider>
      <Routes>
        <Route path="/" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
      </TokenContextProvider>
      </UserContextProvider>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`