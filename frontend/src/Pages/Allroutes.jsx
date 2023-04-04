import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from '../Admin/Admin';
import Address from '../Components/Address';
import Bag from '../Components/Bag';
import Payment from '../Components/Payment';
import PlaceHolder from '../Components/PlaceHolder';
import Cart from './Cart';
import EditProduct from './EditProduct';
import CartNav from './Home/CartNav';
import Homepage from './Home/Homepage';
import ProfileEdit from './Home/Profile';
import Register from './Home/Register';
import Login from './Login';
import SingleProduct from './SingleProduct';
import Winter from './Winter';
import Confirm from '../Components/Confirm';
// import Home from './Home';

const Allroute = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />;
      <Route path="/winter" element={<Winter/>} />;
      <Route path="/admin" element={<Admin/>} />;
      <Route path="/login" element={<Login/>} />;
      <Route path="/register" element={<Register/>} />;
      <Route path="/profile" element={<ProfileEdit/>} />;
      <Route path="/detalspage/:id" element={<SingleProduct/>} />;
      <Route path='/edit' element={<EditProduct/>}/>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path='/cart/:id' element={<Bag/>}/>
      <Route path='/cart/placeholder' element={<PlaceHolder/>}/>
      <Route path='/cart/address' element={<Address/>}/>
      <Route path='/cart/payment' element={<Payment/>}/>
      <Route path='/cart/order' element={<PlaceHolder/>}/>
      <Route path="/cart/confirm" element={<Confirm/>} />
    </Routes>
    // </BrowserRouter>
    
  
  )
}

export default Allroute