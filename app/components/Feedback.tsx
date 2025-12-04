import { config } from "../config";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Feedback() {
    const feedbacks = config.feedback.map(item => ({
      quote: item.description,
      name: item.name,
      title: item.company || ""
    }))

  return (
    <div className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
        <p className="text-xl font-medium text-left mb-2">Testimonials ~</p>
        <InfiniteMovingCards items={feedbacks} speed="slow" />
    </div>
  )
}
