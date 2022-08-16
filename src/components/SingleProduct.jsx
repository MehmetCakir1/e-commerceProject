import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TiZoomOutline } from "react-icons/ti";

const SingleProduct = ({product}) => {
    const { id, name, price, image } = product;
    const [zoom,setZoom]=useState(false)
    const navigate=useNavigate()
  return (
    <div key={id} className="col-md-6 col-lg-4 single-card mt-3">
    <div className='single-card-bottom'>
      <div className="single-imgDiv" onMouseOver={()=>setZoom(true)} onMouseOut={()=>setZoom(false)}>
        <img src={image} alt={name} />
        {
          zoom && <div className="single-zoom d-flex align-items-center justify-content-center">
          <button className="border-0 rounded-circle p-2" onClick={()=>navigate(`/products/${id}`)}><TiZoomOutline className="text-light fs-3"/></button> 
        </div>
        }
      
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <span className="text-capitalize">{name}</span>
        <span>
          ${String(price).slice(0, 3) + "." + String(price).slice(3)}
        </span>
      </div>
    </div>
  </div>
  )
}

export default SingleProduct