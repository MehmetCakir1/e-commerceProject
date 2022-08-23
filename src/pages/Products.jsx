import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "../components/SingleProduct";
import ColorBtn from "../components/ColorBtn";


const Products = () => {
  const navigate = useNavigate();
  const {products,maxPrice,costing}=useContext(ProductContext)
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
        <div className="search col-2 p-0 m-0">
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
          <input type="reset" value="Clear All" className=" mt-2 bg-danger text-light fw-bold px-3 rounded-3 border-0" />
            </form>
        </div>
        <div className="main-products col-10 m-0">
          <div className="main-products-upper d-flex align-items-center justify-content-between row">
            <div className="upper-btnDiv col-4 d-flex align-items-center justify-content-between">
              <div className="products-btnDiv d-flex align-items-center gap-1 p-0 m-0">
                 <button className="d-flex align-items-center border-0 bg-transparent fs-4">
                <FaBorderAll />{" "}
              </button>
              <button className="d-flex align-items-center border-0 bg-transparent fs-4">
                <RiOrderPlayFill />{" "}
              </button>
              </div>
              <span>23 Products Found</span>
            </div>
            <div className="line-through border border-1 border-bottom border-dark col-5 "></div>
            <div className="col-3">
              <span className="me-2">Sort By</span>
              <select name="select" id="select" className="border-0 bg-transparent" >
                <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
              </select>
            </div>
          </div>
          <div className="main-products-bottom row">
            {
              products?.map((product,index)=>{
                return(
                  <SingleProduct key={product.id} product={product}/>
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
