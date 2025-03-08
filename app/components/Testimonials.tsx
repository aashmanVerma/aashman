"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { getFeedbacks } from "@/services/strapi/feedback";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";

export function Testimonials() {
  const [data, setData] = useState<any[]>([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await getFeedbacks()

      if (response.length) {
        setData(response)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="px-4 flex flex-col gap-y-8 w-full max-w-3xl" id="feedback">
      <p className="text-xl font-medium text-left relative z-20">Testimonials ~</p>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-y-3 p-6">
                    <Label className="text-lg font-medium">{item.name} - {item.company}</Label>
                    <p>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          </CarouselContent>
      </Carousel>
    </div>
  );
}