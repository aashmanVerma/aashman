"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useRef } from "react";
import { getFeedbacks } from "@/services/sanity/feedback";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [data, setData] = useState<any[]>([]);
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFeedbacks();
      if (response.length) {
        setData(response);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="px-4 flex flex-col gap-y-8 w-full max-w-3xl my-10" id="feedback">
      <div className="flex flex-col gap-y-2">
        <p className="text-xl font-medium text-left relative z-20 text-[#1e3a5f]">Testimonials ~</p>
        <p className="text-sm text-[#2c4a6b]">What people say about working with me</p>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto w-full"
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data?.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
              <div className="h-full">
                <div className="bg-[#1e3a5f]/10 backdrop-blur-sm border hover:border-[#1e3a5f]/30 transition-all duration-300 rounded-lg p-6 h-full flex flex-col group shadow-sm">
                  <div className="flex-1 flex flex-col">
                    <Quote className="w-6 h-6 text-[#1e3a5f]/60 mb-4 flex-shrink-0" />
                    <p className="text-[#2c4a6b] leading-relaxed text-sm mb-6 flex-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex flex-col gap-0.5 flex-1">
                      <p className="text-[#1e3a5f] font-medium text-sm">
                        {item.name}
                      </p>
                      {item.company && (
                        <p className="text-[#2c4a6b] text-xs">
                          {item.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}