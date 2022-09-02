import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart,FaUserPlus,FaBars} from "react-icons/fa";
import Sidebar from "./Sidebar";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
 const {showSidebar,setShowSidebar,cart}=useContext(ProductContext)

  return (
    <div>
    <nav className="container d-flex justify-content-between align-items-center py-3">
      <div className="logo ">
        <Link to="/">
          <img src="images/logo.svg" alt="logo" />
        </Link>
      </div>
      <button className="d-flex align-items-center d-md-none border-0 bg-transparent fs-1 hamburger-menu" onClick={()=>setShowSidebar(true)}><FaBars/></button>
      <div className="links d-md-flex gap-5 fs-5 d-none ">
        <Link className="text-dark text-decoration-none" to="/">Home</Link>
        <Link className="text-dark text-decoration-none" to="/about">About</Link>
        <Link className="text-dark text-decoration-none" to="/products">Products</Link>
      </div>
      <div className="d-none d-md-flex justify-content-between align-items-center">
        <Link to="/cart" className="text-dark text-decoration-none">
        <div className="cart d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0">Cart</p>
          <span className="fs-3 shoppingCart d-flex align-items-center justify-content-center mx-1"><FaShoppingCart/>
            <span className="cartTotal text-light fs-5 d-flex justify-content-center align-items-center">{cart.length}</span>
          </span>
        </div>
        </Link>
       <Link to="login" className="text-dark text-decoration-none">
       <div className="login d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0">Login</p>
          <span className="fs-3 d-flex align-items-center justify-content-center mx-1"><FaUserPlus/></span>
        </div></Link>
      </div>
    </nav>
    {
      showSidebar && <Sidebar/>
    }
      </div>
  );
};

export default Navbar;
