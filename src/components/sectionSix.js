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
      <div className="pb-10">
        <TeamSlider />
      </div>

      <div className="lg:p-20 ">
        <div className="text-white bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-xl ">
          <div className="bg-group bg-no-repeat bg-right-top p-5 lg:p-10 flex flex-col lg:flex-row  ">
            <div className=" md:w-3/4">
              <h1 className="font-bold text-2xl pb-3">
                Join the Double A Labs Team
              </h1>
              {/* <p className="text-sm lg:text-base">
                Join our fast growing team today
              </p> */}
            </div>
            <div className="flex justify-center items-center  sm:w-1/4 pt-5 lg:pt-0">
              <div>
                <form
                  action="https://jobs.lever.co/doublealabs/"
                  target="_blank"
                >
                  <button className="px-10 py-3 bg-white rounded-full flex items-center lg:gap-4">
                    <h1 className=" text-sm lgs:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue ">
                      Apply Now
                    </h1>
                    <IoIosArrowForward className="text-nmr-darkBlue text-xl" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix
