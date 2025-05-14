"use client"

import { useCallback } from "react";

export default function Header() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  return (
    <div className="px-10 z-[101] top-3 py-4 rounded-lg text-white my-5 mx-4 flex justify-between items-center max-w-3xl w-[95%] bg-[#222831] bg-dot-transparent sticky ">
      av
      <div className="flex gap-x-6">
        <span className="cursor-pointer text-sm md:text-base" onClick={() => scrollToSection("about")}>About</span>
        <span className="cursor-pointer text-sm md:text-base" onClick={() => scrollToSection("work")}>Work</span>
        <span className="cursor-pointer text-sm md:text-base" onClick={() => scrollToSection("contact")}>Contact</span>
      </div>
    </div>
  )
}
