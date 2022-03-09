import React from "react"

data = [
  {
    title: "",
    img: "",
  },
]

export const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4">
      {/* heading  */}
      <div>
        <h1 className="text-3xl text-white font-semibold">
          Loved By Leading Brands
        </h1>
        <p className="text-lg text-gray-200">
          The best brands in the world partner with Double A Labs.
        </p>
      </div>
      {/* images  */}
      <div>Image</div>
    </div>
  )
}
