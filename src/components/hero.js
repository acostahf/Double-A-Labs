import React from "react"
import computerImg from "../images/computer.png"

const Hero = () => {
  return (
    <div className=" grid grid-cols-2 bg-hero bg-contain bg-no-repeat">
      <div className="py-20 pl-20 pr-40">
        <h1 className="text-4xl font-bold">
          We are on a Mission <br /> to make B2B
        </h1>
        <h1 className="pb-10 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-500  to-red-500">
          Fun & Engaging
        </h1>

        <p className="pb-10 text-xl">
          Providing innovative virtual <br /> solutions with measurable results.
        </p>

        <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
          Try Your free Demo Now
        </button>
      </div>
      <div className="flex justify-center items-center p-20">
        <img src={computerImg} />
      </div>
    </div>
  )
}

export default Hero
