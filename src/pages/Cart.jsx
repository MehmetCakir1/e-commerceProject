import React, { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import SingleCart from "../components/SingleCart";
import { toastThanksNotify, toastWarnNotify } from "../helpers/toastify";



const Cart = () => {
  const navigate = useNavigate();
  const {formatPrice,cart,setCart,user}=useContext(ProductContext)
  const [subTotal,setSubTotal]=useState()


  //shipping fee

  let shippingFee=534

  const calculateTotal = ()=>{
    let sum=0
    cart.map((item)=>sum+=(item.amount)*(item.detail.price))
    setSubTotal(sum)
  }
  useEffect(() => {
    calculateTotal()
  }, [cart])
  
const buying=()=>{
if(cart.length==0){
  toastWarnNotify("Your Cart Is Empty!")
}else{
  setCart([])
  toastThanksNotify("Order complete!Thank you so much for choosing us!")
}
}


// console.log(cart);
  return (
    <div className="cart-div">
      <div className="cart-header py-2 ">
        <h1 className="cart-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}> / Products</span>
          <span className="text-capitalize "> / Cart </span>
        </h1>
      </div>
    <main className="cart-main-part container">
      <div className="cart-upper-part mt-4 border-bottom border-secondary d-none d-md-grid">
        <p className="text-center">Item</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Subtotal</p>
        <p className="text-center"></p>
      </div>
      {
        cart.map((item)=>{
          return(
            <SingleCart  key={item.date} item={item}/>
          )
        })
      }
    </main>
    <div className="cart-btns-div d-flex justify-content-between align-items-center container my-3 px-2">
      <button className="btn rounded-3 fw-bold cart-continue-btn" onClick={()=>navigate("/products")}>Continue Shopping</button>
      <button className="btn rounded-3 fw-bold cart-clear-btn"onClick={()=>setCart([])}>Clear Shopping Cart</button>
    </div>
    <div className="last-part d-flex justify-content-center align-items-end flex-column container">
      <div className="my-3 my-md-4 p-md-2 ">
      <div className="total-order p-3 m-0 px-md-5">
        <div className="fee-div py-3 m-0 ">
          <p className="fw-bold fs-5 m-0"><span>Subtotal:</span><span>{formatPrice(subTotal)}</span></p>
          <p className="fs-5 m-0"><span>Shipping Fee:</span><span>{formatPrice(shippingFee)}</span></p>
        </div>
        <div className="total-fee py-3">
        <p className="fw-bold fs-4 m-0"><span>Order Total:</span><span>{!subTotal ? formatPrice(subTotal) : formatPrice(subTotal+shippingFee)}</span></p> </div>
      </div>
      {
        user ? (
          <button className="cart-login-btn btn rounded-3 fw-bold w-100 my-2" onClick={buying}>BUY</button>
        ):
        (
          <button className="cart-login-btn btn rounded-3 fw-bold w-100 my-2" onClick={()=>navigate("/login")}>LOGIN</button>
        )
      }
      </div>
        </div>
    </div>
  );
};

export default Cart;
