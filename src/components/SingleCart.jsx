import { useContext, useEffect, useState } from "react";
import { FaMinus,FaPlus,FaTrashAlt} from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";


const SingleCart = ({item}) => {
const {id,amount,detail,color}=item;
const {costing,cart,setCart}=useContext(ProductContext)
const [subtotal,setSubtotal]=useState(0)

const removeItem = (id) => {
  // console.log(id);
  let newCart = cart.filter((item)=>item.id !== id)
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
        <div className="container single-card-container">
          <div className="d-flex justify-content-start align-items-center ">
            <div className="cart-img">
            <img src={detail.images[0].url} alt={detail.images[0]} />
          </div>
          <div className="d-flex flex-column">
            <span className='text-capitalize'>{detail.name}</span>
            <span className="d-flex">
              Color:{ <span style={{ backgroundColor: color }} className="rounded-2 border-0 mx-1"><p className="cart-default-color mx-2">x</p></span> }
            </span>
          </div>
          </div>
          <div >
            <span>${String(detail.price).slice(0, 3) + "." + String(detail.price).slice(3)}</span>
          </div>
          <div className='details-minusplusDiv d-flex align-items-center'>
            {/* <button className='border-0 fs-3' onClick={()=>setQuantity(quantity === 10 ? quantity : quantity + 1)}><FaPlusCircle/></button> */}
            <button className='border-0 fs-3 minus' onClick={()=>decreaseQuantity(id)}><FaMinus/></button>
            <h3 className='m-0'>{amount}</h3>
            <button className='border-0 fs-3 plus' onClick={()=>increaseQuantity(id)}><FaPlus/></button>
          </div>
          <div>
          ${String(Number(amount)*Number(detail.price)).slice(0, 3) + "." + String(Number(amount)*Number(detail.price)).slice(3)}
          </div>
          <div>
          <button className='border-0 fs-3 bg-transparent text-danger col-1' onClick={()=>removeItem(id)}><FaTrashAlt/></button>
          </div>
        <hr />
    </div>
  )
}

export default SingleCart