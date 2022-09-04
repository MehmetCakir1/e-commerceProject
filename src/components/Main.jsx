import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from 'react-router-dom'
import FeaturedProduct from "./FeaturedProduct";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
  const { featured} = useContext(ProductContext);
  const navigate=useNavigate()
  // console.log(featured.slice(0,3));
  // console.log(zoom)
  return (
    <main className="py-5 featured mt-3 mt-md-5">
    <h1 className="text-center fw-bold mt-2 main-title">Featured Products</h1>
    <div className="underline m-auto mb-3"></div>
    {/* <div className="container row m-auto p-0"> */}
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={90}
    slidesPerView={3}
    slidesPerGroup={3}
    // loop={true}
    // loopFillGroupWithBlank={true}
    // navigation
    pagination={{ 
      clickable: true,
    }}
    className="row container m-auto px-4 d-flex justify-content-center align-items-center"
  >
           {featured.map((item) => {
        return (
          <SwiperSlide className="col-4"><FeaturedProduct key={item.id} item={item}/>
          </SwiperSlide>
        );
      })}
  </Swiper>
    {/* </div> */}
    <div className="text-center">  <button className="text-uppercase py-1 px-3 border-0 rounded-2 mt-4" onClick={()=>navigate("/products")} >All Products</button></div>
  </main>
  );
};

export default Main;


