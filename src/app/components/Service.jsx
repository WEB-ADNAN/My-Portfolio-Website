"use client"

import { motion } from "framer-motion";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import 'animate.css';
import { TbStack2 } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbRefreshAlert } from "react-icons/tb";
import { TbLayout2 } from "react-icons/tb";
import { TbDatabaseCog } from "react-icons/tb";
import { TbZoomCode } from "react-icons/tb";
import Fadeup from "./FadeLeft";

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



const Service = () => {
  return (
    <section className='bg-[#080b11] pt-20 pb-20 md:pb-37.5'>
        <div className="container px-4 lg:px-0">
            <Fadeup>
            <div className="headline flex flex-col justify-center items-center">
                <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>WHAT I DO</h4>
                <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>My <span className='text-[#D4AF37] italic'>Services</span></h3>
                <p className={`${cormorant.className} text-[20px] pr-2.5 md:pr-0 text-center font-medium leading-[160%] text-[#9A9A9A]`}>Crafting beautiful and functional digital products</p>
            </div>
            </Fadeup>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-20">
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbStack2 className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Full-Stack Web Development</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] pr-3.75`}>End-to-end web applications built with React, Next.js, Node.js, and MongoDB. From database design to user interface fully functional, scalable, and production-ready.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbDeviceDesktopCode className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive UI Development</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] `}>Pixel-perfect, mobile-first interfaces built with React and Tailwind CSS. Every component is crafted for consistency, speed, and seamless experience across all devices.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbRefreshAlert className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Website Redesign And Optimization</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] pr-2.5`}>Transforming outdated websites into modern, high-performing platforms. Improved structure, faster load times, and a cleaner codebase without losing what already works.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbLayout2 className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Landing Page And Conversion Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] `}>High-impact landing pages built to capture attention and drive action. Crafted with clean layout, persuasive structure, and responsive design that works on every screen.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="1 h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbDatabaseCog className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Database Architecture And Management</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] `}>Scalable MongoDB database structures designed for real-world applications. Efficient schemas, optimized queries, and clean data management from the ground up.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <TbZoomCode className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Bug Fixing And Performance Tuning</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A] `}>Diagnosing and resolving frontend and backend issues with precision. From slow load times to broken APIs I find the root cause and fix it clean.</p>
                </div>
                </motion.div>

            </div>

            

        </div>
    </section>
  )
}

export default Service