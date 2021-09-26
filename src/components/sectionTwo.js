import React from "react"

const data = [
  {
    title: "Spatial Audio",
    content:
      "Create realistic meeting scenarios within your space with Spatial Audio. Positioning your avatar closer or further away from others will decide your engagement level in a conversation  ",
  },
  {
    title: "Interactivity",
    content:
      "Interactivity is the best way for people to learn and remember. Play Games, Vote on Polls, and Collect Achievements and Prizes",
  },
  {
    title: "Broadcast Natively",
    content:
      "Real time video chat with built in interactive features. Voice your opinion with emojis, overlay a space with content or videos, or hop into a 1 on 1 meeting room",
  },
  {
    title: "Data & Accessibility",
    content:
      "Available on both computer and mobile. Web Based no Software needed. With measurable data and customizable tracking take control of your workspace",
  },
]
const SectionTwo = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap">
          {data.map(content => (
            <div className="w-1/2 p-5">
              <h1 className="font-bold text-xl">{content.title}</h1>
              <p>{content.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        <div className="pb-20 flex justify-center">
          <button className="rounded-lg py-3 px-5 text-white bg-blue-600">
            {" "}
            Contact Us To Explore
          </button>
        </div>
      </div>
      <div className="text-center ">
        <h1 className="font-bold text-3xl ">
          Connecting <br /> Entertainment and Enterprise
        </h1>
      </div>
    </div>
  )
}

export default SectionTwo
