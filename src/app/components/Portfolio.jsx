"use client"
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import preview from '../../../public/images/preview.png'
import preview2 from '../../../public/images/preview2.png'
import portfolio from '../../../public/images/portfolio.png'
import cruch from '../../../public/images/cruch.png'
import creative from '../../../public/images/creative.png'
import nexcent from '../../../public/images/nexcent.png'
import agency from '../../../public/images/agency.png'
import service from '../../../public/images/service.png'
import basic from '../../../public/images/basic.png'
import fashion from '../../../public/images/fashion.png'
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { image } from 'framer-motion/client';
import Fadeup from './Fadeup';

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  weight:['700']
});

const contents = [
  { id: 1, image: preview, text1: "Exclusive — Full E-Commerce", text2:"React e-commerce platform with cart system, product filtering & JWT authentication.", t1: "React", t2:"Tailwind", t3:"Redux" },

  { id: 2, image: preview2, text1: "Agency Landing Page", text2:"Professional React agency website with responsive design and testimonials.", t1: "React", t2:"Tailwind", t3:"Redux" },

  { id: 3, image: portfolio, text1: "My Portfolio Website", text2:"Modern portfolio website with full responsiveness, smooth animations.", t1: "Next.js", t2:"Tailwind", t3:"Framer Motion" },

  { id: 4, image: cruch, text1: "Church Landing Page", text2:"Professional community website with responsive design and pixel perfect ui.", t1: "HTML", t2:"CSS", t3:"Responsive" },

  { id: 5, image: creative, text1: "Creative Skill Website", text2:"Creative skill platform showcasing modern learning and development solutions.", t1: "Tailwind", t2:"JavaScript", t3:"Responsive" },

  { id: 6, image: nexcent, text1: "Nexcent Landing Page", text2:"A service-based platform helping clients find experts across different skills.", t1: "HTML", t2:"Tailwind", t3:"Responsive" },

  { id: 7, image: agency, text1: "Creative Agency", text2:"Creative agency delivering modern digital solutions with innovative design.", t1: "HTML", t2:"CSS", t3:"Bootstrap" },

  { id: 8, image: service, text1: "Service Landing Page", text2:"A food service landing page with Bootstrap and clean design.", t1: "HTML", t2:"CSS", t3:"Bootstrap" },

  { id: 9, image: basic, text1: "Basic Portfolio Temp.", text2:"A basic protfolio website with row HTML and CSS with pixel perfect ui", t1: "HTML", t2:"CSS", t3:"Pixel Perfect Ui" },
  { id: 10, image: fashion, text1: "Fashion Website", text2:"A stylish fashion landing page with clean and modern layout.", t1: "HTML", t2:"CSS", t3:"Pixel Perfect Ui" },

]

const contents2 = [
  { id: 1, image: preview, text1: "Exclusive — Full E-Commerce", text2:"React e-commerce platform with cart system, product filtering & JWT authentication.", t1: "React", t2:"Tailwind CSS", t3:"Redux" },

  { id: 2, image: preview2, text1: "Agency Landing Page", text2:"Professional React agency website with responsive design and testimonials.", t1: "React", t2:"Tailwind CSS", t3:"Redux" },

]

const contents3 = [

  { id: 1, image: basic, text1: "Basic Portfolio Temp.", text2:"A basic protfolio website with row HTML and CSS with pixel perfect ui", t1: "HTML", t2:"CSS", t3:"Pixel Perfect Ui" },
  { id: 2, image: fashion, text1: "Fashion Website", text2:"A stylish fashion landing page with clean and modern layout.", t1: "HTML", t2:"CSS", t3:"Pixel Perfect Ui" },
  { id: 3, image: cruch, text1: "Church Landing Page", text2:"Professional community website with responsive design and pixel perfect ui.", t1: "HTML", t2:"CSS", t3:"Responsive" },

]

