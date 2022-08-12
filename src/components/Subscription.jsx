import React from 'react'

const Subscription = () => {
  return (
    <section className='py-5'>
      <div className="subs-inner container my-5 row m-auto">
        <h1 className='col-12 mb-3 p-0'>Join our newsletter and get 20% off</h1>
        <p className='col-lg-6  m-0 p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
        <div className='col-lg-6 d-flex align-items-center justify-content-end '>
          <input type="email" placeholder='Enter Email' className='col-6 col-lg-8'/>
          <button type='submit'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Subscription