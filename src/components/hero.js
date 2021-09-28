import React from "react"
import Image from "../components/Image"

const Hero = () => {
  return (
    <div className=" grid grid-cols-2 bg-hero bg-contain bg-no-repeat">
      <div className="flex justify-end p-20">
        <div className="px-20">
          <h1 className="text-2xl font-bold">Through Immersive Experiences</h1>
          <h1 className="text-4xl font-bold">We are a Catalyst For</h1>
          <h1 className="pb-10 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-500  to-red-500">
            Human Connections
          </h1>

          <p className="pb-10 text-xl">
            Providing innovative virtual <br /> solutions with measurable
            results.
          </p>

          <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
            Try Your free Demo Now
          </button>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="items-center py-20 px-20">
          <Image
            src="computer.svg"
            className=""
            style={{ quality: 100, width: 500 }}
            alt="computer image"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
