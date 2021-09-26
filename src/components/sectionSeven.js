import React from "react"

const SectionSeven = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <form className="flex flex-col p-10">
          <h1>Start Building Your Own World in Minutes </h1>
          <p>We’re a growing team of experts and thought leaders.</p>
          <input placeholder="First and Last Name"></input>
          <input placeholder="Phone"></input>
          <input placeholder="Your Company Name"></input>
          <div className="">
            <button className="bg-blue-800 text-white rounded-lg py-3 px-5">
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
