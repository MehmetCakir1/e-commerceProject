import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsStar,BsStarHalf,BsStarFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaMinus,FaPlus} from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";


const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [imgIndex,setImgIndex]=useState(0)
  const [amount,setAmount]=useState(1)
  const [cartProducts,setCartProducts]=useState([{
    image:"",
    name:"",
    color:"",
    price:"",
    quantity:"",
    id:""
  }])

  // console.log(cartProducts)

  let singleUrl = `https://course-api.com/react-store-single-product?id=${id}`;

  const getProductDetails = async () => {
    try {
      const {    data } = await axios.get(singleUrl);
      setDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(detail);
  useEffect(() => {
    getProductDetails();
  }, []);



  const { name, reviews, price, description, stock, company,colors ,images,stars} = detail;
  // console.log(detail)
  const newImageList=images?.map((item)=>item.thumbnails.large.url)
  // console.log(newImageList)
  
// console.log(name);
const addToCart= ()=>{
  setCartProducts(...cartProducts,
  {image:newImageList[0],
  name:name,
  // color:"",
  price:price,
  quantity:amount,
  id:id})
  // conole.log(cartProducts);
}

const increase=()=>{
  if(amount<10){
    setAmount(amount+1)
  }
}
const decrease = ()=>{
  if(amount>1){
    setAmount(amount-1)
  }
}


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
        <div className="details-imgDiv col-lg-6">
          <div className="detail-big-img mb-3">
          <img src={newImageList && newImageList[imgIndex]} alt="image1" className="rounded-3"/>
          </div>
          <div className="detail-small-img d-flex justify-content-between align-items-center">
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
          < div className="stars fs-4 d-flex align-items-center flex-row text-warning">
            <span className="d-flex align-items-center">
              {stars >=1 ? <BsStarFill/> : stars>=0.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=2 ? <BsStarFill/> : stars>=1.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=3 ? <BsStarFill/> : stars>=2.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=4 ? <BsStarFill/> : stars>=3.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars ==5 ? <BsStarFill/> : stars>=4.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="single-detail-review d-flex align-items-center fs-5 ps-2">({reviews} customer reviews)</span>
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
            <button className="bg-transparent border-0 fs-4 me-2 my-2" onClick={()=>decrease()}><FaMinus/></button>
            <h2 className="m-0 mx-1 fw-bold">{amount}</h2>
            <button className="bg-transparent border-0 fs-4 ms-2 my-2" onClick={()=>increase()}><FaPlus/></button>
          </div>
          <button onClick={()=>{addToCart();navigate("/cart",{state:{detail:detail,amount:amount}})}} className="cartBtn border-0 p-2 rounded-2 my-3">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
