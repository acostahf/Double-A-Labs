import React from "react"
import CaseSlider from "./sliders/caseSlider"
import ProductSlider from "./sliders/productSllider"
import { IoIosArrowForward } from "react-icons/io"

const SectionFour = () => {
  return (
    <div className="flex flex-col justify-center pb-20">
      <div className="text-center px-20">
        <h3 className="text-sm font-bold text-nmr-lightBlue pb-2">
          {" "}
          A PRODUCT BY DOUBE A LABS
        </h3>
        <h1 className="text-4xl font-black pb-5">Case Studies</h1>
        <div className="px-36 ">
          <p className="text-gray-400 text-md">
            A deeper look into some of our most popular spaces with an emphasis
            on the data that drives these spaces.
          </p>
        </div>
      </div>

      <div className=" p-10 pb-20 text-center">
        <CaseSlider />
      </div>
      <div className="bg-nodes bg-cover bg-no-repeat ">
        <div>
          <div className="text-center p-10">
            <h1 className="font-black text-4xl pb-5">
              Making Your Behind the <br /> Scenes Dreams Come to Life
            </h1>
            <h1 className="text-gray-400 text-md">
              With our production experts, we can enrich your world by providing
              a depth of content to support your brand.
            </h1>
          </div>
        </div>
        <div className="p-10 text-center ">
          <ProductSlider />
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-full text-white py-3 px-5 flex items-center gap-2">
          <h1>Contact Us To Explore</h1>
          <IoIosArrowForward className="text-white text-xl" />
        </button>
      </div>
    </div>
  )
}

export default SectionFour
