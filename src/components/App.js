import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { TokenContextProvider } from "../contexts/TokenContext";
import { UserContextProvider } from "../contexts/UserContext";
import { ActiveContextProvider } from "../contexts/ActiveContext";
import GlobalStyle from "./GlobalStyle";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage"
import { CartContextProvider } from "../contexts/CartContext";
import { TotalContextProvider } from "../contexts/TotalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <UserContextProvider>
          <TokenContextProvider>
            <ActiveContextProvider>
              <CartContextProvider>
                <TotalContextProvider>
                  <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                  </Routes>
                </TotalContextProvider>
              </CartContextProvider>
            </ActiveContextProvider>
          </TokenContextProvider>
        </UserContextProvider>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div``;
