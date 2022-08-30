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
const [amount,setAmount]=useState(1)



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



const increase=()=>{
  if(amount<10){
    setAmount(amount+1)
  }
}
const decrease = ()=>{
  if(amount>1){
    setAmount(amount-1)
  }
}

  return (
    <ProductContext.Provider value={{featured,products,costing,displayStyle,setDisplayStyle,increase,decrease,amount,loading}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;