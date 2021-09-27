import React from "react"
import Cards from "./cards"

const SectionFive = () => {
  return (
    <div>
      <div className="text-center px-20">
        <h1 className="text-4xl font-black p-5">Our Values</h1>
        <p className="px-40 text-gray-400 text-md">
          Double Space Experience provides a unique way to interact with your
          audience. A place where you can natively broadcast video, conduct
          interviews, and hang with friends using spatial audio to give you an
          immersive experience.
        </p>
      </div>
      <Cards />
    </div>
  )
}

export default SectionFive
