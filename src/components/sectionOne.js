import React from "react"
import Image from "../components/Image"

const data = [
  {
    content: "Spark human connection within communities",
  },
  {
    content: "Inspire collaboration",
  },
  {
    content: "Ignite passion & curiosity",
  },
  {
    content: "Turn work into play",
  },
]

const SectionOne = () => {
  return (
    <div className="bg-techRoom bg-no-repeat bg-cover w-full flex flex-col items-center p-10 py-20 gap-16 ">
      <div className="text-center">
        <h1 className="max-w-lg text-4xl text-white pb-2">
          We Enable Brands To Engage Audiences In Powerful Ways.
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-80	p-5 rounded-md w-44 text-xs text-center flex items-center justify-center"
          >
            <h1 className="text-nmr-gray">{item.content}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionOne
