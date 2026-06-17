import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import sami from '../../../../public/images/sami.jpg'
import Image from 'next/image';
import FadeLeft from '@/app/components/FadeLeft';
import FadeRight from '@/app/components/FadeRight';
import Fadeup from '@/app/components/Fadeup';

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
  { name: "Frontend Development", percent: 97 },
  { name: "Backend Development",  percent: 95 },
  { name: "Database Management",   percent: 95 },
  { name: "UI/UX & Figma",   percent: 98 },
  { name: "Responsive & Source Control",   percent: 96 },
];

const About = () => {
  return (
    <>
        <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-32 pb-20 md:pt-30 md:pb-37.5'>
            <div className="container px-4 md:px-0">
                <Fadeup>
                <div className="headline flex flex-col justify-center items-center">
                    <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>Who I Am</h4>
                    <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>About <span className='text-[#D4AF37] italic'>Me</span></h3>
                    <p className={`${cormorant.className} text-[20px] pr-2.5 md:pr-0 text-center font-medium leading-[160%] text-[#9A9A9A]`}>Building complete web experiences, from interface to infrastructure.</p>
                </div>
                </Fadeup>

                <div className="flex flex-col md:flex-row md:flex pt-8 md:pt-15 items-center">
                    <div className=" md:w-[40%]">
                        <FadeLeft>
                        <div className="relative w-85 md:w-100 h-100 md:h-115 rounded-sm overflow-hidden shrink-0 border border-[rgba(212,175,55,0.15)] shadow-lg shadow-amber-400">

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
                    <div className="md:w-[60%] pt-5 md:pt-0">
                        <FadeRight>
                        <div className="text pb-5 md:pb-0">
                            <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A] pr-5 md:pr-0`}>I'm a passionate MERN Stack Developer who loves turning ideas into real, functional web applications. Though early in my professional journey, I've spent over a year building projects, sharpening my skills, and learning what it truly takes to craft seamless digital experiences.</p>
                            <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A] pt-5 pr-3 md:pr-0`}>My work spans the full stack crafting responsive, pixel-perfect interfaces with React and Next.js on the frontend, and architecting reliable, scalable backends with Node.js, Express, and MongoDB. Every project I build reflects a commitment to clean code, thoughtful structure, and real-world performance.</p>
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
                                    className="absolute top-0 left-0 h-px bg-linear-to-r from-[#D4AF37] to-[#f0d080]"
                                    style={{ width: `${skill.percent}%` }}
                                />
                                {/* Dot at end */}
                                <div
                                    className="absolute -top-0.75 w-1.75 h-1.75 rounded-full bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.6)]"
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