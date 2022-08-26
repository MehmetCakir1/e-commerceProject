import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "../components/SingleProduct";
import ColorBtn from "../components/ColorBtn";


const Products = () => {
  const navigate = useNavigate();
  const {products,maxPrice,costing,displayStyle, setDisplayStyle}=useContext(ProductContext)
  const [price,setPrice]=useState(maxPrice)
  const categories= ["All",...new Set(products.map((item)=>item.category))]
  const company=["All",...new Set(products.map((item)=>item.company))]
  const tempColors=[]
  // console.log([...new Set(products.map((item)=>item.category))])
  products.map((item)=>item.colors.map((color2)=>tempColors.push(color2)))
  // console.log(products);
  const colors=[...new Set(tempColors)]
  // console.log(colors);
  return (
    <div>
      <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span>
        </h1>
      </div>
      <main className="container row m-auto mt-3 mt-md-5 p-0">
        <div className="filteringDiv col-sm-3 col-md-2 p-0 m-0">
          <form>
            <input type="search" placeholder="Search"  className="px-1"/>
          <ul className="category p-0 mt-3">
            <h6 className="fw-bold">Category</h6>
            {
              categories.map((item,index)=>{
                return(
                  <li key={index} className="text-capitalize list-unstyled">{item}</li>
                )
              })
            }
          </ul>
          <h6 className="fw-bold">Company</h6>
          <select name="company" id="company-select">
            {
              company.map((item,index)=>{
                return(
                  <option key={index} value={item} className="text-capitalize">{item}</option>
                )
              })
            }
          </select>
          <h6 className="mt-3 fw-bold">Colors</h6>
          <button className="border-0 bg-transparent">All</button>
          {
            colors.map((item,index)=>{
              return(
                <ColorBtn key={index} item={item} index={index}/>
              )
            })
          }
          <h6 className="mt-3 fw-bold">Price</h6>
          <p className="price">${costing(price)}</p>
          <input type="range" name="price" min="0" max={maxPrice} value={price} onChange={(e)=>setPrice(e.target.value)} style={{cursor:"pointer"}}/>
          <div className="mt-3 fw-bold d-flex align-items-center">
             <label htmlFor="shipping" className="me-5">Free Shipping </label> 
            <input type="checkbox" id="shipping" />
          </div>
          <input type="reset" value="Clear All" className=" mt-4 bg-danger text-light fw-bold px-4 py-1 rounded-3 border-0" />
            </form>
        </div>
        <div className="main-products col-sm-9 col-md-10 m-0 mt-3 mt-sm-0">
          <div className="main-products-upper d-flex align-items-sm-center  justify-content-sm-center justify-content-md-between flex-column flex-sm-row row p-0 m-0 ">
            <div className="upper-btnDiv col-sm-6 col-lg-4 d-flex align-items-sm-center justify-content-start justify-content-sm-between flex-column flex-sm-row p-0 m-0">
              <div className="products-btnDiv d-flex align-items-center gap-1 p-0 m-0">
                 <button className="d-flex align-items-center border-0 bg-transparent fs-4" onClick={()=>setDisplayStyle(true)}>
                <FaBorderAll />{" "}
              </button>
              <button className="d-flex align-items-center border-0 bg-transparent fs-4" onClick={()=>setDisplayStyle(false)}>
                <RiOrderPlayFill />{" "}
              </button>
              </div>
              <span>23 Products Found</span>
            </div>
            <div className="line-through border border-1 border-bottom border-dark col-5 bottomLine d-none d-lg-block"></div>
            <div className="col-sm-6 col-lg-3 sortDiv d-flex justify-content-sm-end p-0 m-0 ">
              <span className="me-2">Sort By</span>
              <select name="select" id="select" className="border-0 bg-transparent" >
                <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
              </select>
            </div>
          </div>
          <div className="main-products-bottom row m-auto">
            {
              products?.map((product,index)=>{
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
};

export default Products;
