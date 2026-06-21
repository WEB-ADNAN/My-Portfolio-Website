"use client";
import React from 'react'
import LoadingScreen from '../components/LoadingScreen';
import { useEffect, useState } from "react";

const Loding = () => {
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

  return loading ? <LoadingScreen visible={visible} /> : null;
};

export default Loding