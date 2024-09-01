import { forwardRef } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const skills = [
    {
        id: 1,
        name: "Github",
        image: "/github.svg",
        designation: "Version Control"
    },
    {
        id: 2,
        name: "Next.js",
        image: "/nextjs.svg",
        designation: "Frontend Framework"
    },
    {
        id: 3,
        name: "Tailwind CSS",
        image: "/tailwind.svg",
        designation: "CSS Framework"
    },
    {
        id: 4,
        name: "Nuxt",
        image: "/nuxt.svg",
        designation: "Frontend Framework"
    },
    {
        id: 5,
        name: "Framer Motion",
        image: "/framer.svg",
        designation: "Animation Library"
    },
    {
        id: 6,
        name: "Express JS",
        image: "/express.svg",
        designation: "Backend Framework"
    },
    {
        id: 7,
        name: "MongoDB",
        image: "/mongodb.png",
        designation: "No SQL Database"
    },
    {
        id: 8,
        name: "PostgreSQL",
        image: "/postgres.png",
        designation: "SQL Database"
    },
    {
        id: 9,
        name: "Strapi",
        image: "/strapi.png",
        designation: "Headless CMS"
    },
    {
        id: 10,
        name: "Supabase",
        image: "/supabase.svg",
        designation: "Firebase Alternative"
    },
    {
        id: 11,
        name: "Hapi JS",
        image: "/hapi.svg",
        designation: "Backend Framework"
    },
    {
        id: 12,
        name: "S3 Bucket",
        image: "/bucket.png",
        designation: "AWS Storage"
    }
]

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="px-4 z-10 max-w-3xl w-full" ref={ref}>
        <p className="text-xl font-medium">About Me ~</p>
        <div className="flex justify-between items-center my-5 flex-wrap flex-col md:flex-row gap-y-3">
            <p className="md:w-[46%]">I am a full stack developer skilled in building robust and scalable applications using technologies like Express JS, Hapi JS, and Node.js for backend development, and Next.js, Nuxt, and Tailwind CSS for frontend development. I manage data with MongoDB and PostgreSQL and utilize AWS S3 Buckets for storage. With expertise in version control through GitHub, I streamline operations with tools like Supabase and Strapi. My goal is to deliver high-quality, user-centric solutions, blending functionality with engaging design.</p>
            <div className="md:w-[48%] my-5 flex flex-col gap-y-2">
                <div className="flex gap-x-6 justify-center flex-wrap gap-y-6">
                    <AnimatedTooltip items={skills} />
                </div>
            </div>
        </div>
    </div>
  )
})

About.displayName = 'About';

export default About;
