import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const UserLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default UserLayout