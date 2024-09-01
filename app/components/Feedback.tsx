import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const feedbacks = [
    {
        quote: "Very good job and fast execution! Will hire Aashman again!",
        name: "Denys Gonchar",
        title: "Adgenix Media",
    },
    {
        quote: "Great job!!",
        name: "Aaron Chea",
        title: "Explrar",
    },
    {
        quote: "Aashman demonstrates exceptional expertise as a Node.js developer. His proficiency, combined with a keen understanding of contemporary development practices, makes him a standout professional in his field. I wholeheartedly recommend him for any complex project or initiative.",
        name: "Goran Nikic",
        title: "Propbar",
    }
]

export default function Feedback() {
  return (
    <div className="max-w-3xl w-full z-10 px-4 flex flex-col gap-y-3 my-10">
        <p className="text-xl font-medium text-left mb-2">Testimonials ~</p>
        <InfiniteMovingCards items={feedbacks} speed="slow" />
    </div>
  )
}
