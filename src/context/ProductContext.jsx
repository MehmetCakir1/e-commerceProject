import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { createContext } from 'react'


const emptyArr=[]

let url="https://course-api.com/react-store-products"


export const ProductContext=createContext()


const ProductContextProvider = ({children}) => {

const [featured,setFeatured]=useState([])
const [products,setProducts]=useState([])
const [loading,setLoading]=useState(false)


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


// console.log(products)
products?.map((item)=>emptyArr.push(item.price))
const maxPrice=Math.max(...emptyArr)
// console.log(maxPrice);
// console.log(...products.filter((item)=>item.price))

  return (
    <ProductContext.Provider value={{featured,products,costing,maxPrice}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;