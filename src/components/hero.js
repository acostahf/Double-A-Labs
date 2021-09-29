import React, { useState } from "react"
import Image from "../components/Image"
import { BiPlayCircle } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import CModal from "../components/modal"
import Modal, { setAppElement } from "react-modal"

// Modal.setAppElement("#main")

const Hero = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(value) {
    setIsOpen(!isOpen)
  }

  return (
    <div className=" grid lg:grid-cols-2 bg-hero bg-contain bg-no-repeat lg:py-20">
      <div className="flex flex-col justify-center p-5 lg:py-20 lg:pl-20">
        <div className="lg:bg-arrow lg:bg-no-repeat lg:bg-right-bottom">
          <h1 className="text-xl lg:text-2xl font-bold">
            Through Immersive Experiences
          </h1>
          <h1 className="text-xl lg:text-4xl font-bold">
            We are a Catalyst For
          </h1>
          <h1 className="text-2xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-500  to-red-500">
            Human Connections
          </h1>
          <p className=" pb-3 lg:pb-10 text-sm lg:text-xl">
            Providing innovative virtual <br /> solutions with measurable
            results.
          </p>
        </div>
        <div className="pb-5">
          <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
            Try Your free Demo Now
          </button>
        </div>
      </div>

      <div className="flex justify-start items-center ">
        {/* <Image
            src="computer.svg"
            className=""
            style={{ quality: 100, width: 500, height: 400 }}
            alt="computer image"
          /> */}
        <div className="text-white text-6xl bg-comuter bg-center bg-cover lg:bg-contain bg-no-repeat w-full h-3/4 flex justify-center items-center">
          <div>
            <BiPlayCircle onClick={toggleModal} />
          </div>
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
