import FadeLeft from './FadeLeft';
import FadeRight from './FadeRight';
import { Playfair_Display } from 'next/font/google';
import React from 'react'
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import Link from 'next/link';
import adnan from '../../../public/images/adnan.jpeg'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

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


const Banner = () => {
  return (
    <>
        <section className="relative bg-[#0a0d14] overflow-hidden pt-35 pb-30 md:pt-47.5 md:pb-37.5">

            <div className="absolute -top-20 -right-16 w-105 h-105 rounded-full pointer-events-none z-0
                bg-[radial-gradient(circle,rgba(212,175,55,0.13)_0%,transparent_70%)]
                animate-blob" />

            <div className="absolute -bottom-24 -left-20 w-90 h-90 rounded-full pointer-events-none z-0
                bg-[radial-gradient(circle,rgba(30,60,120,0.22)_0%,transparent_70%)]
                animate-blob-reverse" />



            <div className="container  lg:flex-row lg:flex lg:text-left items-center px-4 lg:px-0 gap-15 lg:gap-0">
                <div className="w-full text-center lg:text-left lg:w-[70%]">

                    <FadeLeft>
                    <div className="">
                        <h4 className={`${dmSans.className} text-[18px] md:text-[24px] font-semibold text-[#C9A227]`}>Hi I am</h4>
                        <h5 className={`${dmSans.className} text-[22px] md:text-[28px] font-bold text-[#9A9A9A] pt-1.5 md:pt-2.5 pb-3.5 md:pb-6`}>MD. ADNAN SAMI</h5>
                        <h3 className={`${cormorant.className} text-[38px] md:text-[70px] font-black text-[#FFFFFF] leading-[100%] tracking-[0.03em]`}>Full Stack<span className={`${cormorant.className} italic text-[#D4AF37]`}> Developer</span></h3>

                        <div className="icons flex justify-center lg:justify-start gap-2.5 items-center pt-4">
                            <div className="1 flex gap-1.25">
                                <IoIosStar className='text-[18px] text-[#D4AF37]'/>
                                <IoIosStar className='text-[18px] text-[#D4AF37]'/>
                                <IoIosStar className='text-[18px] text-[#D4AF37]'/>
                                <IoIosStar className='text-[18px] text-[#D4AF37]'/>
                                <IoIosStar className='text-[18px] text-[#D4AF37]'/>
                            </div>
                            <div className="1">
                                <h6 className='text-[#9A9A9A]'>5.0 <span>• Top Rated</span></h6>
                            </div>
                        </div>

                        <p className={`${dmSans.className} text-[20px] text-[#9A9A9A] pt-4 lg:pr-32.5 px-4 md:px-7 lg:px-0`}>I craft fast, scalable web applications with clean code and pixel-perfect precision delivering intuitive interfaces, powerful backends, and seamless experiences that make an impact. Available for job and freelance projects.</p>

                        <div className="pt-5">
                            <div className="icon flex justify-center lg:justify-start gap-4 text-[25px] items-center">
                                <Link href="https://github.com/WEB-ADNAN?tab=repositories" target="_blank">
                                <FaGithub className='text-[#D4AF37]'/>
                                </Link>

                                <Link href="https://www.linkedin.com/in/adnan-sami-836161405/" target="_blank">
                                <FaLinkedin className='text-[#D4AF37]'/>
                                </Link>

                                <Link href="https://www.instagram.com/_adnan.sami/" target="_blank">
                                <FaInstagram className='text-[#D4AF37]'/>
                                </Link>

                                <Link href="https://web.facebook.com/md.adnan.sami.204706" target="_blank">
                                <FaFacebook className='text-[#D4AF37]'/>
                                </Link>

                                <Link href="https://web.whatsapp.com/" target="_blank">
                                <FaSquareWhatsapp className='text-[#D4AF37]'/>
                                </Link>
                            </div>

                        </div>
                        

                        <div className="banner-button flex justify-center lg:justify-start gap-6 pt-10 lg:pt-10 pb-10 lg:pb-20">
                            <div className="B1">
                                <Link href="" className='text-[#FFFFFF] border border-[#9A9A9A] py-3 px-10 rounded-[10px] hover:bg-[#F0D080] duration-300 hover:text-[#000000]'>HIRE ME</Link>
                            </div>
                            <div className="B2">
                                <Link href="https://drive.google.com/drive/u/3/folders/1H5rfdU2C2ci7zSOj8csgnNrDAkGKNV1y" className='text-[#FFFFFF] border border-[#9A9A9A] py-3 px-10 rounded-[10px] hover:bg-[#F0D080] duration-300 hover:text-[#000000]'>DOWNLOAD CV</Link>
                            </div>
                        </div>

                        <div className="working flex justify-center lg:justify-start">
                            <div className="pr-4 md:pr-7.5 border-r border-[rgba(212,175,55,0.5)] flex flex-col items-center">
                                <h3 className={`${playfair.className} normal text-[30px] md:text-[60px] font-normal text-[#D4AF37] leading-[100%] tracking-[0.03em]`}>1.5yr</h3>
                                <h4 className={`${cormorant.className} md:text-[20px] text-[#9A9A9A] pt-4 uppercase`}>Experience</h4>
                            </div>

                            <div className="px-4 md:px-7.5 border-r border-[rgba(212,175,55,0.5)] flex flex-col items-center">
                                <h3 className={`${playfair.className} normal text-[30px] md:text-[60px] font-normal text-[#D4AF37] leading-[100%] tracking-[0.03em]`}>15+</h3>
                                <h4 className={`${cormorant.className} md:text-[20px] text-[#9A9A9A] pt-4 uppercase`}>Projects Done</h4>
                            </div>

                            <div className="pl-4 md:pl-7.5 flex flex-col items-center">
                                <h3 className={`${playfair.className} normal text-[30px] md:text-[60px] font-normal text-[#D4AF37] leading-[100%] tracking-[0.03em]`}>100%</h3>
                                <h4 className={`${cormorant.className} md:text-[20px] text-[#9A9A9A] pt-4 uppercase`}>Happy Clients</h4>
                            </div>
                        </div>

                    </div>
                    </FadeLeft>
                </div>

                
                <div className="lg:w-[30%] pt-15 lg:pt-0">
                 <FadeRight> 
                <div className="flex justify-center items-center relative">
                    {/* outer div */}
                    <div className="absolute w-85 h-85 md:w-100 md:h-100 rounded-full border border-[rgba(212,175,55,0.18)] animate-[spinSlow_12s_linear_infinite]">

                    <span className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -top-1 left-1/2 -translate-x-1/2
                    shadow-[0_0_8px_rgba(212,175,55,0.65)]" />

                    <span className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -bottom-1 left-1/2 -translate-x-1/2
                    shadow-[0_0_8px_rgba(212,175,55,0.65)]" />

                    <span className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -left-1 top-1/2 -translate-y-1/2
                    shadow-[0_0_8px_rgba(212,175,55,0.65)]" />
                    </div>
                    {/* inner div */}
                    <div className="relative w-70 h-68 md:w-82.5 md:h-82.5 overflow-hidden
                    bg-linear-to-br from-[#1a2340] to-[#0f1726]
                    border border-[rgba(212,175,55,0.14)]
                    rounded-[60%_40%_55%_45%/50%_55%_45%_50%] z-10">
                        

                    {/* overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(10,13,20,0.45)] z-10" />

                    <Image
                    src={adnan}
                    alt="adnan"
                    fill
                    className="object-cover object-top z-0"
                    />
                    </div>

                    {/* status badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20
                    bg-[#0a0d14] rounded-full px-4 py-1.5
                    border border-[rgba(212,175,55,0.28)]
                    flex items-center gap-2 whitespace-nowrap">

                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]
                        shadow-[0_0_7px_rgba(74,222,128,0.55)]" />

                        <span className="text-[10px] tracking-[1.5px] uppercase text-white/45">
                        Available for work
                        </span>
                    </div>

                </div>
                </FadeRight>  

                </div>
                
            </div>
            

        </section>
    </>
  )
}

export default Banner