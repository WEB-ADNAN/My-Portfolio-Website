import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loding from '../components/Loding';


const layout = ({children}) => {


  return (
    <>
        <Loding></Loding>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </>
  )
}

export default layout