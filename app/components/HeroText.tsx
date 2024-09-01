"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

interface IHeroText {
  text: string
  main: string
}

export function HeroText(props: IHeroText) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl max-w-3xl text-left px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mx-auto "
      >
        { props.text }
        <br />
        <Highlight className="text-black dark:text-white px-3">
          { props.main }
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
