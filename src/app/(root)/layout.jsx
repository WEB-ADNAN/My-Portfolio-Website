"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const layout = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      setVisible(false);
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => window.removeEventListener("load", hide);
    }
    
  }, []);

  return (
    <>
        {loading && <LoadingScreen visible={visible} />}
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </>
  )
}

export default layout