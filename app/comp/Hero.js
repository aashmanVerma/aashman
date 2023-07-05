import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="w-[85%] mx-auto my-10 lg:my-16 lg:flex lg:justify-around lg:flex-wrap lg:items-center">
        <div className="mx-auto w-[200px] rounded-full lg:hidden">
            <Image
                height={300}
                width={300}
                src="/img.jpeg"
                alt="profile pic"
                className="rounded-full"
            />
        </div>
        <div className="my-7 lg:my-0">
            <span className="text-base font-semibold text-gray-800 md:text-lg lg:text-2xl">Hi! I'm Aashman</span>
            <span className="text-2xl block font-bold text-gray-600 md:text-3xl lg:text-5xl">Frontend Developer</span>
            <div className="social-btn my-3 lg:my-6 flex gap-x-4">
                <Button>
                    <a href="https://drive.google.com/file/d/1GShFXzKKSmtwI4KaGXh3VO7wh7B3Qk3d/view?usp=drive_link" target="_blank">Resume</a>
                </Button>
                <Button>Cover letter</Button>
            </div>
            <div className="socials flex gap-x-4 my-2">
                <div>
                    <a href="https://twitter.com/verma_aashman" target="_blank">
                    <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/elite16op" target="_blank">
                    <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/aashman-verma-862856263" target="_blank">
                    <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
                <div>
                    <a href="https://aashman.hashnode.dev/" target="_blank">
                    <Image
                        alt="hashnode"
                        src="/hashnode.png"
                        height={25}
                        width={25}
                    />
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden lg:inline">
            <Image
                height={300}
                width={300}
                src="/img.jpeg"
                alt="profile pic"
                className="rounded-full"
            />
        </div>

    </div>
  )
}
