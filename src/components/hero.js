import React from "react"

const Hero = () => {
  return (
    <div className=" bg-blue-300 grid grid-cols-2">
      <div className="p-20">
        <h1 className="text-3xl font-bold">We are on a Mission to make B2B</h1>
        <h1 className="text-3xl font-bold text-red-500 pb-5">Fun & Engaging</h1>
        <p className="pb-5">
          Providing innovative virtual solutions with measurable results.
        </p>
        <button className="bg-blue-900 rounded-lg text-white py-3 px-5">
          Try Your free Demo Now
        </button>
      </div>
      <div className="flex justify-center items-center">
        <h1>image goes here</h1>
      </div>
    </div>
  )
}

export default Hero
