import Link from 'next/link'
import React from 'react'
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Image from 'next/image';

const playfair = Playfair_Display({
  weight:['700']
});
const inter = Inter({
  weight:['500']
});

const Navbar = () => {
  return (
    <>
        <section className='bg-[#080b11] border-b border-[rgba(212,175,55,0.5)]'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="1 ">
                        <a href="" className={`${playfair.className} text-[30px] text-[#D4AF37] font-bold`} >ADNAN SAMI</a>
                    </div>
                    <div className="menu">
                        <ul className='flex gap-15 py-7.5'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/service2">Services</Link></li>
                            <li><Link href="">About me</Link></li>
                            <li><Link href="">Portfolio</Link></li>
                            <li><Link href="">Contact me</Link></li>
                        </ul>
                    </div>

                    {/* <div className="button py-7.5">
                        <a className={`${playfair.className} text-[16px] text-[#FFFFFF] font-bold py-3 px-10 border-2 border-[#2A3A5C] rounded-lg hover:bg-[#D4AF37] hover:border-[#D4AF37] duration-500`} href="">Hire Me</a>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar