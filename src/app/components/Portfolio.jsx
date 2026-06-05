"use client"
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import preview from '../../../public/images/preview.png'
import preview2 from '../../../public/images/preview2.png'
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

const Portfolio = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-20 pb-37.5'>
            <div className="container">
                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>My Work</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>Port<span className='text-[#D4AF37] italic'>folio</span></h3>
                    <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Selected projects from recent years</p>
                </div>

                <div className=" pt-15">
                  <Tabs>
                    <TabList>
                      <div className="flex gap-6 justify-center ">
                        <Tab>
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] px-10 py-2.5 rounded-lg `}>ALL</button> 
                        </Tab>
                        <Tab>
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] px-10 py-2.5 rounded-lg `}>REACT / NEXT.JS</button>
                        </Tab>
                        <Tab>
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] px-10 py-2.5 rounded-lg `}>HTML / CSS</button>
                        </Tab>
                        <Tab>
                          <button className={`text-[#C6C6C6] bg-[rgba(255,255,255,0.08)] text-[16px] ${cormorant.className} font-bold leading-[160%] px-10 py-2.5 rounded-lg `}>Tailwind / Bootstrap</button>
                        </Tab>
                      </div>
                    </TabList>


                    <TabPanel>
                      <div className="pt-15 ">
                        {/* Navigation, Pagination, */}
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={20}
                          slidesPerView={3}
                          navigation
                          pagination={{ clickable: true }}
                          speed={1500}
                          autoplay={{
                          delay: 3000,
                          }}
                          loop={true}
                        >

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview2} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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

                        <SwiperSlide>
                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                          <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                              <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                              </div>
                            </div>

                              <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                          </div>
                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                            <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                            <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                            <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                            <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

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
                        
                        
                      </Swiper>

                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="grid grid-cols-3 gap-5 pt-17.5">

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </TabPanel>


                    <TabPanel>
                      <div className="grid grid-cols-3 gap-5 pt-17.5">

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </TabPanel>

                    
                    <TabPanel>
                      <div className="grid grid-cols-3 gap-5 pt-17.5">

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-center ">
                            <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                            <div className="img overflow-hidden rounded-t-xl relative">
                                <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                                <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                      <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                      <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                    </div>
                                  </div>

                                  <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                              </div>

                            <div className="valus group bg-[#111118] px-3 rounded-b-xl">
                                  <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                                  <p className={`text-[#9A9A9A] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                                  <div className="teq pb-2.5">
                                  <ul className='flex gap-5'>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                                  <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#9A9A9A] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>

                                  </ul>
                                </div>
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                                  <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>
                            </div>
                          </div>

                      </div>
                    </TabPanel>


                  </Tabs>
                </div>

                
            </div>
        </section>
    </>
  )
}

export default Portfolio


{/* <div className="grid grid-cols-3 gap-5 pt-17.5">
                    <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                        <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>

                            <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                        </div>
                        <div className="valus group bg-[#111118] px-3">
                          <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                          <p className={`text-[#8888aa] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                          <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>
                              
                            </ul>
                          </div>
                          <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                            <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                            <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                          </div>
                        </div>
                    </div>

                    <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                        <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview2} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>

                            <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                        </div>
                        <div className="valus group bg-[#111118] px-3">
                          <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                          <p className={`text-[#8888aa] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                          <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>
                              
                            </ul>
                          </div>
                          <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                            <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                            <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                          </div>
                        </div>
                    </div>

                    <div className="group group-hover:shadow-lg group-hover:shadow-orange-300 border border-[#ffffff28] rounded-xl shadow-md">
                        <div className="img overflow-hidden rounded-t-xl relative">
                            <Image src={preview} alt='preview' className='w-106.25 h-87.5' style={{borderRadius: '12px 12px 0 0'}}></Image>

                            <div className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 opacity-0 group-hover:opacity-100 duration-500">
                                <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5 ">
                                  <a href="" className='text-[#000000] bg-[#d8b553] border border-[#c9a84c66] py-2 px-3 rounded-[10px] duration-500 flex items-center gap-2 whitespace-nowrap'><LuSquareArrowOutUpRight/> Live Demo</a>
                                  <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                                </div>
                              </div>

                            <div className="black absolute group-hover:bg-[rgba(0,0,0,0.5)] h-87.5 w-106.25 top-0 left-0 duration-300"></div>
                        </div>
                        <div className="valus group bg-[#111118] px-3">
                          <h3 className={`text-[#FFFFFF] text-[24px] ${playfair.className} font-bold pt-2`}>Exclusive — Full E-Commerce</h3>
                          <p className={`text-[#8888aa] text-[16px] ${cormorant.className} font-medium pb-3.5`}>A feature-complete shopping platform with flash sales, category browsing, cart management, and a polished checkout experience built with modern React architecture.</p>
                          <div className="teq pb-2.5">
                            <ul className='flex gap-5'>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>React</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Tailwind CSS</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>Redux</a></li>
                              <li><a href="#" style={{padding: '4px 8px'}} className={`text-[#8888aa] hover:text-[#c9a84c] bg-[#1a1a26] hover-[#c9a84c0f] text-[16px] ${playfair.className} font-semibold border border-[#ffffff28] hover:border-[#c9a84c66] duration-300 rounded-[10px]`}>REST API</a></li>
                            </ul>
                          </div>
                          <div className="flex gap-5 pt-2.5 border-t border-[#ffffff28] pb-2.5">
                            <a href="" className='text-[#c9a84c] border border-[#c9a84c66] py-2 px-3 rounded-[10px] bg-[#c9a84c22] duration-300 flex items-center gap-2'><LuSquareArrowOutUpRight/> Live Demo</a>
                            <a href="" className='text-[#e8e8f0] border border-[#ffffff3a] py-2 px-3 rounded-[10px] bg-transparent duration-300 hover:bg-[#212148dc] flex items-center gap-2'><FaGithub/> GitHub</a>
                          </div>
                        </div>
                    </div>
                </div> */}