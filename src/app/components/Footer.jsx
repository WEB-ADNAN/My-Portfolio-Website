import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const playfair = Playfair_Display({
  weight:['700']
});
const inter = Inter({
  weight:['500']
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const Footer = () => {
  return (
    <>
      <footer className='bg-[#080b11] pt-10 border-t border-[rgba(212,175,55,0.5)]'>
        <div className="container">
          <div className="">
            <div className="1 flex items-center justify-between pb-12.5">

              <div className="logo w-[25%]">
                <a href="" className={`${playfair.className} text-[30px] text-[#D4AF37] font-bold`} >ADNAN SAMI</a>
                <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Web designer & developer crafting modern digital experiences with precision and purpose.</p>
              </div>

              <div className="">
                  <div className="icon flex gap-5 text-[25px] justify-center">
                    <Link href="https://www.instagram.com/_adnan.sami/">
                    <FaInstagram className='text-[#D4AF37]'/>
                    </Link>

                    <Link href="https://web.facebook.com/md.adnan.sami.204706">
                    <FaFacebook className='text-[#D4AF37]'/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/adnan-sami-836161405/">
                    <FaLinkedin className='text-[#D4AF37]'/>
                    </Link>

                    <Link href="https://web.whatsapp.com/">
                    <FaSquareWhatsapp className='text-[#D4AF37]'/>
                    </Link>
                  </div>

              </div>
              
            </div>


            <div className="3 flex justify-center border-t border-[#2A3A5C] pb-6">
              <p className='text-[16px] font-bold font-inter text-[#8A9BB8] pt-4'>© 2025 Md Adnan Sami. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer