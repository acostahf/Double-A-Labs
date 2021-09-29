import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"

const Cards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 pb-10 lg:p-20 lg:gap-20 ">
        <div className="grid ">
          <div className="p-10 rounded-lg shadow-lg bg-white bg-group bg-no-repeat bg-right-top">
            <h1 className="text-2xl font-bold text-nmr-darkBlue pb-10">
              Our Mission
            </h1>
            <div className="flex gap-4 text items-center pb-5">
              <AiFillCheckCircle className="text-nmr-darkBlue" />
              <p className="">
                Double A Labs is a catalyst for human connection, through
                technology.{" "}
              </p>
            </div>
            <div className="flex gap-4 text items-center pb-2">
              <AiFillCheckCircle className="text-nmr-darkBlue" />
              <p>
                We deliver results by removing barriers and creating real-time
                interactions.
              </p>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="p-10 rounded-lg shadow-lg bg-white bg-group bg-no-repeat bg-right-top">
            <h1 className="text-2xl font-bold text-nmr-lightBlue pb-10">
              Our Vision
            </h1>
            <div className="flex gap-2 text items-center pb-2">
              <AiFillCheckCircle className="text-nmr-lightBlue" />
              <p className="">We spark curiosity and exploration</p>
            </div>
            <div className="flex gap-2 text items-center pb-2">
              <AiFillCheckCircle className="text-nmr-lightBlue" />
              <p className="pb-2">WeIgnite communication and collaboration</p>
            </div>
            <div className="flex gap-2 text items-center pb-2">
              <AiFillCheckCircle className="text-nmr-lightBlue" />
              <p className="pb-2">
                We fan the flames of engagement and passion
              </p>
            </div>
            <div className="flex gap-2 text items-center pb-2">
              <AiFillCheckCircle className="text-nmr-lightBlue" />
              <p>Our fire burns bright for our customeres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
