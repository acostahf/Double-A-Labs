import React from "react"

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-20 ">
        <div className="flex justify-center flex-grow  px-20">
          <div className="p-10 rounded-lg shadow-lg  ">
            <h1 className="text-2xl font-bold text-nmr-darkBlue pb-10">
              Our Mission
            </h1>
            <p className="pb-5">
              Double A Labs is a catalyst for human connection, through
              technology.{" "}
            </p>
            <p>
              We deliver results by removing barriers and creating real-time
              interactions.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-grow  px-20">
          <div className="p-10 rounded-lg shadow-lg ">
            <h1 className="text-2xl font-bold text-nmr-lightBlue pb-10">
              Our Vision
            </h1>
            <p className="pb-2">We spark curiosity and exploration</p>
            <p className="pb-2">WeIgnite communication and collaboration</p>
            <p className="pb-2">We fan the flames of engagement and passion</p>
            <p>Our fire burns bright for our customeres</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
