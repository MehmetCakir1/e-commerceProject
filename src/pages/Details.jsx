import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaMinusCircle,FaPlusCircle} from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [imgIndex,setImgIndex]=useState(0)
  const {decrease,increase,amount}=useContext(ProductContext)

  let singleUrl = `https://course-api.com/react-store-single-product?id=${id}`;

  const getProductDetails = async () => {
    try {
      const {    data } = await axios.get(singleUrl);
      setDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(detail);
  useEffect(() => {
    getProductDetails();
  }, []);

  const { name, reviews, price, description, stock, company,colors ,images} = detail;
  // console.log(detail)
  const newImageList=images?.map((item)=>item.thumbnails.large.url)
  // console.log(newImageList)
  
  return (
    <div>
      <div className="details-header py-2 ">
        <h1 className="details-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}> / Products</span>
          <span className="text-capitalize "> / {name}</span>
        </h1>
      </div>
      <div className="container row m-auto">
        <div className="col-12">
          <button className="text-uppercase border-0 p-2 rounded-2 my-3 detail-backBtn" onClick={()=>navigate("/products")}>Back To Products</button>
        </div>
        <div className="details-imgDiv col-lg-6 ">
          <div className="detail-big-img">
           <img src={newImageList && newImageList[imgIndex]} alt="image1" className="rounded-3"/>
          </div>
          <div className="detail-small-img">
              {newImageList?.map((url,index)=>{
              return(
                <img key={url.id} src={url} className="detail-img rounded-3" onClick={()=>setImgIndex(index)}/>
              )
            })
          }
          </div>
        </div>
        <div className="details-content col-lg-6 p-2 ps-lg-4">
          <h1 className="text-capitalize single-detail-title fw-bold">{name}</h1>
          <div className="stars fs-4 d-flex align-items-center flex-row text-warning">
            <span className="d-flex align-items-center">
              <AiOutlineStar />
            </span>
            <span  className="d-flex align-items-center">
              <AiOutlineStar />
            </span>
            <span className="d-flex align-items-center">
              <AiOutlineStar />
            </span>
            <span className="d-flex align-items-center">
              <AiOutlineStar />
            </span>
            <span className="d-flex align-items-center">
              <AiOutlineStar />
            </span>
            <span className="single-detail-review d-flex align-items-center fs-5">({reviews} customer reviews)</span>
          </div>
          <h3 className="single-detail-price"> ${String(price).slice(0, 3) + "." + String(price).slice(3)}</h3>
          <p className="single-detail-desc">{description}</p>
          <p>
            <span className="single-detail-available fw-bold">Available:</span> <span>{stock ? "In Stock" : "Out Of Stock"}</span> 
          </p>
          <p className="text-capitalize">
            <span className="single-detail-available fw-bold">SKU:</span> <span>{id}</span> 
          </p>
          <p className="text-capitalize">
            <span className="single-detail-available fw-bold">Brand:</span> <span>{company}</span>
          </p>
          <hr/>
          <div className="d-flex ">
            <span className="single-detail-color fw-bold">Colors:</span>
            {
              colors?.map((item)=> {
                return(
                  <button style={{backgroundColor:item}} className="rounded-circle border-0 mx-1 px-1 text-light"><TiTick/>
            </button>
                )
              }
              )
            }
          </div>
          <div className="d-flex p-0 align-items-center">
            <button className="bg-transparent border-0 fs-4 me-2 my-2 text-success" onClick={()=>decrease()}><FaMinusCircle/></button>
            <h2 className="m-0 mx-1 fw-bold">{amount}</h2>
            <button className="bg-transparent border-0 fs-4 ms-2 my-2 text-success" onClick={()=>increase()}><FaPlusCircle/></button>
          </div>
          <button onClick={()=>navigate("/cart")} className="cartBtn border-0 p-2 rounded-2 my-3">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
