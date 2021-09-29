import React, { useState } from "react"
import Image from "../components/Image"
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
    <div className=" grid grid-cols-2 bg-hero bg-contain bg-no-repeat">
      <div className="flex justify-end p-20">
        <div className="px-20">
          <h1 className="text-2xl font-bold">Through Immersive Experiences</h1>
          <h1 className="text-4xl font-bold">We are a Catalyst For</h1>
          <h1 className="pb-10 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-500  to-red-500">
            Human Connections
          </h1>

          <p className="pb-10 text-xl">
            Providing innovative virtual <br /> solutions with measurable
            results.
          </p>
          <div className="pb-5">
            <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white  py-3 px-5">
              Try Your free Demo Now
            </button>
          </div>
          <div>
            <button
              onClick={toggleModal}
              className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5 flex items-center gap-2"
            >
              Open Video
              {/* <h1>Try Your free Demo Now</h1>
            <BsArrowRight className="text-xl" /> */}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="items-center py-20 px-20">
          <Image
            src="computer.svg"
            className=""
            style={{ quality: 100, width: 500, height: 400 }}
            alt="computer image"
          />
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
