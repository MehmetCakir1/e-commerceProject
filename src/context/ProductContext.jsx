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
const [defaultPrice, setDefaultPrice] = useState([])


const [cart, setCart] = useState(
  JSON.parse(localStorage.getItem('cart')) || []
);
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem('user')) 
);


useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart]);

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user))
}, [user]);


const getProducts=async()=>{
  setLoading(true);
  try{
    const {data}=await axios.get(url);
    // console.log(data);
    setProducts(data)
    setFeatured(data.filter((item)=>item.hasOwnProperty("featured")))
    setDefaultPrice(Math.max(...data.map((item) => item.price)))
    setLoading(false)
    }
  catch(err){
    console.log(err)
    setLoading(false)
  }
}

const formatPrice=(number)=>{
  const newNum=Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
  }).format(number/100)
  return newNum
}

useEffect(() => {
  getProducts()
}, [])
// console.log(products);

cart.sort((a,b)=>a.date-b.date)  //in order to send the cart array sorted according to their adding time
  return (
    <ProductContext.Provider value={{featured,products,formatPrice,displayStyle,setDisplayStyle,loading,setShowSidebar,showSidebar,cart,setCart,defaultPrice,setUser,user}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;