import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

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

const Contact = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-20 pb-37.5'>
            <div className="container">

                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>Get In Touch</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>Contact  <span className='text-[#D4AF37] italic'>Me</span></h3>
                    <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Let's create something exceptional together</p>
                </div>

                <div className="flex pt-20 justify-around">

                    <div className="w-[60%]">
                        <div className="flex items-center gap-5 w-100 border-b border-[rgba(212,175,55,0.2)] mb-6">
                            <div className="dot w-2.5 h-2.5 bg-[#D4AF37] rounded-full"></div>
                            <div className="text">
                                <p className={`${cormorant.className} text-[24px] font-medium leading-[160%] text-[#9A9A9A] pb-3`}>web.adnansami@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 w-100 border-b border-[rgba(212,175,55,0.2)] mb-6">
                            <div className="dot w-2.5 h-2.5 bg-[#D4AF37] rounded-full"></div>
                            <div className="text">
                                <p className={`font-inter text-[20px] font-normal leading-[160%] text-[#9a9a9ad2] pb-3`}>+880 1950 281949</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 w-100 border-b border-[rgba(212,175,55,0.2)]">
                            <div className="dot w-2.5 h-2.5 bg-[#D4AF37] rounded-full"></div>
                            <div className="text">
                                <p className={`${cormorant.className} text-[24px] font-medium leading-[160%] text-[#9A9A9A] pb-3`}>Bangladesh</p>
                            </div>
                        </div>

                        <h4 className={`${cormorant.className} text-[24px] font-medium leading-[160%] text-[rgba(212,175,55,0.5)] pt-7`}>Follow me</h4>

                        <div className="icon flex gap-6 text-[40px] pt-5">
                            <Link href="https://www.linkedin.com/in/adnan-sami-836161405/" target="_blank">
                            <FaLinkedin className='text-[rgba(212,175,55,0.5)] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg'/></Link>

                            <Link href="https://www.instagram.com/_adnan.sami/" target="_blank">
                            <FaInstagram className='text-[rgba(212,175,55,0.5)] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg'/>
                            </Link>

                            <Link href="https://web.facebook.com/md.adnan.sami.204706" target='_blank'>
                            <FaFacebook className='text-[rgba(212,175,55,0.5)] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg'/>
                            </Link>

                            <Link href="https://web.whatsapp.com/" target='_blank'>
                            <FaSquareWhatsapp className='text-[rgba(212,175,55,0.5)] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg'/>
                            </Link>
                            
                        </div>
                    </div>

                    <div className="w-[40%]">
                        <div className="form flex flex-col gap-7.5">
                            <div className="1">
                                <input type="text" placeholder='Your name' className='w-122.75 bg-[#3A3A3A] text-[#9CA3AF] outline-0 py-3 pl-6 text-[24px] rounded-lg border border-[#5A5A5A]'/>
                            </div>
                            <div className="1">
                                <input type="text" placeholder='Your email' className='w-122.75 bg-[#3A3A3A] text-[#9CA3AF] outline-0 py-3 pl-6 text-[24px] rounded-lg border border-[#5A5A5A]'/>
                            </div>
                            <div className="1">
                                <input type="text" placeholder='Your message...' className='w-122.75 bg-[#3A3A3A] text-[#9CA3AF] outline-0 pt-3 pb-25 pl-6 text-[24px] rounded-lg border border-[#5A5A5A]'/>
                            </div>
                            <div className="button">
                                <Link href="" className='border border-[#5A5A5A] text-[#FFFFFF] py-3 text-[20px] font-bold font-inter rounded-lg px-41.5 hover:bg-[#3A3A3A] duration-200'>SEND MESSAGE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact