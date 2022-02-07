import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import AppRouter from "./Components/AppRouter";
import './styles/App.css';

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
