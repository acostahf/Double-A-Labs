import React from "react"
import mic from "../images/mic.png"
import Image from "../components/Image"

const data = [
  {
    title: "Spatial Audio",
    content:
      "Create realistic meeting scenarios within your space with Spatial Audio. Positioning your avatar closer or further away from others will decide your engagement level in a conversation  ",
    img: { mic },
  },
  {
    title: "Interactivity",
    content:
      "Interactivity is the best way for people to learn and remember. Play Games, Vote on Polls, and Collect Achievements and Prizes",
    img: {},
  },
  {
    title: "Broadcast Natively",
    content:
      "Real time video chat with built in interactive features. Voice your opinion with emojis, overlay a space with content or videos, or hop into a 1 on 1 meeting room",
    img: {},
  },
  {
    title: "Data & Accessibility",
    content:
      "Available on both computer and mobile. Web Based no Software needed. With measurable data and customizable tracking take control of your workspace",
    img: {},
  },
]
const SectionTwo = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap p-20">
          {data.map(content => (
            <div className="w-1/2 p-10">
              {/* <Image src="mic.png" className="" alt="Sunset Image" /> */}
              <h1 className="font-bold text-xl">{content.title}</h1>
              <p className="text-gray-400 text-sm">{content.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        <div className="pb-20 flex justify-center">
          <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-lg text-white py-3 px-5">
            {" "}
            Contact Us To Explore
          </button>
        </div>
      </div>
      <div className="text-center pb-10 ">
        <h1 className="font-bold text-4xl ">
          Connecting <br /> Entertainment and Enterprise
        </h1>
      </div>
    </div>
  )
}

export default SectionTwo
