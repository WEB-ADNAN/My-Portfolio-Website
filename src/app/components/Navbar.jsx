"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Image from 'next/image';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const playfair = Playfair_Display({
  weight:['700']
});
const inter = Inter({
  weight:['500']
});

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(()=>{
        const scrollHandle = ()=>{
            setIsSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', scrollHandle)
        return ()=> window.removeEventListener('scroll', scrollHandle)
        
    }, [])

    const [menu, setMenu] = useState(false)

  return (
    <>
        <section className={`bg-[#080b11] fixed z-99 border-b border-[rgba(212,175,55,0.5)] w-full duration-700 transition-all ease-in-out ${isSticky ? ' py-4 bg-[rgba(8,11,17,0.6)]' : 'py-5.5'}`}>
            <div className="container px-4 lg:px-3 xl:px-2 2xl:px-0">
                <div className="flex items-center justify-between">
                    <div className="1 ">
                        <Link href="/" className={`${playfair.className} sm:text-[30px] md:text-[28px] text-[30px] text-[#D4AF37] font-bold`} >ADNAN SAMI</Link>
                    </div>
                    <div className="md:hidden cursor-pointer">
                        <IoMenu onClick={()=> setMenu(true)} className='text-[36px] text-[#8A9BB8]'/>
                    </div>

                    <div className="menu hidden md:block">
                        <ul className='flex md:gap-6 lg:gap-12 xl:gap-15'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/service2">Services</Link></li>
                            <li><Link href="/about2">About me</Link></li>
                            <li><Link href="/portfolio2">Portfolio</Link></li>
                            <li><Link href="/contact2">Contact me</Link></li>
                        </ul>
                    </div>

                    <div className={`mobile-menu md:hidden flex flex-col gap-5  bg-[rgba(8,11,17,0.9)] h-full justify-center items-center fixed top-0 right-0 z-50 duration-500 transition-all ease-in-out overflow-hidden ${menu ? 'w-75 opacity-100' : 'w-0 opacity-0'}`}>

                        <div onClick={()=> setMenu(false)} className="absolute top-6 right-6 cursor-pointer">
                            <IoMdClose  className='text-[40px] text-[#8A9BB8] font-bold hover:text-red-500 duration-500'/>
                        </div>
                        
                        <Link className='text-[20px] font-inter text-[#8A9BB8] font-normal hover:text-[#D4AF37] duration-300 select-none' onClick={()=> setMenu(false)} href="/">Home</Link>
                        <Link className='text-[20px] font-inter text-[#8A9BB8] font-normal hover:text-[#D4AF37] duration-300 select-none' onClick={()=> setMenu(false)} href="/service2">Services</Link>
                        <Link className='text-[20px] font-inter text-[#8A9BB8] font-normal hover:text-[#D4AF37] duration-300 select-none' onClick={()=> setMenu(false)} href="/about2">About me</Link>
                        <Link className='text-[20px] font-inter text-[#8A9BB8] font-normal hover:text-[#D4AF37] duration-300 select-none' onClick={()=> setMenu(false)} href="/portfolio2">Portfolio</Link>
                        <Link className='text-[20px] font-inter text-[#8A9BB8] font-normal hover:text-[#D4AF37] duration-300 select-none' onClick={()=> setMenu(false)} href="/contact2">Contact me</Link>
                        
                    </div>

                    <div className="button hidden lg:block">
                        <Link href="/contact2" className='text-[#FFFFFF] whitespace-nowrap border border-[#9A9A9A] py-3 px-10 rounded-[10px] hover:bg-[#F0D080] duration-300 hover:text-[#000000]'>HIRE ME</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar