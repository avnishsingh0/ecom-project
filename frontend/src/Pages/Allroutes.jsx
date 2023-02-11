import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';

const Allroute = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />;
      <Route path="/signIn" element={<h1>ALL Singh</h1>} />;
      <Route path="/jawellary" element={<h1>ALL</h1>} />;
      <Route path="/login" element={<h1>ALL</h1>} />;
      <Route path="/SingleProduct/:id" element={<h1>ALL</h1>} />;
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    </BrowserRouter>
    
  
  )
}

export default Allroute