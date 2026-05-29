import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import About from '../components/About'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Marquee from '../components/Marquee'
import FAQ from '../components/FAQ'

const page = () => {
  return (
    <>
      <Banner></Banner>
      <Marquee></Marquee>
      <Service></Service>
      <About></About>
      <Portfolio></Portfolio>
      <FAQ></FAQ>
      <Contact></Contact>
    </>
  )
}

export default page