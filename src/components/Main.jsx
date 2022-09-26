import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

// import Glider from "react-glider";
// import "glider-js/glider.min.css";

import Slider from "react-slick";


const Main = () => {

  const { featured } = useContext(ProductContext);
  const navigate = useNavigate();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <main className="py-5 featured mt-3 mt-md-5">
      <h1 className="text-center fw-bold mt-2 main-title">Featured Products</h1>
      <div className="underline m-auto mb-3"></div>
      
        {/* //! slider */}
        <Slider {...settings} className="container w-75 w-md-100 m-auto p-0 ">
                {featured.map((item) => {
              return (
                <ul className="m-0 p-0 featured-ul m-auto">
                <li className="list-unstyled mx-1 "><FeaturedProduct key={item.id} item={item} /></li>
                </ul>
                );
              })}
      </Slider>   
      <div className="text-center">
        {" "}
        <button
          className="text-uppercase text-white py-1 px-3 border-0 rounded-2 mt-4"
          onClick={() => navigate("/products")}
        >
          All Products
        </button>
      </div>
    </main>
  );
};
export default Main;
