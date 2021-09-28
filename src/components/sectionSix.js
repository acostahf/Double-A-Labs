import React from "react"
import TeamSlider from "./sliders/teamSlider"

const SectionSix = () => {
  return (
    <div className="p-20">
      <div className="text-center">
        <h1 className="font-black text-4xl pb-5">Meet Our Leadership Team</h1>
        <p className="text-gray-500">
          We’re a growing team of experts and thought leaders.
        </p>
      </div>
      <div className="">
        <TeamSlider />
      </div>

      <div className="p-20 ">
        <div className="text-white bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-xl p-10 flex ">
          <div className="w-3/4">
            <h1 className="font-bold text-2xl pb-3">
              Join the Double A Labs Team
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Risus odio
              diam egestas gravida mi. Pulvinar quisque.
            </p>
          </div>
          <div className="flex justify-center items-center w-1/4">
            <div>
              <button className="px-10 py-3 bg-white rounded-full ">
                <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue ">
                  Join Now
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix
