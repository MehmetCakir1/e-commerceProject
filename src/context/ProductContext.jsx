import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { createContext } from 'react'



let url="https://course-api.com/react-store-products"


export const ProductContext=createContext()


const ProductContextProvider = ({children}) => {

const [featured,setFeatured]=useState([])
const [products,setProducts]=useState([])
const [loading,setLoading]=useState(false)
const [displayStyle,setDisplayStyle]=useState(true)
const [showSidebar,setShowSidebar]=useState(false)


const [cart, setCart] = useState(
  JSON.parse(localStorage.getItem('cart')) || []
);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart]);


const getProducts=async()=>{
  setLoading(true);
  try{
    const {data}=await axios.get(url);
    // console.log(data);
    setProducts(data)
    setFeatured(data.filter((item)=>item.hasOwnProperty("featured")))
    setLoading(false)
    }
  catch(err){
    console.log(err)
    setLoading(false)
  }
}

const costing= (price) => {
  return parseFloat(price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

useEffect(() => {
  getProducts()
}, [])
// console.log(products);

  return (
    <ProductContext.Provider value={{featured,products,costing,displayStyle,setDisplayStyle,loading,setShowSidebar,showSidebar,cart,setCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;