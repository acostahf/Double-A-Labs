import React from "react"
import ProductSlider from "./sliders/productSllider"

const SectionFour = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center px-20">
        <h3 className="text-sm font-bold text-nmr-lightBlue pb-2">
          {" "}
          A PRODUCT BY DOUBE A LABS
        </h3>
        <h1 className="text-3xl font-black pb-2">Case Studies</h1>
        <div className="px-36 ">
          <p className="">
            Double Space Experience provides a unique way to interact with your
            audience. A place where you can natively broadcast video, conduct
            interviews, and hang with friends using spatial audio to give you an
            immersive experience.
          </p>
        </div>
      </div>

      <div className="bg-red-900 p-10 text-center">
        This is where the slider goes
      </div>
      <div>
        <div className="text-center p-10">
          <h1 className="font-black text-3xl">Production Services</h1>
          <h1>
            With our production experts, we can enrich your world by providing a
            depth of content to support your brand.
          </h1>
        </div>
      </div>
      <div className="p-10 text-center">
        <ProductSlider />
      </div>
      <div className="flex justify-center pb-20">
        <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
          Contact Us To Explore
        </button>
      </div>
    </div>
  )
}

export default SectionFour
