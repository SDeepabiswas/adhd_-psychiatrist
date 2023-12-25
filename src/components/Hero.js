import React from "react";
import Typed from 'react-typed'
const Hero=() => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2" >GROW WITH US</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-300">We're here to help</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl py-4 font-semibold text-green-500 ">The children of</p>
                    <Typed
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                    strings={['Hope','Progress','India']} 
                    typeSpeed={160} 
                    backSpeed={180} 
                    loop/>
                </div>
                <p className="my-4 font-serif text-lg">Elevate your practice: connect with new clients and effortlessly confirm appointments here, maximizing your focus on client care.</p>
                <button className="bg-[#00df9a] w-[140px] rounded-lg text-md font-bold my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
            </div>
    )
}
export default Hero