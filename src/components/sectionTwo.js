import React from "react"
import Image from "../components/Image"

const data = [
  {
    title: "Sales Enablement",
    sub: "Increase sales with highly interactive showrooms",
    img: "sales.png",
    url: "https://www.youtube.com/watch?v=t1_Optm8T7o",
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
    url: "https://www.youtube.com/watch?v=ykBfHIC4GjU",
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
    url: "https://www.youtube.com/watch?v=DHBCbE561ok",
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
        <h1 className="text-5xl text-nmr-midnight font-bold pb-2">
          Transform Your Business
        </h1>
        <p className="text-nmr-gray text-base">
          Three ways that brands use our virtual worlds to maximize commuication
          and collaboration.
        </p>
      </div>
      {/* cards */}
      <div>
        <div className="flex lg:flex-row flex-col justify-center items-center pt-10 gap-4 md:p-20 md:pb-0">
          {data.map((content, i) => (
            <div key={i} className=" pb-10 ">
              <div
                className="flex flex-col bg-gray-100 max-w-sm rounded-md lg:h-600 
              "
              >
                <a target="_blank" href={content.url}>
                  <Image
                    src={content.img}
                    className="rounded-t-md "
                    alt="video thumbnail"
                  />
                </a>
                <div className="p-8">
                  <h1 className="pb-2 text-nmr-red text-2xl">
                    {content.title}
                  </h1>
                  <h2 className="text-nmr-midnight font-semibold lg:text-left">
                    {content.sub}
                  </h2>
                  <ul className="p-5">
                    {content.points.map((listItem, i) => (
                      <li
                        key={i}
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
