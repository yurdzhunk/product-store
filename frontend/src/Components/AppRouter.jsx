import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Location from "../pages/Location";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import CartPage from '../pages/CartPage';
import Login from '../pages/Login';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/main' element= {<Main />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/products' element= {<Products />} />
          <Route path='/sales' element= {<Sales />} />
          <Route path='/location' element= {<Location />} />
          <Route path='/about' element= {<About />} />
          <Route path='/cart' element= {<CartPage />} />
          <Route path='*' element= {<Navigate to='/main' />} />
        </Routes>
    );
};

export default AppRouter;