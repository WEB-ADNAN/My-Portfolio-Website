import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import sami from '../../../public/images/sami.jpg'
import Image from 'next/image';
import FadeLeft from './FadeLeft';
import FadeRight from './FadeRight';

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

const skills = [
  { name: "Figma / XD", percent: 95 },
  { name: "UI Design",  percent: 92 },
  { name: "Branding",   percent: 88 },
  { name: "Figma",   percent: 98 },
  { name: "Responsiv",   percent: 92 },
];

const About = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-20 pb-37.5'>
            <div className="container">
                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>Who I Am</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>About <span className='text-[#D4AF37] italic'>Me</span></h3>
                    <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>A passionate designer with an eye for detail</p>
                </div>

                <div className="flex pt-15 items-center">
                    <div className="w-[40%]">
                        <FadeLeft>
                        <div className="relative w-100 h-115 rounded-sm overflow-hidden shrink-0 border border-[rgba(212,175,55,0.15)] shadow-lg shadow-amber-400">

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-90 rounded-t-[60px] bg-[rgba(212,175,55,0.07)] border border-[rgba(212,175,55,0.15)]" />

                            <Image
                                src={sami}
                                alt="Your Name"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        </FadeLeft>
                    </div>
                    <div className="w-[60%]">
                        <FadeRight>
                        <div className="text">
                            <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>I am a UI/UX designer with over 5 years of experience crafting premium digital products. My approach combines strategic thinking with refined aesthetics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto?</p>
                            <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A] pt-5`}>Every pixel has purpose, every interaction tells a story. My work spans mobile apps, web platforms, and brand identities for clients across the globe. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, est?</p>
                        </div>

                        {skills.map((skill, i) => (
                            <div key={i} className="py-4 border-b border-[rgba(212,175,55,0.08)]">
                                
                                {/* Label row */}
                                <div className="flex justify-between items-center mb-3">
                                <span className="font-sans text-[11px] tracking-[2.5px] uppercase text-white/40">
                                    {skill.name}
                                </span>
                                <span className="font-sans text-[13px] text-[#D4AF37]">
                                    {skill.percent}%
                                </span>
                                </div>

                                {/* Track */}
                                <div className="relative h-px bg-white/8">
                                {/* Fill */}
                                <div
                                    className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#D4AF37] to-[#f0d080]"
                                    style={{ width: `${skill.percent}%` }}
                                />
                                {/* Dot at end */}
                                <div
                                    className="absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                                    style={{ left: `${skill.percent}%`, transform: 'translateX(-50%)' }}
                                />
                                </div>

                            </div>
                            ))}
                            </FadeRight>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About