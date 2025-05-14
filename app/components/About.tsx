import { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  skills: string[];
}

const About = forwardRef<HTMLDivElement, AboutProps>(({skills}, ref) => {
  return (
    <div className="max-w-3xl px-4 z-10 w-full" id="about">
        <p className="text-xl font-medium">About Me ~</p>
        <div className="flex justify-between items-center my-5 flex-wrap flex-col gap-y-3">
            <p>I am a full stack developer skilled in building robust and scalable applications using technologies like Express JS, Hapi JS, and Node.js for backend development, and Next.js, Nuxt, and Tailwind CSS for frontend development. I manage data with MongoDB and PostgreSQL and utilize AWS S3 Buckets for storage. With expertise in version control through GitHub, I streamline operations with tools like Supabase and Strapi. My goal is to deliver high-quality, user-centric solutions, blending functionality with engaging design.</p>
            <div className="my-5 flex flex-col gap-y-2">
                <div className="flex gap-4 justify-center flex-wrap">
                    {
                        skills && skills.map((name: string, index: number) => (
                            <Badge key={index} className="bg-[#222831] text-white px-3 py-2 rounded-lg flex items-center gap-x-2">
                                <span>{name}</span>
                            </Badge>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
})

About.displayName = 'About';

export default About;
