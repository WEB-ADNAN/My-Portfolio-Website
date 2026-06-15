"use client";
import React from "react";

export const items = [
  { name: "HTML5",       icon: "https://thesvg.org/icons/html5/default.svg" },
  { name: "CSS3",        icon: "https://thesvg.org/icons/css3/default.svg" },
  { name: "JavaScript",  icon: "https://thesvg.org/icons/javascript/default.svg" },
  { name: "Bootstrap",   icon: "https://thesvg.org/icons/bootstrap/default.svg" },
  { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tailwind-css/default.svg" },
  { name: "React.js",    icon: "https://thesvg.org/icons/react/default.svg" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodedotjs/default.svg" },
  { name: "Express.js",  icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/expressdotjs/default.svg" },
  { name: "MongoDB",     icon: "https://thesvg.org/icons/mongodb/default.svg" },
];

const MarqueeItem = () => (
  <div className="flex items-center gap-12 shrink-0 px-8">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <div className="flex items-center gap-3">
          <img
            src={item.icon}
            alt={item.name}
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="text-[#8B8B8B] tracking-[6px] text-sm font-semibold uppercase">
            {item.name}
          </span>
        </div>
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
      </React.Fragment>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0B0F19] py-3 border-y border-[rgba(212,175,55,0.15)]">
      <div className="flex whitespace-nowrap animate-marquee">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </section>
  );
};

export default Marquee;