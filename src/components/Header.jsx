import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
    <header className='d-flex row container m-auto align-items-center mt-lg-2 mt-xl-3'>
      <div className='header-desc col-lg-6'>
        <h1>Design Your <br /> Comfort Zone</h1>
        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <button className='border-0 fs-4 text-light py-1 px-3 rounded-1'
        onClick={()=>navigate("/products")}>Shop Now</button>
      </div>
      <div className='img-container d-none d-lg-block col-6'>
        <img className='header-img1' src="images/header1.jpeg" alt="header1" />
        <img className='header-img2' src="images/header2.jpeg" alt="header2" />
      </div>
    </header>
  )
}

export default Header