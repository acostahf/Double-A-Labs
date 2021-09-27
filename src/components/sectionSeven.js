import React from "react"

const SectionSeven = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="p-20 pr-1">
        <form className="flex flex-col   ">
          <div className="pb-3">
            <h1 className="text-4xl font-extrabold pb-3">
              Start Building Your Own World in Minutes{" "}
            </h1>
            <p className="text-gray-400">
              We’re a growing team of experts and thought leaders.
            </p>
          </div>

          <div className="pb-3">
            <input
              placeholder="First & Last Name"
              className="border-solid border-2 rounded-lg py-3 px-10 w-3/4"
            ></input>
          </div>
          <div className="pb-3">
            <input
              placeholder="Phone"
              className="border-solid border-2 rounded-lg py-3 px-10 w-3/4"
            ></input>
          </div>
          <div className="pb-3">
            <input
              placeholder="Your Company Name"
              className="border-solid border-2 rounded-lg py-3 px-10 w-3/4"
            ></input>
          </div>
          <div className="">
            <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue text-sm text-white rounded-lg py-4 px-10">
              Get Started
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <div>image goes here</div>
      </div>
    </div>
  )
}

export default SectionSeven
