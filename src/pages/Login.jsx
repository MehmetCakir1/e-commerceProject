import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Login = () => {
const navigate=useNavigate()
const {setUser}=useContext(ProductContext)
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault()
  setUser(`${firstName} ${lastName}`)
  navigate("/cart")
}
// console.log(user)
  return (
    <div className="login-div p-5">
      <form className="login-form m-auto  my-4 p-4 rounded-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName"required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input type="text" className="form-control" id="surname" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
