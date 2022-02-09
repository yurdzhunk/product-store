import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import NearStore from "../pages/NearStore";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import CartPage from '../pages/CartPage';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/main' element= {<Main />} />
          <Route path='/products' element= {<Products />} />
          <Route path='/sales' element= {<Sales />} />
          <Route path='/near' element= {<NearStore />} />
          <Route path='/about' element= {<About />} />
          <Route path='/cart' element= {<CartPage />} />
          <Route path='*' element= {<Navigate to='/main' />} />
        </Routes>
    );
};

export default AppRouter;