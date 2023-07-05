import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-[85%] mx-auto flex flex-col items-center my-20 lg:my-24">
      <div className="">
        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          About Me
        </span>
      </div>
      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 my-7 lg:my-16 lg:justify-around">
        <div className="my-0 lg:w-[45%]">
          <span className="text-gray-800 font-normal md:text-lg lg:text-xl">
            I am Frontend Developer with expertise in React.js, JavaScript,
            Next.js, deployment, Tailwind CSS, Redux, Framer Motion, and more, I
            am always looking forward to help other people. Currently I am
            learning backend development and stuff and have a decent
            understanding about it.
          </span>
        </div>
        <div className="flex flex-col lg:w-[50%] lg:flex-row lg:justify-around">
          <div className="front-end">
            {/* <span className="text-gray-800 font-medium text-lg">Skills -</span> */}
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image width={30} height={30} src="/react.png" alt="react-js" />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">ReactJS</span>
            </div>
            <div className="flex gap-x-7 my-2">
              <div className="">
                <Image width={30} height={30} src="/next.png" alt="next-js" />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Next.js</span>
            </div>
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image
                  width={30}
                  height={30}
                  src="/tailwind.png"
                  alt="tailwind"
                />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Tailwind CSS</span>
            </div>
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image
                  width={30}
                  height={30}
                  src="/github.png"
                  alt="github"
                />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Github</span>
            </div>
          </div>
          <div className="backend-end">
            {/* <span className="text-gray-800 font-medium text-lg">Backend - </span> */}
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image width={30} height={30} src="/nodejs.png" alt="nodejs" />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Nodejs</span>
            </div>
            <div className="flex gap-x-7 my-2">
              <div className="">
                <Image width={30} height={30} src="/supabase.jpg" alt="supabase" />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Supabase</span>
            </div>
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image
                  width={30}
                  height={30}
                  src="/firebase.webp"
                  alt="firebase"
                />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">Firebase</span>
            </div>
            <div className="flex gap-x-7 mt-4 my-2">
              <div className="">
                <Image
                  width={30}
                  height={30}
                  src="/mongo.png"
                  alt="mongo"
                />
              </div>
              <span className="text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded duration-300">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
