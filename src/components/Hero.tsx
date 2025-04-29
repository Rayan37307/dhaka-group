import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full h-auto pt-28 px-4 flex max-md:flex-wrap-reverse md:flex-row items-center justify-center z-10 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Left: Text */}
      <div className="relative z-10 w-full max-w-xl mx-auto p-2 md:p-8 flex flex-col justify-center gap-6 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-2xl xs:text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight mb-2 leading-tight text-gray-900 drop-shadow-sm">
          Welcome to Dhaka Group
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
          A holding company of renowned business entities
        </p>
        {/* CTA Button */}
        <div className="mt-4">
          <Link
            href="#about"
            className="inline-block px-8 py-3 rounded-md border-b-4 border-l-4 border-indigo-600 bg-indigo-500  text-white font-semibold transition hover:border-l-2 hover:border-b-2 focus:outline-none focus:ring-2 focus:ring-[#e11d48]/50"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Right: Illustration */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-10 md:mt-0 md:ml-8 flex-shrink-0 flex justify-center items-center">
        <div className=" p-4 md:p-6 flex items-center justify-center transition-transform duration-500 hover:-translate-y-1 hover:shadow-red">
          <img src="/work.svg" alt="Business Illustration" className="w-[47vw] h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Hero
