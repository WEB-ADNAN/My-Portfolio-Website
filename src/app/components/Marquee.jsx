"use client";
import React from 'react'

const items = [
  "BRAND IDENTITY",
  "MARKET ANALYSIS",
  "DIGITAL GROWTH",
  "WEB DESIGN",
  "UI/UX STRATEGY",
];

const Marquee = () => {
  return (
    <>
      <section className="w-full overflow-hidden bg-[#0B0F19] py-8 border-y border-[rgba(212,175,55,0.15)]">

          {/* Track */}
          <div className="flex whitespace-nowrap animate-marquee">

          {/* First Set */}
            <div className="flex items-center gap-16 px-8 shrink-0">
            {items.map((item, i) => (
            <div key={i} className="flex items-center gap-16">

            <h2 className="text-[#8B8B8B] tracking-[6px] text-sm font-semibold">
            {item}
            </h2>

            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </div>
            ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-16 px-8 shrink-0">
              {items.map((item, i) => (
              <div key={i} className="flex items-center gap-16">

              <h2 className="text-[#8B8B8B] tracking-[6px] text-sm font-semibold">
              {item}
              </h2>

              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>
              ))}
            </div>
          </div>
      </section>
      </>
      )
      }

export default Marquee