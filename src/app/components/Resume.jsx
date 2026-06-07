import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import { GrLanguage } from "react-icons/gr";
import { FcGraduationCap } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";

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

const Resume = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-12 md:pt-20 pb-20 md:pb-37.5'>
            <div className="container px-4 md:px-0">
                <div className="headline flex flex-col justify-center items-center">
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>My <span className='text-[#D4AF37] italic'>Resume</span></h3>
                    <p className={`${cormorant.className} text-[20px] pr-2.5 md:pr-0 text-center font-medium leading-[160%] text-[#9A9A9A]`}>A quick overview of my experience, education & achievements.</p>
                </div>

                <div className="pt-12 flex flex-col gap-8">
                    <div className="">
                        <a className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3 flex items-center gap-2.5`}><FcWorkflow /> <span className='text-[#D4AF37] italic'>Experience</span></a>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12.5">
                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h3 className={`text-[#e8e8f0] text-[20px] md:text-[24px] ${playfair.className} font-bold`}>Frontend Development</h3>
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>June 2024 - Dec 2024</h4>
                                <p className={`${cormorant.className} text-[17px] md:text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Building sleek, responsive, and high-performance web interfaces using React, Next.js, Tailwind CSS, and Framer Motion for modern, smooth, and user-friendly web experiences.</p>
                            </div>

                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h3 className={`text-[#e8e8f0] text-[20px] md:text-[24px] ${playfair.className} font-bold`}>Backend Development</h3>
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>Jan 2025 - June 2025</h4>
                                <p className={`${cormorant.className} text-[17px] md:text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Building scalable and secure backend systems with Node.js, Express, and databases like MongoDB, including REST APIs and authentication for modern web applications.</p>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3 flex items-center gap-2.5`}><FcGraduationCap /> <span className='text-[#D4AF37] italic'>Education</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12.5">
                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h3 className={`text-[#e8e8f0] text-[20px] md:text-[24px] ${playfair.className} font-bold`}>Diploma In Computer Science & Tech.</h3>
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>2023 - 2026</h4>
                                <p className={`${cormorant.className} text-[17px] md:text-[20px] font-medium leading-[160%] text-[#9A9A9A] pr-3 md:pr-0`}>Completed Diploma in Computer Science & Technology (2023–2026), gaining strong foundations in programming, web development, databases, and software engineering principles.</p>
                            </div>

                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h3 className={`text-[#e8e8f0] text-[20px] md:text-[24px] ${playfair.className} font-bold`}>Secondary School Certificate</h3>
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>2022 - 2023</h4>
                                <p className={`${cormorant.className} text-[17px] md:text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Completed Secondary School Certificate (SSC) in 2022, with a Science background including Physics, Chemistry, Biology, and Mathematics, building a strong academic foundation.</p>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3 flex items-center gap-2.5`}><GrLanguage /> <span className='text-[#D4AF37] italic'>Language</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12.5">
                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>Nov 2025 - Feb 2026</h4>
                                <h3 className={`text-[#9A9A9A] text-[18px] md:text-[24px] ${playfair.className} font-bold`}>Spoken English at Hexa's Zindabazar.</h3>
                            </div>

                            <div className="p-5 border border-[#c9a84c33] rounded-lg bg-[#111118]">
                                <h4 className={`text-[rgba(232,200,74,0.8)] text-[16px] md:text-[18px] font-inter font-medium py-2.5`}>Aug 2025 - Oct 2025</h4>
                                <h3 className={`text-[#9A9A9A] text-[18px] md:text-[24px] ${playfair.className} font-bold`}>Business English at Creative It Institute.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume