import React, { useState } from "react"
import CModal from "../components/modal"
import Modal from "react-modal"
import { BsArrowRight } from "react-icons/bs"
// Modal.setAppElement("#main")

const Hero = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(value) {
    setIsOpen(!isOpen)
  }

  return (
    <div className=" grid sm:grid-cols-2 bg-hero bg-contain bg-no-repeat  lg:py-20 py-10">
      <div className="flex flex-col justify-center p-5 sm:pl-10  lg:py-36  lg:pl-20 ">
        <div className=" pl-5 lg:pl-0">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
            This is the platform that
          </h1>
          {/* <h1 className="text-lg lg:text- xl:text-5xl font-bold">
            enables Human Connection
          </h1> */}
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
            enables{" "}
            <span className="text-2xl lg:text-4xl xl:text-5xl pb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-500  to-red-400">
              Human Connection
            </span>
          </h1>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
            and amplifies{" "}
            <span className="text-2xl lg:text-4xl xl:text-5xl pb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-500  to-red-400">
              Community
            </span>
          </h1>
        </div>

        <div className="py-5 pl-5 lg:pl-0 md:bg-arrow md:bg-no-repeat md:bg-right-bottom">
          <a href="mailto:demo@doublealabs.com">
            <button className="flex items-center gap-4 bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5 lg:text-lg">
              Try Your Free Demo Now
              <BsArrowRight className="text-white lg:text-4xl" />
            </button>
          </a>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <div
          aria-hidden="true"
          onClick={toggleModal}
          className="text-white text-6xl bg-comuter bg-center bg-cover lg:bg-contain bg-no-repeat w-full h-full flex justify-center items-center py-40"
        >
          <div>{/* <BiPlayCircle onClick={toggleModal} /> */}</div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <CModal toggleModal={toggleModal} />
      </Modal>
    </div>
  )
}

export default Hero
