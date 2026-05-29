import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'
import preview from '../../../public/images/preview.png'
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

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

                <div className="grid grid-cols-3 gap-4.25 pt-17.5">
                    <div className="1">
                        <Image src={preview} alt='logo' className='w-47.5 h-37.5 rounded-t-lg'/>
                        <div className="bg-[rgba(255,255,255,0.08)] rounded-b-lg">
                            <div className="1 flex justify-between px-4">
                                <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>Full E-Commerce Website</h4>
                                <p className='text-[16px] font-bold font-inter leading-[160%] text-[#959595]'>Categories</p>
                            </div>
                            <div className="flex gap-5 px-4 py-3">
                                
                                <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>React</h4>
                                <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>Tailwind</h4>
                                <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>Redux</h4>
                            </div>
                            <div className="flex gap-5 px-4 pb-3">
                                <h3 className='text-[20px] font-bold font-inter leading-[160%] text-[#FFFFFF] flex items-center gap-2'><LuSquareArrowOutUpRight className=''/> Live Demo</h3>
                                <h3 className='text-[20px] font-bold font-inter leading-[160%] text-[#FFFFFF] flex items-center gap-2'><FaGithub /> GitHub</h3>
                            </div>
                        </div>
                    </div>
                    <div className="1">
                        <Image src={p3} alt='logo' className='w-full'/>
                        <div className="1 flex justify-between bg-[rgba(255,255,255,0.08)] p-4">
                            <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>Name Project</h4>
                            <p className='text-[16px] font-bold font-inter leading-[160%] text-[#959595]'>Categories</p>
                        </div>
                    </div>
                    <div className="1">
                        <Image src={p2} alt='logo' className='w-full'/>
                        <div className="1 flex justify-between bg-[rgba(255,255,255,0.08)] p-4">
                            <h4 className='text-[16px] font-bold font-inter leading-[160%] text-[#C6C6C6]'>Name Project</h4>
                            <p className='text-[16px] font-bold font-inter leading-[160%] text-[#959595]'>Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio