import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import { getLinks } from "@/services/strapi/profile";
import Hero from "./components/Hero";

export default async function Home() {
  const links = await getLinks()

  return (
    <div className="dark:text-black h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center" style={{
      color: 'black'
    }}>
      {/* Radial gradient for the container to give a faded look */}
      <div id="home" className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Header />
      
      {/* Hero section */}
      <Hero links={links} />

      {/* About section */}
      <About skills={links.skills} />

      {/* Timeline section */}
      <Timeline />

      {/* Testimonials section */}
      <Testimonials />

      {/* Acheivements section */}

      {/* Contacts section */}
      <Contact />

    </div>
  );
}
