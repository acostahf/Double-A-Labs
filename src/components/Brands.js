import React from "react"
import Image from "../components/Image"

const logos = [
  {
    brand: "Dell.png",
  },
  {
    brand: "Amazon.png",
  },
  {
    brand: "Youtube.png",
  },
  {
    brand: "Sony.png",
  },
  {
    brand: "Warner.png",
  },
  {
    brand: "AMC.png",
  },
  {
    brand: "AT&T.png",
  },
  {
    brand: "IBM.png",
  },
  {
    brand: "Blizzard.png",
  },
]

const Brands = () => {
  return (
    <div className="bg-gradient bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pb-10 md:p-20 gap-4">
      {/* heading  */}
      <div className="flex flex-col justify-center items-center gap-2 p-10 pb-0">
        <h1 className="text-4xl md:text-5xl text-white font-semibold">
          Loved By Leading Brands
        </h1>
        <p className="text-base text-gray-200">
          The best brands in the world partner with Double A Labs.
        </p>
      </div>
      {/* images  */}
      <div className="flex flex-wrap w-full md:max-w-4xl gap-5 justify-center">
        {logos.map((logo, i) => (
          <div className="">
            <Image
              src={logo.brand}
              className=""
              alt="logos"
              style={{ quality: 100, width: 150, height: 75 }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
