"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

  return (
    <div className="w-[100%] sticky top-0 bg-white">
        <div className="w-[85%] mx-auto py-6 flex justify-between">
            <div className="">
                <span className="font-medium text-lg">
                    &lt; av&#47;&gt;            
                </span>
            </div>
            <div className="hidden lg:flex gap-x-5">
                <span className="text-gray-800 rounded font-semibold cursor-pointer text-xl hover:bg-gray-100 duration-300 px-3 py-1 hover:text-gray-600" onClick={()=>{
                    window.scroll({
                        top : 500,
                        behavior : "smooth"
                    })
                }}>About</span>
                <span className="text-gray-800 rounded font-semibold cursor-pointer text-xl hover:bg-gray-100 duration-300 px-3 py-1 hover:text-gray-600" onClick={()=>{
                    window.scroll({
                        top : 1000,
                        behavior : "smooth"
                    })
                }}>Project</span>
                <span className="text-gray-800 rounded font-semibold cursor-pointer text-xl hover:bg-gray-100 duration-300 px-3 py-1 hover:text-gray-600" onClick={()=>{
                    window.scroll({
                        top : 2500,
                        behavior : "smooth"
                    })
                }}>Contact</span>
            </div>
            <div className="lg:hidden" onClick={()=>setToggle(!toggle)}>
                <svg width="25px" height="25px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
        </div>
        <AnimatePresence>
            {toggle && <motion.div className="lg:hidden w-[100%] px-[7.5%] pb-5 absolute bg-white mx-auto py-4 z-10"
                initial = {{opacity:0, x:-50}}
                animate = {{opacity:1, x:0, transition:{duration:0.3}}}
                exit = {{x:-50, opacity:0}}
            >
                <div className="flex flex-col gap-y-3">
                    <span className="text-gray-800 rounded font-semibold cursor-pointer text-lg hover:bg-gray-100 duration-300 px-3 hover:text-gray-600" onClick={()=>{
                        setToggle(false);
                        window.scroll({
                            top : 500,
                            behavior : "smooth"
                        })
                    }}>About</span>
                    <span className="text-gray-800 rounded font-semibold cursor-pointer text-lg hover:bg-gray-100 duration-300 px-3 hover:text-gray-600" onClick={()=>{
                        setToggle(false);
                        window.scroll({
                            top : 1350,
                            behavior : "smooth"
                        })
                    }}>Projects</span>
                    <span className="text-gray-800 rounded font-semibold cursor-pointer text-lg hover:bg-gray-100 duration-300 px-3 hover:text-gray-600" onClick={()=>{
                        setToggle(false);
                        window.scroll({
                            top : 4000,
                            behavior : "smooth"
                        })
                    }}>Contact</span>
                </div>
            </motion.div> }
        </AnimatePresence>
    </div>
  );
}
