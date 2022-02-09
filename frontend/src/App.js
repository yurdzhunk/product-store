import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./UI/MyNavbar";
import AppRouter from "./Components/AppRouter";
import './styles/App.css';
import { CartContext } from "./context/context";
import image1 from './images/sale1.png';

function App() {

  const [productsInCart, setProductsInCart] = useState([{id:1, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:2, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:3, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:4, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:5, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:6, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  {id:7, name: 'Sour Cream', price: 7.5, image: image1, number: 3},
  ])

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
