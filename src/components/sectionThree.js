import React from "react"
import DalImg from "../images/img1.png"

const SectionThree = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-center">
          <h3>Enterprise Communications</h3>
        </div>
        <div className="text-center">
          <h3>Content Platforms</h3>
        </div>
      </div>
      <div>
        <div className=" flex justify-center items-center px-20 py-10">
          <div>
            <img src={DalImg} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-center pb-20">
          <div className="pb-5">
            <h3 className="font-bold text-nmr-lightGreen">
              Stagnant communications
            </h3>
            <h3 className="text-gray-400 italic">
              One dimensional basic functionality attention
            </h3>
          </div>
          <div className="pb-5">
            <h3 className="font-bold text-nmr-lightGreen">“Zoom” fatigue</h3>
            <h3 className="text-gray-400 italic">
              design flows that exhaust body & mind
            </h3>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="pb-5">
            <h3 className="font-bold text-nmr-darkBlue">
              Distracting environment
            </h3>
            <h3 className="text-gray-400 italic">Compete for the viewer's </h3>
          </div>
          <div className="pb-5">
            <h3 className="font-bold text-nmr-darkBlue">Static Interface</h3>
            <h3 className="text-gray-400 italic">Limited Interactions</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
