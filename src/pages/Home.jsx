import React from 'react'
import Custom from '../components/Custom'
import Header from '../components/Header'
import Main from '../components/Main'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Custom/>
      <Subscription/>
    </div>
  )
}

export default Home


