import { getFeedbacks } from "@/services/strapi/feedback";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default async function Feedback() {
    const feedbacks = await getFeedbacks()

  return (
    <div className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
        <p className="text-xl font-medium text-left mb-2">Testimonials ~</p>
        <InfiniteMovingCards items={feedbacks} speed="slow" />
    </div>
  )
}
