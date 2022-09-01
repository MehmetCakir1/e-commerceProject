import React, { useContext, useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { FaMinus,FaPlus,FaTrashAlt} from "react-icons/fa";
import SingleCart from "../components/SingleCart";


const Cart = () => {
  const navigate = useNavigate();
  const {state}=useLocation()
  const {costing,cart,setCart}=useContext(ProductContext)

  //shipping fee

  let shippingFee=5.34

  return (
    <div>
      <div className="cart-header py-2 ">
        <h1 className="cart-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}> / Products</span>
          <span className="text-capitalize "> / Cart </span>
        </h1>
      </div>
    <main className="cart-main-part container">
      <p>Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
      <p>Remove</p>
      {
        cart.map((item)=>{
          return(
            <SingleCart  key={item.id} item={item}/>
          )
        })
      }
    </main>
    <div className="cart-btns-div d-flex justify-content-between align-items-center container my-3 px-2">
      <button className="btn rounded-3 fw-bold cart-continue-btn" onClick={()=>navigate("/products")}>Continue Shopping</button>
      <button className="btn rounded-3 fw-bold cart-clear-btn"onClick={()=>setCart([])}>Clear Shopping Cart</button>
    </div>
    <div className="last-part d-flex justify-content-center align-items-end flex-column container">
      <div className="my-3 my-md-4 p-2">
      <div className="total-order p-3 m-0 px-5">
        <div className="fee-div p-3 m-0 ">
          <p className="fw-bold fs-5 m-0"><span>Subtotal:</span><span>fiyatt</span></p>
          <p className="fs-5 m-0"><span>Shipping Fee:</span><span>${costing(shippingFee)}</span></p>
        </div>
        <div className="total-fee p-3">
        <p className="fw-bold fs-4 m-0"><span>Order Total:</span><span>fiyat g,r</span></p> </div>
      </div>
      <button className="cart-login-btn btn rounded-3 fw-bold w-100 my-2" onClick={()=>navigate("/login")}>LOGIN</button>
      </div>
        </div>
    </div>
  );
};

export default Cart;
