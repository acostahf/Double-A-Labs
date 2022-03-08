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
    <div className="bg-techRoom bg-no-repeat bg-cover w-full flex flex-col items-center p-10 py-20 gap-4 ">
      <div>
        <a href="/">
          <Image src="new-logo.png" className="w-16" alt="" />
        </a>
      </div>
      <div className="text-center">
        <h1 className="max-w-lg text-4xl text-white pb-2">
          We enable brands to engage audiences in powerful ways.
        </h1>
      </div>
      <div className="flex gap-4  ">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-nmr-orange p-5 rounded-md w-44 text-xs text-white text-center flex items-center justify-center"
          >
            <h1>{item.content}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionOne
