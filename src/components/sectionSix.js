import React from "react"
import TeamSlider from "./sliders/teamSlider"
import { IoIosArrowForward } from "react-icons/io"

const SectionSix = () => {
  return (
    <div className="p-5 lg:p-20">
      <div className="text-center">
        <h1 className="font-black text-4xl pb-5">The A Team</h1>
        <p className="text-gray-500">
          Meet our growing team of experts and thought leaders.
        </p>
      </div>
      <div className="">
        <TeamSlider />
      </div>

      <div className="lg:p-20 ">
        <div className="text-white bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-xl ">
          <div className="bg-group bg-no-repeat bg-right-top p-5 lg:p-10 flex flex-col lg:flex-row ">
            <div className="w-3/4">
              <h1 className="font-bold text-2xl pb-3">
                Join the Double A Labs Team
              </h1>
              <p className="text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Risus
                odio diam egestas gravida mi. Pulvinar quisque.
              </p>
            </div>
            <div className="flex justify-center items-center w-1/4 pl-10 lg:pl-0 pt-5 lg:pt-0">
              <div>
                <button className=" px-10 lg:px-10 py-1 lg:py-3 bg-white rounded-full flex items-center lg:gap-4">
                  <h1 className=" text-sm lg:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue ">
                    Join Now
                  </h1>
                  <IoIosArrowForward className="text-nmr-darkBlue text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix
