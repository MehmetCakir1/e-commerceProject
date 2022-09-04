import { useContext, useState } from "react";
import { TiZoomOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";


const FeaturedProduct = ({item}) => {
  const {costing}=useContext(ProductContext)
    const [zoom,setZoom]=useState(false)
    const navigate=useNavigate()
    const { id, name, price, image } = item;
  return (
    <div key={id} className="featured-card glide__slide slider">
    <div>
      <div className="featured-imgDiv" onMouseOver={()=>setZoom(true)} onMouseOut={()=>setZoom(false)}>
        <img src={image} alt={name} />
        {
          zoom && <div className="featured-zoom d-flex align-items-center justify-content-center">
          <button className="border-0 rounded-circle p-2" onClick={()=>navigate(`/products/${id}`)}><TiZoomOutline className="text-light fs-3"/></button> 
        </div>
        }
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <span className="text-capitalize">{name}</span>
        <span>
          {costing(price)}
        </span>
      </div>
    </div>
  </div>
  )
}

export default FeaturedProduct