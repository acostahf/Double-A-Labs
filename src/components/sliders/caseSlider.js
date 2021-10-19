import React from "react"
// import { useRef } from "react"
// import useIntersectionObserver from "@react-hook/intersection-observer"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  // lazyLoad: true,
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 2000,
  // slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "200px",
  slidesToShow: 1,
  // className: "center",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        // slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        centerPadding: "0px",
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        // slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
        dots: true,
      },
    },
  ],
}

const data = [
  {
    title: "Sales Enablement",
    sub: "Dell - Train The Trainer",
    body: "Dell Sales Representatives were taken through a variety of spaces showcasing upcoming product launches and hardware improvements ahead of Black Friday. Sales Reps were taken through scheduling sessions and had hands-on interaction with the new products.",
    vid: "https://www.youtube.com/embed/tbzQonXW3aM",
  },
  {
    title: "Fan Experience",
    sub: "YouTube",
    body: "Popular streamers and YouTube influencers were some of the first to interact within Double Space. Creators squared off against one another in different contests, voted on personal favorites, and viewed new exclusive content within the Double Space.",
    vid: "https://www.youtube.com/embed/XDkEDoDWDqw",
  },
  {
    title: "Training & Instruction",
    sub: "The Kindness Campaign",
    body: "A Double Space was created around an anti-bullying campaign put on by The Kindness Campaign. Students were tasked with exploring the treehouse and along the way observed anti-bullying content, played related mini games, and unlocked secret rewards while collaborating with their peers!",
    vid: "https://www.youtube.com/embed/vN4OVNvR1Gg",
  },
]

const CaseSlider = () => {
  // const containerRef = useRef()
  // const lockRef = useRef(false)
  // const { isIntersecting } = useIntersectionObserver(containerRef)
  // if (isIntersecting && !lockRef.current) {
  //   lockRef.current = true
  // }
  return (
    <div>
      <Slider {...settings}>
        {data.map(content => (
          <div key={content.title} className="flex justify-center">
            {/* {lockRef.current && ( */}
            <iframe
              // width="1200"
              // height="600"
              loading="lazy"
              src={content.vid}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-xl w-11/12  lg:h-500"
            ></iframe>
            {/* )} */}
          </div>
        ))}
      </Slider>
      <div>
        <div className="grid lg:grid-cols-3 pt-20 text-left ">
          {data.map(content => (
            <div key={content.title} className="lg:px-10 flex flex-col p-5">
              <h1 className="pb-2 text-2xl font-bold border-b-2 border-nmr-liteblue ">
                {content.title}
              </h1>
              <h1 className="pb-5 pt-2 bg-right-bottom text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue">
                {content.sub}
              </h1>
              <h1>{content.body}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseSlider
