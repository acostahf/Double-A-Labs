import React from "react"
import Image from "../components/Image"

const data = [
  {
    title: "Sales Enablement",
    sub: "Increase sales with highly interactive showrooms",
    img: "sales.png",
    points: [
      {
        point: "Host live product demos and discussions ",
      },
      {
        point: "Use dynamic content to drive sales",
      },
      {
        point: "Capture data with surveys and polls",
      },
    ],
  },
  {
    title: "Training and Education ",
    sub: "Inspire learning in an extremely fun digital setting",
    img: "training.png",
    points: [
      {
        point: "Chat and view videos together in real time",
      },
      {
        point: "Engage groups with collaborative tools",
      },
      {
        point: "Build powerful, connected teams",
      },
    ],
  },
  {
    title: "Brand Experiences",
    sub: "Create buzz-worthy activations that build brand loyalty",
    img: "brand.png",
    points: [
      {
        point: "Mobilize your global online community",
      },
      {
        point: "Launch new products and drive sales",
      },
      {
        point: "Host special events, parties, and premieres",
      },
    ],
  },
]
const SectionTwo = () => {
  return (
    <div>
      {/* title */}
      <div
        className="text-center
      pt-10
      "
      >
        <h1 className="text-3xl text-nmr-midnight font-bold pb-2">
          Transform Your Business
        </h1>
        <p className="text-nmr-gray">
          Three ways that brands use our virtual worlds to maximize commuication
          and collaboration.
        </p>
      </div>
      {/* cards */}
      <div>
        <div className="flex lg:flex-row flex-col items-center pt-10 gap-4 md:p-20">
          {data.map(content => (
            <div key={content.title} className=" pb-10 ">
              <div
                className="flex flex-col bg-gray-100 max-w-sm rounded-md lg:h-600
              "
              >
                <Image src={content.img} className="rounded-t-md" alt="mic" />
                <div className="p-8">
                  <h1 className="pb-5 bg-clip-text text-transparent bg-gradient-to-r from-nmr-red  to-nmr-yellow text-2xl">
                    {content.title}
                  </h1>
                  <h2 className="text-nmr-midnight font-semibold lg:text-left">
                    {content.sub}
                  </h2>
                  <ul className="p-5">
                    {content.points.map(listItem => (
                      <li
                        className="list-disc text-nmr-gray pb-2
                      "
                      >
                        {[listItem.point]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
