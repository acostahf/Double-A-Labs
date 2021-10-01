import React from "react"
import Image from "../components/Image"

const data = [
  {
    title: "Real Time Communication",
    content:
      "Communicate with others using video chat, text, or your favorite emojis. Spatial audio allows you to only hear the conversation of those nearby. ",
    img: "board.svg",
  },
  {
    title: "Rooms for Any Use Case",
    content:
      "Any hi-res image can be used for a room setting. Whether it’s corporate office, or pub to host trivia, a simple image is all it takes.",
    img: "controller.svg",
  },
  {
    title: "Fun Way To Engage & Interact",
    content:
      "Any content can be added to a room with just a few clicks. Videos, livestream games, live polls, coupons, you name it, it can be done.    ",
    img: "floppy.svg",
  },
  {
    title: "Accessibility & Data",
    content:
      "No download necessary.  All you need is a PC or mobile device and a web browser.  So literally, almost ANYONE can join.  We also offer data and analytics so you can see how your space is performing.",
    img: "mic.svg",
  },
]
const SectionTwo = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:p-20">
          {data.map(content => (
            <div key={content.title} className="lg:w-1/2 p-10">
              <div className="flex gap-4">
                <Image
                  src={content.img}
                  className=""
                  alt="mic"
                  style={{ quality: 100, width: 30, height: 30 }}
                />
                <h1 className="font-bold text-xl">{content.title}</h1>
              </div>
              <p className="text-gray-400 text-sm text-center lg:text-left">
                {content.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        <div className="pb-20 flex justify-center">
          <form action="mailto:info@doublealabs.com">
            <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
              {" "}
              Contact Us To Explore
            </button>
          </form>
        </div>
      </div>
      {/* <div className="text-center pb-10 ">
        <h1 className="font-bold text-4xl ">
          Connecting <br /> Entertainment and Enterprise
        </h1>
      </div> */}
    </div>
  )
}

export default SectionTwo
