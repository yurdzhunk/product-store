import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Main from "./pages/Main";
import About from "./pages/About";
import NearStore from "./pages/NearStore";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import AppRouter from "./Components/AppRouter"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
