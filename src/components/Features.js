import React from "react"
import Image from "../components/Image"

const data = [
  {
    listOne: [
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
    ],
  },
  {
    listTwo: [
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
    ],
  },
]

const Features = () => {
  // console.log(data)
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-6 ">
      {/* title */}
      <div className="text-center">
        <h1 className="text-5xl font-semibold pb-2 text-nmr-midnight">
          Best-in-Class Features
        </h1>
        <p className="text-base text-nmr-gray">
          Our platform boasts a robust set of features that power wonderfully
          immersive virtual experiences.
        </p>
      </div>
      {/* features  */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-28 max-w-4xl py-10 ">
        {/* card  */}
        <div className="flex flex-col gap-10">
          {data[0].listOne.map(content => (
            <div key={content.title} className="text-nmr-gray flex gap-5">
              <div className="flex items-center">
                <Image
                  src={content.img}
                  className=""
                  alt={content.img}
                  style={{ quality: 100, width: 20 }}
                />
              </div>
              <div>
                <h1 className="text-base">{content.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {data[1].listTwo.map(content => (
            <div key={content.title} className="text-nmr-gray flex gap-5 ">
              <div className="flex items-center">
                <Image
                  src={content.img}
                  className=""
                  alt={content.img}
                  style={{ quality: 100, width: 20 }}
                />
              </div>
              <div>
                <h1 className="text-base">{content.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
