"use client"

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useEffect, useState } from "react";
import { getFeedbacks } from "@/services/sanity/feedback";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState<Array<{
    quote: string;
    name: string;
    title: string;
  }>>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks();
      const mappedFeedbacks = data.map(item => ({
        quote: item.description,
        name: item.name,
        title: item.company || ""
      }));
      setFeedbacks(mappedFeedbacks);
    };
    fetchFeedbacks();
  }, []);

  if (feedbacks.length === 0) {
    return null;
  }

  return (
    <div className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
      <p className="text-xl font-medium text-left mb-2 text-[#1e3a5f]">Testimonials ~</p>
      <InfiniteMovingCards items={feedbacks} speed="slow" />
    </div>
  )
}
