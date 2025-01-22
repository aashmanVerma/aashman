import { AnimatedTestimonials } from "../ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Aashman demonstrates exceptional expertise as a Node.js developer. His proficiency, combined with a keen understanding of contemporary development practices, makes him a standout professional in his field. I wholeheartedly recommend him for any complex project or initiative.",
      name: "Goran Nikic",
      designation: "Co-Founder of Propbar / Vepler",
      src: "https://media.licdn.com/dms/image/v2/D4E0BAQFfj7BQKPOZ8g/company-logo_200_200/company-logo_200_200/0/1730288513515/propbar_logo?e=1745452800&v=beta&t=uLY0WPOZ4HP3jSdDGFQstgjRHCUONXUkD3AJae2pq4I",
    },
    {
      quote:
        "Very good job and fast execution! Will hire Aashman again!",
      name: "Denys Gonchar",
      designation: "Adgenix Media",
      src: "https://media.licdn.com/dms/image/v2/C4E0BAQFw9llzTkyzzw/company-logo_200_200/company-logo_200_200/0/1672708380643/adgenix_media_logo?e=1745452800&v=beta&t=oYDWQRGa0Q1IyCtikZGd_9lVzGpZFnwrECikbsncKdc",
    },
    {
      quote:
        "Great Job!!",
      name: "Aaron Chea",
      designation: "Explrar, Singapore",
      src: "https://media.licdn.com/dms/image/v2/D560BAQHcvFhXZaQu_g/company-logo_200_200/company-logo_200_200/0/1683962794110/explrar_logo?e=1745452800&v=beta&t=3vw9y0ELaVvApUuqwItFb5SGTFlC1wQPpKgUhksvVNQ",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}