import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import {  BiGridSmall} from "react-icons/bi";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "../components/SingleProduct";
import { TiTick } from "react-icons/ti";

const _ = require('underscore');//! UNDERSCORE********** _.intersection([][][])


const Products = () => {
  const navigate = useNavigate();
  const {products,costing,displayStyle, setDisplayStyle,loading}=useContext(ProductContext)
  const [newProducts,setNewProducts]=useState(products)
  let highestPrice=products?.map((item)=>(item.price))
  const defaultPrice = Math.max(...highestPrice)
  // let defaultPrice=309999
  const [price,setPrice]=useState(defaultPrice || 30999)
  const [category,setCategory]=useState("all")
  const [company,setCompany]=useState("all")
  const [newColor,setNewColor]=useState("all")
  const [tickColor,setTickColor]=useState("all")
  const [sortedProduct, setSortedProduct] = useState("Price(Lowest)")
  const [checked,setChecked]=useState(false)
  // const [searchTerm,setSearchTerm]=useState("")
  



  const categories= ["All",...new Set(products.map((item)=>item.category))]
  const companyList=["All",...new Set(products.map((item)=>item.company))]
  const tempColors=[]
  // console.log([...new Set(products.map((item)=>item.category))])
  products.map((item)=>item.colors.map((color2)=>tempColors.push(color2)))
  // console.log(products);
  const colors=[...new Set(tempColors)]
  // console.log(colors);

  useEffect(()=>{
    if(!loading){
setNewProducts(products)
// console.log(products);
// console.log("first")
    }
  },[])

  useEffect(() => {
    filterItems();
  },[category, company,price,newColor,checked]);
  
  
  useEffect(() => {
  sortProducts()
  }, [sortedProduct]);
  
  useEffect(() => {
  sortProducts()
  }, [sortedProduct]);
  


const filterItems = ()=>{
  let tempCategory;
  let tempCompany;
  let tempColor;
  let tempPrice;
  let tempChecked;

  
  if (category === "all" && company === "all" && newColor=== "all" && price==defaultPrice  && checked===false) {
    setNewProducts(products);
  } else{

    if(category !== "all"){
      tempCategory = products?.filter((item) => item.category === category)
    }else{
      tempCategory= products
    }
    if(company !== "all"){
      tempCompany = products?.filter((item)=>item.company === company)
    }else{
      tempCompany = products
    }
    if(newColor !== "all"){
      tempColor = products?.filter((item)=>item.colors.includes(newColor))
    }else{
      tempColor = products
    }
    if(price !== defaultPrice){
      tempPrice = products?.filter((item)=>item.price < price)
    }else{
      tempPrice = products
    }
    if(checked===true){
      tempChecked=products?.filter((item)=>item.hasOwnProperty("shipping"))
    }else{
      tempChecked = products
    }
    setNewProducts(_.intersection(tempCategory, tempCompany,tempPrice,tempColor,tempChecked))
  }
}

const sortProducts = () => {
  let empty = []
// console.log(sortedProduct);
if (sortedProduct === "Price(Lowest)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(newStatus?.sort((a,b)=>a.price - b.price))
empty = []
}
if (sortedProduct === "Price(Highest)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(newStatus?.sort((a,b)=>b.price - a.price))
empty = []
}
if (sortedProduct === "Name(A-Z)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(_.sortBy(newStatus, 'name'))
empty = []
}
if (sortedProduct === "Name(Z-A)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(_.sortBy(newStatus, 'name').reverse())
empty = []
}
  }

const clearAll=()=>{
  setCategory("all")
  setCompany("all")
  setNewColor("all")
  setTickColor(false)
  setPrice(defaultPrice)
  setChecked(false)
}


  if(loading){
    return <h1 className="loading">LOADING...</h1>
  }else{
     return (
    <div>
      <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span>
        </h1>
      </div>
      <main className="container row m-auto mt-3 mt-md-5 p-0">
        <div className="filteringDiv col-sm-4 col-md-3 p-0 m-0">
          <form>

            {/*--------------------------- SEARCH INPUT------------- */}

            <input type="search" placeholder="Search"  className="px-1"/>
          <ul className="category p-0 mt-3">

          {/* ----------------CATEGORY----------------- */}

            <h6 className="fw-bold">Category</h6>
            {
              categories.map((item,index)=>{
                return(
                  <li key={index} className="text-capitalize list-unstyled" onClick={(e)=>setCategory(e.target.innerText.toLowerCase())} >{item}</li>
                )
              })
            }
          </ul>
          {/* -------------------COMPANY------------------------- */}

          <h6 className="fw-bold">Company</h6>
          <select name="company" id="company-select" onChange={(e)=>setCompany(e.target.value.toLowerCase())}>
            {
              companyList.map((item,index)=>{
                return(
                  <option key={index} value={item} className="text-capitalize" >{item}</option>
                )
              })
            }
          </select>

        {/* --------------------COLORS------------------ */}

          <h6 className="mt-3 fw-bold">Colors</h6>
          <div className="d-flex">
            <span style={{cursor:"pointer"}} className="border-0 bg-transparent" onClick={()=>{setNewColor("all"); setTickColor(false)}}>All</span>
               {colors.map((item, tickIndex) => {
              return (
                <span style={{backgroundColor:item}} key={tickIndex} className="rounded-circle border-0 mx-1 color-btn" onClick={()=>{setTickColor(tickIndex); setNewColor(item)}}>
                  {tickColor === tickIndex ? <TiTick className='text-white m-1 fs-5'/> : <TiTick className='product-default-color m-1 fs-5'/>}
                </span>
              );
            })}
            </div>

            {/*-------------------- PRICE----------------------- */}

          <h6 className="mt-3 fw-bold">Price</h6>
          <p className="price">${costing(price)}</p>
          <input type="range" name="price" min="0" max={defaultPrice} value={price} onChange={(e)=>setPrice(e.target.value)} style={{cursor:"pointer"}}/>

            {/*---------------- FREE SHIPPING---------------- */}

          <div className="mt-3 fw-bold d-flex align-items-center">
             <label htmlFor="shipping" className="me-5">Free Shipping </label> 
            <input type="checkbox" id="shipping" onClick={()=>setChecked(!checked)} />
          </div>

            {/*--------------------- CLEAR -----------------*/}

          <input type="reset" value="Clear All" className=" mt-4 bg-danger text-light fw-bold px-4 py-1 rounded-3 border-0" 
          onClick={clearAll}
          />
            </form>
        </div>

        {/* ---------------------MAIN PART -----------------------*/}


        <div className="main-products col-sm-8 col-md-9 m-0 mt-3 mt-sm-0">
          <div className="main-products-upper d-flex align-items-sm-center  justify-content-sm-center justify-content-md-between flex-column flex-sm-row row p-0 m-0 ">
            <div className="upper-btnDiv col-sm-6 col-lg-4 d-flex align-items-sm-center justify-content-start justify-content-sm-between flex-column flex-sm-row p-0 m-0">
              <div className="products-btnDiv d-flex align-items-center gap-1 p-0 m-0">
                 <button className= {`${displayStyle && "text-light bg-dark"} d-flex align-items-center border-1 rounded-1 fs-4`} onClick={()=>setDisplayStyle(true)}>
                <BiGridSmall />{" "}
              </button>
              <button className={`${!displayStyle && "text-light bg-dark"} d-flex align-items-center border-1 rounded-1 fs-4`} onClick={()=>setDisplayStyle(false)}>
                <BsList />{" "}
              </button>
              </div>
              <span>{newProducts.length} Products Found</span>
            </div>
            <div className="line-through border border-1 border-bottom border-dark col-5 bottomLine d-none d-lg-block"></div>
            <div className="col-sm-6 col-lg-3 sortDiv d-flex justify-content-sm-end p-0 m-0 ">
              <span className="me-2">Sort By</span>

              {/* -----------------------SORTING PRODUCTS-------------- */}

              <select name="select" id="select" className="border-0 bg-transparent" style={{cursor:"pointer"}} onChange={(e)=>setSortedProduct(e.target.value)}>
               <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
              </select>
            </div>
          </div>
          <div className="main-products-bottom row m-auto">
            {
              newProducts?.map((product,index)=>{
                return(
                  <SingleProduct key={product.id} product={product} displayStyle={displayStyle}/>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  );
  }

 
};

export default Products;
