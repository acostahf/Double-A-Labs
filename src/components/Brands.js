import React from "react"
import Image from "../components/Image"

const Brands = () => {
  return (
    <div className="bg-gradient flex flex-col items-center justify-center p-20 gap-4">
      {/* heading  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl text-white font-semibold">
          Loved By Leading Brands
        </h1>
        <p className="text-base text-gray-200">
          The best brands in the world partner with Double A Labs.
        </p>
      </div>
      {/* images  */}
      <div className="">
        <Image
          src="placeholder-logos.png"
          className=""
          alt="logos"

          // style={{ quality: 100, width: 868 }}
        />
      </div>
    </div>
  )
}

export default Brands
