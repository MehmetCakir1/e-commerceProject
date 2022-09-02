import { useContext, useEffect, useState } from "react";
import { FaMinus,FaPlus,FaTrashAlt} from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";


const SingleCart = ({item}) => {
const {id,amount,detail,color,date}=item;
const {costing,cart,setCart}=useContext(ProductContext)

const removeItem = (date) => {
  // console.log(id);
  let newCart = cart.filter((item)=>item.date !== date)
  setCart(newCart)    
}
const increaseQuantity = (id) =>{
  if(cart.length>0){
    let newCart = cart.filter((item)=>item.id===id)
    amount < 10 ? newCart[0].amount=amount+1 : newCart[0].amount=amount
  let testcart=cart.filter((item)=>item.id!==id)
  setCart([...testcart, ...newCart])
    } }
const decreaseQuantity = (id) =>{
  if(cart.length>0){
    let newCart = cart.filter((item)=>item.id===id)
    amount > 1 ? newCart[0].amount=amount-1 : newCart[0].amount=amount
 
  let testcart=cart.filter((item)=>item.id!==id)
  setCart([...testcart, ...newCart])
    } }
  return (
        <div className="container single-cart-container m-0 p-0 py-3 my-2 border-bottom border-bottom-1 border-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center general-img-div">
            <div className="cart-img">
            <img src={detail.images[0].url} alt={detail.images[0]} />
          </div>
          <div className="d-flex flex-column ms-1 ms-sm-3 img-name-color">
            <span className='text-capitalize product-name fw-bold'>{detail.name}</span>
            <span className="d-flex justify-content-start align-items-center product-color">
              Color:{ <span style={{ backgroundColor: color }} className="rounded-3 border-0 mx-1 single-product-color d-flex justify-content-center align-items-center"></span> }
            </span>
            <span className="single-cart-price d-md-none">${costing(detail.price)}</span>
          </div>
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center">
            <span className="single-cart-price">${costing(detail.price)}</span>
          </div>
          <div className='d-flex  justify-content-center align-items-center'>
            <button className='border-0 fs-6 minus' onClick={()=>decreaseQuantity(id)}><FaMinus/></button>
            <h3 className='m-0 mx-2'>{amount}</h3>
            <button className='border-0 fs-6 plus' onClick={()=>increaseQuantity(id)}><FaPlus/></button>
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center single-cart-subtotal">
          ${costing(amount*detail.price)}
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <button className='border-0 fs-3 bg-transparent text-danger d-flex justify-content-center align-items-center' onClick={()=>removeItem(date)}><FaTrashAlt/></button>
          </div>
    </div>
  )
}

export default SingleCart