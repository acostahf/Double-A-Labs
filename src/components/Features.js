import React from "react"
import Image from "../components/Image"

const data = [
  {
    title: "Real-Time Chat",
    img: "Chat.svg",
  },
  {
    title: "Video/Rich Media",
    img: "Media.svg",
  },
  {
    title: "Mobile Friendly",
    img: "Mobile.svg",
  },
  {
    title: "Collaboration Tools",
    img: "Collaboration.svg",
  },
  {
    title: "Client Branding",
    img: "House.svg",
  },
  {
    title: "No Limits To # of Users",
    img: "No-Limits.svg",
  },
  {
    title: "Games and Activities",
    img: "Games.svg",
  },
  {
    title: "Intuitive User Experience",
    img: "UX.svg",
  },
  {
    title: "Data Reporting",
    img: "Data.svg",
  },
  {
    title: "Premium Security",
    img: "Security.svg",
  },
]

const Features = () => {
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-6 ">
      {/* title */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold pb-2">Best-in-Class Features</h1>
        <p className="text-md text-gray-400">
          Our platform boasts a robust set of features that power wonderfully
          immersive virtual experiences.
        </p>
      </div>
      {/* features  */}
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl">
        {/* card  */}
        {data.map(content => (
          <div
            key={content.title}
            className="bg-gray-200 rounded-md w-32 h-32 pl-4 py-4 pr-2 flex flex-col justify-between "
          >
            <div>
              <Image
                src={content.img}
                className=""
                alt={content.img}
                style={{ quality: 100, width: 17 }}
              />
            </div>
            <div>
              <h1 className="text-xs">{content.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