const contents4 = [
  { id: 1, image: preview, text1: "Exclusive — Full E-Commerce", text2:"React e-commerce platform with cart system, product filtering & JWT authentication.", t1: "React", t2:"Tailwind CSS", t3:"Redux" },

  { id: 2, image: preview2, text1: "Agency Landing Page", text2:"Professional React agency website with responsive design and testimonials.", t1: "React", t2:"Tailwind CSS", t3:"Redux" },

  { id: 3, image: portfolio, text1: "My Portfolio Website", text2:"Modern portfolio website with full responsiveness, smooth animations, and all latest technologies.", t1: "Next.js", t2:"Tailwind CSS", t3:"Framer Motion" },

  { id: 4, image: creative, text1: "Creative Skill Website", text2:"Creative skill platform showcasing modern learning and development solutions.", t1: "Tailwind CSS", t2:"JavaScript", t3:"Responsive" },

  { id: 5, image: nexcent, text1: "Nexcent Landing Page", text2:"A service-based platform helping clients find experts across different skills.", t1: "HTML", t2:"Tailwind CSS", t3:"Responsive" },


]

const contents5 = [
  
  { id: 1, image: agency, text1: "Creative Agency", text2:"Creative agency delivering modern digital solutions with innovative design.", t1: "HTML", t2:"CSS", t3:"Bootstrap" },

  { id: 2, image: service, text1: "Service Landing Page", text2:"A food service landing page with Bootstrap and clean design.", t1: "HTML", t2:"CSS", t3:"Bootstrap" },


]

const contents6 = [
  
  { id: 1, image: portfolio, text1: "My Portfolio Website", text2:"Modern portfolio website with full responsiveness, smooth animations, and all latest technologies.", t1: "Next.js", t2:"Tailwind CSS", t3:"Framer Motion" },


]

const Portfolio = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-10 md:pt-20 pb-20 md:pb-37.5'>
            <div className="container px-4 lg:px-0">
              <Fadeup>
                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>My Work</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>Port<span className='text-[#D4AF37] italic'>folio</span></h3>
                    <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Selected projects from recent years</p>
                </div>
                </Fadeup>

              <Fadeup>
                <div className=" pt-15">
                  <Tabs>
                    <TabList >
                      <div className="flex md:gap-3 lg:gap-6 justify-center ">
                        <Tab >
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] px-18.5 py-3.5 md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>ALL</button> 
                        </Tab>
                        <Tab className="hidden md:block">
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>REACT</button>
                        </Tab>
                        <Tab className="hidden md:block">
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>HTML/CSS</button>
                        </Tab>
                        <Tab className="hidden md:block">
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>Tailwind</button>
                        </Tab>
                        <Tab className="hidden md:block">
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>Bootstrap</button>
                        </Tab>
                        <Tab className="hidden md:block">
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] md:px-5 md:py-2.5 lg:px-10 lg:py-2.5 rounded-lg `}>Next.js</button>
                        </Tab>
                      </div>
                    </TabList>


                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='md:w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[18px] md:text-[20px] lg:text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[16px] lg:text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex md:gap-2 lg:gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px] invisible md:visible`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents2.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>

                              {/* <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                                <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div> */}


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>


                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents3.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>

                              {/* <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                                <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div> */}


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>

                    
                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents4.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>

                              {/* <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                                <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div> */}


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>


                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents5.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>

                              {/* <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                                <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div> */}


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>


                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={30}
                          slidesPerView={3}
                          breakpoints={{
                            0:    { slidesPerView: 1 },
                            640:  { slidesPerView: 1 },
                            768:  { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                          speed={1500}
                          autoplay={{ delay: 3000 }}
                          loop={true}
                        >
                      {
                        contents6.map(content=>(
                            <SwiperSlide>
                            <div className="flex items-center justify-center cursor-pointer">
                              <div className="group border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                              <Image src={content.image} alt='preview' className='w-106.25 h-70' style={{borderRadius: '12px 12px 0 0'}}></Image>

                              {/* <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                                <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div> */}


                            </div>
                              <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                              <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>{content.text1}</h3>
                              <p className={`text-[#9A9A9A] text-[18px] ${cormorant.className} font-medium pb-3.5 pt-2 h-20`}>{content.text2}</p>
                              <div className="teq pb-3.5">
                              <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t1}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t2}</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>{content.t3}</a></li>

                              </ul>
                              </div>
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                              <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                              <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>
                              </div>
                            </div>
                            </SwiperSlide>
                        ))
                      }
                        
      
                      </Swiper>
                      </div>
                    </TabPanel>


                  </Tabs>
                </div>

                </Fadeup>

                
            </div>
        </section>
    </>
  )
}

export default Portfolio

