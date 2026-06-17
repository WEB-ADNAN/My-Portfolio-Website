"use client"
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Fadeup from './FadeLeft';
import FadeLeft from './FadeLeft';
import { motion } from "framer-motion";

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

const FAQ = () => {

  const [show, setShow] = useState(null)

  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-12 md:pt-20 pb-15 md:pb-37.5'>
            <div className="container px-4 lg:px-3 xl:px-2 2xl:px-0">
              <FadeLeft>
                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>FAQ</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>Got <span className='text-[#D4AF37] italic'>questions?</span></h3>
                    <p className={`${cormorant.className} text-[20px] pr-2.5 md:pr-0 text-center font-medium leading-[160%] text-[#9A9A9A]`}>Here are the things people ask me the most. Don't see yours? Feel free to reach out directly.</p>
                </div>
                </FadeLeft>
                

                <div className="faq-section flex flex-col justify-center items-center gap-2 pt-15">
                  <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  >
                    <div className=" lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-4 md:px-7.5 bg-[#0f0f17] rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(show === 1 ? null : 1)}>
                            <div className='flex gap-2 md:gap-5'>
                                <h6 className="1 text-[#b8962e] text-[14px] md:text-[20px] font-bold">01</h6>
                                <p className="2 text-[rgba(255,255,255,0.9)] text-[14px] md:text-[20px] select-none font-bold">What kind of projects do you work on?</p>
                            </div>
                          <div ><IoIosArrowDown className={`text-[#b8962e] text-[20px] md:text-[30px] transition-transform duration-300 ${show === 1 ? 'rotate-180' : '' }`}/></div>
                        </div>
                        <div className={`pl-4.75 md:pl-10 md:pr-20 transition-all duration-300 ${show === 1 ? 'max-h-20 md:max-h-19 pt-2.5' : 'max-h-1 md:max-h-1.5 overflow-hidden'}`}>
                          <p className={`${cormorant.className} font-medium select-none text-[#9A9A9A] text-[14px] md:text-[19px]`}>I specialize in full-stack web applications from responsive frontends with React and Next.js to scalable backends with Node.js, Express, and MongoDB. I work on portfolios, business websites, dashboards, and custom web solutions.</p>
                        </div>
                    </div>
                    </motion.div>

                  <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <div className="lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-4 md:px-7.5 bg-[#0f0f17] rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(show === 2 ? null : 2)}>
                            <div className='flex gap-2 md:gap-5'>
                                <h6 className="1 text-[#b8962e] text-[14px] md:text-[20px] font-bold">02</h6>
                                <p className="2 text-[rgba(255,255,255,0.9)] text-[14px] md:text-[20px] select-none font-bold">Are you open to freelance or remote work?</p>
                            </div>
                          <div ><IoIosArrowDown className={`text-[#b8962e] text-[20px] md:text-[30px] transition-transform duration-300 ${show === 2 ? 'rotate-180' : '' }`}/></div>
                        </div>
                        <div className={`pl-4.75 md:pl-10 md:pr-20 transition-all duration-300 ${show === 2 ? 'max-h-20 md:max-h-19 pt-2.5' : 'max-h-1 md:max-h-1.5 overflow-hidden'}`}>
                          <p className={`${cormorant.className} font-medium select-none text-[#9A9A9A] text-[14px] md:text-[19px]`}>Absolutely. I'm available for freelance projects, remote positions, and on-site opportunities. Whether you need a one-time delivery or a long-term collaboration — I'm ready to bring value from day one.</p>
                        </div>
                    </div>
                    </motion.div>

                  <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <div className="lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-4 md:px-7.5 bg-[#0f0f17] rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(show === 3 ? null : 3)}>
                            <div className='flex gap-2 md:gap-5'>
                                <h6 className="1 text-[#b8962e] text-[14px] md:text-[20px] font-bold">03</h6>
                                <p className="2 text-[rgba(255,255,255,0.9)] text-[14px] md:text-[20px] select-none font-bold">Do you work solo or with a team?</p>
                            </div>
                          <div ><IoIosArrowDown className={`text-[#b8962e] text-[20px] md:text-[30px] transition-transform duration-300 ${show === 3 ? 'rotate-180' : '' }`}/></div>
                        </div>
                        <div className={`pl-4.75 md:pl-10 md:pr-20 transition-all duration-300 ${show === 3 ? 'max-h-20 md:max-h-19 pt-2.5' : 'max-h-1 md:max-h-1.5 overflow-hidden'}`}>
                          <p className={`${cormorant.className} font-medium select-none text-[#9A9A9A] text-[14px] md:text-[19px]`}>I primarily work solo — giving you direct communication, fast decisions, and full accountability. But when a project demands more, I have a trusted backup team ready to scale up without compromising quality or deadlines.</p>
                        </div>
                    </div>
                    </motion.div>

                  <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <div className="lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-4 md:px-7.5 bg-[#0f0f17] rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(show === 4 ? null : 4)}>
                            <div className='flex gap-2 md:gap-5'>
                                <h6 className="1 text-[#b8962e] text-[14px] md:text-[20px] font-bold">04</h6>
                                <p className="2 text-[rgba(255,255,255,0.9)] text-[14px] md:text-[20px] select-none font-bold">How long does it take to complete a project?</p>
                            </div>
                          <div ><IoIosArrowDown className={`text-[#b8962e] text-[20px] md:text-[30px] transition-transform duration-300 ${show === 4 ? 'rotate-180' : '' }`}/></div>
                        </div>
                        <div className={`pl-4.75 md:pl-10 md:pr-20 transition-all duration-300 ${show === 4 ? 'max-h-20 md:max-h-19 pt-2.5' : 'max-h-1 md:max-h-1.5 overflow-hidden'}`}>
                          <p className={`${cormorant.className} font-medium select-none text-[#9A9A9A] text-[14px] md:text-[19px]`}>A clean landing page? 3–5 days. A full-stack web application with authentication, database, and API? 2–4 weeks. Every project starts with a clear timeline discussion — no surprises, just results.</p>
                        </div>
                    </div>
                    </motion.div>

                  <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <div className="lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-4 md:px-7.5 bg-[#0f0f17] rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(show === 5 ? null : 5)}>
                            <div className='flex gap-2 md:gap-5'>
                                <h6 className="1 text-[#b8962e] text-[14px] md:text-[20px] font-bold">05</h6>
                                <p className="2 text-[rgba(255,255,255,0.9)] text-[14px] md:text-[20px] select-none font-bold">How can I hire you or get in touch?</p>
                            </div>
                          <div ><IoIosArrowDown className={`text-[#b8962e] text-[20px] md:text-[30px] transition-transform duration-300 ${show === 5 ? 'rotate-180' : '' }`}/></div>
                        </div>
                        <div className={`pl-4.75 md:pl-10 md:pr-20 transition-all duration-300 ${show === 5 ? 'max-h-20 md:max-h-19 pt-2.5' : 'max-h-1 md:max-h-1.5 overflow-hidden'}`}>
                          <p className={`${cormorant.className} font-medium select-none text-[#9A9A9A] text-[14px] md:text-[19px]`}>Simple — drop a message through the contact form below or reach out via email. I respond within 24 hours and I'm always open to discussing new opportunities, big or small.</p>
                        </div>
                    </div>
                    </motion.div>

                    <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <div className="w-80 md:w-170 lg:w-250 border border-[rgba(184,150,46,0.4)] py-5 px-7.5 bg-[#0f0f17] rounded-md mt-5 flex flex-col md:flex md:flex-row md:justify-between md:items-center">
                        <div className="">
                          <h2 className='md:text-[22px] text-[18px] text-[rgba(255,255,255,0.9)] font-bold font-inter'>Still have questions?</h2>
                          <p className={`${cormorant.className} text-[16px] md:text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>I'm just a message away. Let's talk.</p>
                        </div>

                        <div className="mt-5 md:mt-0">
                          <a className='text-[#000000] bg-[#D4AF37] py-2 md:py-3 px-8 md:px-10 rounded-[10px] hover:bg-[#f0cd5a] duration-300 hover:text-[#000000]' href="">CONTACT ME</a>
                        </div>
                       
                    </div>
                    </motion.div>


                </div>
            </div>
        </section>
    </>
  )
}

export default FAQ