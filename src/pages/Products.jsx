import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "../components/SingleProduct";

const Products = () => {
  const navigate = useNavigate();
  const {products}=useContext(ProductContext)

  console.log(products);
  return (
    <div>
      <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span>
        </h1>
      </div>
      <main className="container row m-auto mt-3 mt-md-5">
        <div className="search col-2 bg-primary">jjjj</div>
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
              products?.map((product)=>{
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
