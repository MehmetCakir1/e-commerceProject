import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiZoomOutline } from "react-icons/ti";

const SingleProduct = ({ product, displayStyle }) => {
  const { id, name, price, image, description } = product;
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {displayStyle ? (
        <div key={id} className="col-md-6 col-lg-4 single-card mt-3">
          <div className="single-card-bottom">
            <div
              className="single-imgDiv"
              onMouseOver={() => setZoom(true)}
              onMouseOut={() => setZoom(false)}
            >
              <img src={image} alt={name} />
              {zoom && (
                <div className="single-zoom d-flex align-items-center justify-content-center">
                  <button
                    className="border-0 rounded-circle p-2"
                    onClick={() => navigate(`/products/${id}`)}
                  >
                    <TiZoomOutline className="text-light fs-3" />
                  </button>
                </div>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <span className="text-capitalize">{name}</span>
              <span>
                ${String(price).slice(0, 3) + "." + String(price).slice(3)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="row p-3">
          <div
          style={{height:"200px",maxWidth:"299,34px"}}
            className="single-imgDiv col-lg-4  px-2 p-lg-0 my-lg-4 "
            onMouseOver={() => setZoom(true)}
            onMouseOut={() => setZoom(false)}
          >
            <img src={image} alt={name}  />
            {zoom && (
              <div className="single-zoom d-flex align-items-center justify-content-center">
                <button
                  className="border-0 rounded-circle p-2"
                  onClick={() => navigate(`/products/${id}`)}
                >
                  <TiZoomOutline className="text-light fs-3" />
                </button>
              </div>
            )}
          </div>
          <div className="d-flex  justify-content-end align-items-start flex-column my-lg-4 col-lg-8 ps-lg-4 p-2 py-lg-3">
            <span className="text-capitalize fw-bold fs-4 single-wide-title">{name}</span>
            <span className="fw-bold fs- single-wide-price">
              ${String(price).slice(0, 3) + "." + String(price).slice(3)}
            </span>
            <p>{description.slice(0, 150) + "..."}</p>
            <button className="border-0 rounded-3 single-wide-btn text-light px-2" onClick={() => navigate(`/products/${id}`)}>DETAILS</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
