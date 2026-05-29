import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google';
import React from 'react'
import { IoServerSharp } from "react-icons/io5";

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

const service2 = () => {
  return (
    <section className='bg-[#080b11] border-t border-[rgba(212,175,55,0.5)] pt-20 pb-37.5'>
        <div className="container">
            <div className="headline flex flex-col justify-center items-center">
                <h4 className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#D4AF37]`}>WHAT I DO</h4>
                <h3 className={`${cormorant.className} text-[40px] font-bold leading-[100%] text-[#9A9A9A] pb-4.5 pt-3`}>My <span className='text-[#D4AF37] italic'>Services</span></h3>
                <p className={`${cormorant.className} text-[20px] font-medium leading-[160%] text-[#9A9A9A]`}>Crafting beautiful and functional digital products</p>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-20">

                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-10">

                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
                <div className="1 hover:bg-[#0f1420] duration-200 py-8.5 px-7.5 border border-[rgba(212,175,55,0.5)] rounded-[14px] shadow-md shadow-amber-400">
                    <IoServerSharp className='text-[rgba(212,175,55,0.5)] text-[50px] border border-[rgba(212,175,55,0.5)] p-2.5 rounded-lg pb-1.5'/>
                    <h4 className={`${playfair.className} text-[24px] font-bold leading-[160%] text-[#FFFFFF] pt-2.5 pb-6`}>Responsive Design</h4>
                    <p className={`${cormorant.className} text-[20px] font-bold leading-[100%] text-[#9A9A9A]`}>I build fully responsive websites that adapt seamlessly across all devices, ensuring a smooth and consistent user experience on mobile, tablet, and desktop screens.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default service2