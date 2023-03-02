import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from '../Admin/Admin';
import Cart from './Cart';
import EditProduct from './EditProduct';
import Homepage from './Home/Homepage';
import SingleProduct from './SingleProduct';
import Winter from './Winter';
// import Home from './Home';

const Allroute = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />;
      <Route path="/winter" element={<Winter/>} />;
      <Route path="/admin" element={<Admin/>} />;
      <Route path="/login" element={<h1>ALL</h1>} />;
      <Route path="/detalspage/:id" element={<SingleProduct/>} />;
      <Route path='/edit' element={<EditProduct/>}/>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    // </BrowserRouter>
    
  
  )
}

export default Allroute