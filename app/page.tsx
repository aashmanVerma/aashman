import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { getProfile } from "@/services/sanity/profile";

export default async function Home() {
  const links = await getProfile()

  return (
    <div className="h-full w-full bg-[#FAF3E1] text-gray-900 relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div id="home" className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#FAF3E1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Header />
      
      {/* Hero section */}
      <Hero profile={links} />

      {/* About section */}
      <About skills={links.skills} />

      {/* Timeline section */}
      <Timeline />

      {/* Testimonials section */}
      <Testimonials />

      {/* Projects section */}
      <Projects />

      {/* Contacts section */}
      <Contact email={links.email} calLink={links.calLink} />

    </div>
  );
}
