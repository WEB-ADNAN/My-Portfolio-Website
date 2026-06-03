"use client"

import { motion } from "framer-motion";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import { IoServerSharp } from "react-icons/io5";
import 'animate.css';

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
    <section className='bg-[#080b11] pt-20 pb-37.5'>
        <div className="container">
            <div className="headline flex flex-col justify-center items-center">
                <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>WHAT I DO</h4>
                <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>My <span className='text-[#D4AF37] italic'>Services</span></h3>
                <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Crafting beautiful and functional digital products</p>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-20">
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Modern & Responsive Website Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Crafting sleek, modern websites that look great on all devices. Focused on clean design, usability, and smooth user experience.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>High-Converting Landing Page Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Designing landing pages that capture attention and boost conversions. Built with strategy, clarity, and user-focused structure.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>High-Converting Landing Page Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Designing landing pages that capture attention and boost conversions. Built with strategy, clarity, and user-focused structure.</p>
                </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-10 items-stretch">

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Website Redesign & Frontend Improvement</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Revamping outdated websites with a modern, clean, and responsive layout. Improving structure, performance, and visual consistency using best frontend practices.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="1 h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>React & Next.js Web Development</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Building dynamic and scalable web applications with modern tools. Clean architecture, reusable components, and optimized performance.</p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="h-full hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Bug Fixing & Speed Optimization</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>Building dynamic and scalable web applications with modern tools. Clean architecture, reusable components, and optimized performance.</p>
                </div>
                </motion.div>
            </div>

        </div>
    </section>
  )
}

export default Service