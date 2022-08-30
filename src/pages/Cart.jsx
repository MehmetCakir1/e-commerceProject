import React, { useContext, useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { FaMinus,FaPlus,FaTrashAlt} from "react-icons/fa";


const Cart = () => {
  const navigate = useNavigate();
  const {state}=useLocation()
  const {decrease,increase,amount,costing}=useContext(ProductContext)
  const [subtotal,setSubtotal]=useState(0)

  useEffect(() => {
    setSubtotal(amount*price)
  }, [amount])
  
  const { name, price,  company,colors ,images} = state;

  const cartImageList=images?.map((item)=>item.thumbnails.large.url)

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
      <div className="item-part">
        <div className="item-part-upper text-center border-bottom border-1 border-secondary p-3">Item</div>
        <div className="item-part-middle d-flex align-items-center justify-content-center gap-3 p-4 border-bottom border-1 border-secondary p-3">
          <div className="cart-img">
          <img src={cartImageList && cartImageList[0]} alt="image1" className="rounded-3"/>
          </div>
          <div>
            <h6 className="text-capitalize">{name}</h6>
            <p className="fw-bold"> Color : <span style={{backgroundColor:{colors}}}>llll</span></p>
          </div>
        </div>
        <div className="item-part-bottom"> 
        </div>
      </div>
      <div className="price-part">
      <div className="price-part-upper text-center border-bottom border-1 border-secondary p-3">Price</div>
        <div className="price-part-middle d-flex align-items-center justify-content-center fw-bold fs-4 border-bottom border-1 border-secondary p-3">${costing(price)}</div>
      </div>
      <div className="quantity-part">
      <div className="quantity-part-upper text-center border-bottom border-1 border-secondary p-3">Quantity</div>
        <div className="quantity-part-middle d-flex align-items-center justify-content-center fw-bold fs-4 border-bottom border-1 border-secondary p-3">
        <div className="d-flex p-0 align-items-center">
            <button className="bg-transparent border-0 fs-4 me-2 my-2" onClick={()=>decrease()}><FaMinus/></button>
            <h2 className="m-0 mx-1 fw-bold">{amount}</h2>
            <button className="bg-transparent border-0 fs-4 ms-2 my-2" onClick={()=>increase()}><FaPlus/></button>
          </div>
        </div>
      </div>
      <div className="subtotal-part">
      <div className="subtotal-part-upper text-center border-bottom border-1 border-secondary p-3">Subtotal</div>
        <div className="subtotal-part-middle d-flex align-items-center justify-content-center fw-bold fs-4 border-bottom border-1 border-secondary p-3">${costing(subtotal)}</div>
      </div>
      <div className="delete-part">
      <div className="delete-part-upper text-center border-bottom border-1 border-secondary p-3"> Remove</div>
        <div className="delete-part-middle d-flex align-items-center justify-content-center fw-bold fs-4 text-danger bg-transparent border-bottom border-1 border-secondary p-3"> <FaTrashAlt className="trash-icon"/></div>
      </div>
    </main>
    <div className="cart-btns-div d-flex justify-content-between align-items-center container my-3 px-2">
      <button className="btn rounded-3 fw-bold cart-continue-btn" onClick={()=>navigate("/products")}>Continue Shopping</button>
      <button className="btn rounded-3 fw-bold cart-clear-btn">Clear Shopping Cart</button>
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
