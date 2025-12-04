"use client"

import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { getProjects } from '@/services/sanity/projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);
  
  return (
    <div className="px-4 flex flex-col gap-y-8 w-full max-w-3xl my-10 relative z-20" id="project">
      <div className='flex flex-col gap-y-2'>
        <div className='flex gap-x-2'>
          <p className="text-xl font-medium text-left relative z-20 text-[#1e3a5f]">Projects ~</p>
        </div>
        <p className="text-sm text-[#2c4a6b]">Projects from which I started my journey</p>
        {projects.length === 0 && (
          <Badge variant="destructive" className='w-40'>Under Construction</Badge>
        )}
      </div>

      <div className='flex flex-col gap-y-4'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Card key={index} className='w-full bg-[#1e3a5f]/10 backdrop-blur-sm hover:border-[#1e3a5f]/30 shadow-sm'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <strong className='text-[#1e3a5f]'>{project.title}</strong>
                  {project.link && (
                    <a href={project.link} target='_blank' rel="noreferrer" className="text-[#1e3a5f] hover:text-[#2c4a6b] transition-colors">
                      <ExternalLink className='w-4' />
                    </a>
                  )}
                </div>
                {Array.isArray(project.description) ? (
                  <ul className='list-disc list-inside space-y-1 text-sm text-[#2c4a6b]'>
                    {project.description.map((point: string, idx: number) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#2c4a6b]">{project.description}</p>
                )}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech: string, i: number) => (
                    <Badge key={i} className="bg-[#1e3a5f]/15 backdrop-blur-sm text-[#1e3a5f] hover:bg-[#1e3a5f]/20 hover:border-[#1e3a5f]/40 transition-colors shadow-sm">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              {project.photos && project.photos.length > 0 && (
                <CardContent>
                  <Carousel
                    className="w-full"
                    opts={{
                      loop: true,
                    }}
                    plugins={[plugin.current]}
                  >
                    <CarouselContent>
                      {project.photos.map((photo: string, photoIndex: number) => (
                        <CarouselItem key={photoIndex}>
                          <div className="relative w-full h-64 rounded-lg overflow-hidden">
                            <Image
                              src={photo}
                              alt={`${project.title} - Image ${photoIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </CardContent>
              )}
            </Card>
          ))
        ) : (
          <p className="text-sm text-[#2c4a6b]">No projects available yet.</p>
        )}
      </div>
    </div>
  );
}
