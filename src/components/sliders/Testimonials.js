import React from "react"
// import { createRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

const settings = {
  // lazyLoad: true,
  dots: true,
  infinite: true,
  autoplay: true,
  // arrow: false,
  speed: 500,
  // slidesToShow: 1,
  slidesToScroll: 1,
  // centerPadding: "200px",
  slidesToShow: 1,
  // className: "center",
  // centerMode: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       // centerMode: true,
  //       // centerPadding: "100px",
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       // slidesToShow: 1,
  //       slidesToScroll: 1,
  //       initialSlide: 1,
  //       centerMode: false,

  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       // slidesToShow: 1,
  //       slidesToScroll: 1,
  //       centerMode: false,

  //       dots: true,
  //     },
  //   },
  // ],
}

const data = [
  {
    title: "“My team is ",
    second: "loving ",
    third: "the Double A platform!",
    sub: "Elizabeth Del Valle, Head of Global Marketing - YouTube Gaming”",
  },
  {
    title: "“I had given up on virtual before seeing",
    second: " this product.",
    third: "”",
    sub: "Nicole Rex, Vice President, Consumer & Small Business Marketing",
  },
  {
    title: "“I really",
    second: " enjoy the platform ",
    third: " and look forward to continuing to use it for events.”",
    sub: "Dell Team Member",
  },
]

const Testimonials = () => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting && !lockRef.current) {
    lockRef.current = true
  }
  return (
    <div
      ref={containerRef}
      className="bg-nmr-LightGray p-20 text-center md:bg-testimonials bg-no-repeat bg-cover"
    >
      <h1 className="text-4xl pb-20 font-semibold text-nmr-midnight ">
        Testimonials
      </h1>
      <Slider {...settings}>
        {data.map(content => (
          <div key="product" className="flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center text-nmr-midnight">
              <h1 className="text-3xl pb-3">
                {content.title}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-nmr-red to-nmr-yellow">
                  {content.second}
                </span>
                {content.third}
              </h1>
              <p>- {content.sub}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonials
