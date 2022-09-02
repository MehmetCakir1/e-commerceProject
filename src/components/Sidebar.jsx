import { useContext } from "react";
import { FaTimes,FaShoppingCart,FaUserPlus} from "react-icons/fa";
import {Link} from "react-router-dom"
import { ProductContext } from "../context/ProductContext";
import Cart from "../pages/Cart";

const Sidebar = () => {
  const {setShowSidebar,cart}=useContext(ProductContext)

  return (
    <div className="main-sidebar-div p-3 mt-md-3 d-block d-md-none">
      <nav className="d-flex justify-content-between align-items-center">
        <div className='logo'>
          <img src="images/logo.svg" alt="sidebar-logo" />
        </div>
        <button className="border-0 bg-transparent fs-1 text-danger d-flex align-items-center" onClick={()=>setShowSidebar(false)}><FaTimes/></button>
      </nav>
      <div className="sidebar-links d-flex flex-column mt-4 fs-3 fw-bold ps-2">
        <span> <Link to="/" className="text-decoration-none text-dark"onClick={()=>setShowSidebar(false)}>Home</Link></span>
        <span> <Link to="/about" className="text-decoration-none text-dark"onClick={()=>setShowSidebar(false)}>About</Link></span>
        <span> <Link to="/products" className="text-decoration-none text-dark"onClick={()=>setShowSidebar(false)}>Products</Link></span>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to="/cart" className="text-dark text-decoration-none" onClick={()=>setShowSidebar(false)}>
        <div className="cart d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0">Cart</p>
          <span className="fs-3 shoppingCart d-flex align-items-center justify-content-center mx-1"><FaShoppingCart/>
            <span className="cartTotal sidebar-cart-total text-light fs-5 d-flex justify-content-center align-items-center">{cart.length}</span>
          </span>
        </div>
        </Link>
       <Link to="login" className="text-dark text-decoration-none" onClick={()=>setShowSidebar(false)} >
       <div className="login d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0" >Login</p>
          <span className="fs-3 d-flex align-items-center justify-content-center mx-1"><FaUserPlus/></span>
        </div>
        </Link>
       
      </div>
    </div>
  )
}

export default Sidebar