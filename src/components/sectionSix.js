import React from "react"
import TeamSlider from "./teamSlider"

const SectionSix = () => {
  return (
    <div>
      <div className="text-center pb-10">
        <h1 className="font-black text-3xl">Meet Our Leadership Team</h1>
        <p>We’re a growing team of experts and thought leaders.</p>
      </div>
      <div className=" p-20 text-center">
        <TeamSlider />
      </div>

      <div className="p-20 ">
        <div className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-xl p-10 flex ">
          <div className="w-3/4">
            <h1 className="text-white font-bold text-lg">
              Join the Double A Labs Team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Risus odio
              diam egestas gravida mi. Pulvinar quisque.
            </p>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <div>
              <button className="px-5 py-3 bg-white text-blue-700 rounded-lg ">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix
