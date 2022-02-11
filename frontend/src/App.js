import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./UI/MyNavbar";
import AppRouter from "./Components/AppRouter";
import './styles/App.css';
import { CartContext } from "./context/context";
import image1 from './images/sale1.png';

function App() {

  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider
      value={{
        productsInCart,
        setProductsInCart
        }}
        >
        <BrowserRouter>
          <MyNavbar />
          <AppRouter />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
