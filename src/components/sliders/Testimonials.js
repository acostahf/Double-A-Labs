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
  autoplay: false,
  // arrow: false,
  speed: 2000,
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
    sub: "Elizabeth Del Valle, Head of Global Marketing - YouTube Gaming",
  },
  {
    title: "“My team is ",
    second: "loving ",
    third: "the Double A platform!",
    sub: "Elizabeth Del Valle, Head of Global Marketing - YouTube Gaming",
  },
  {
    title: "“My team is ",
    second: "loving ",
    third: "the Double A platform!",
    sub: "Elizabeth Del Valle, Head of Global Marketing - YouTube Gaming",
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
      className="bg-gray-200 p-20 text-center bg-testimonials bg-no-repeat bg-cover"
    >
      <h1 className="text-4xl pb-20 font-semibold ">Testimonials</h1>
      <Slider {...settings}>
        {data.map(content => (
          <div key="product" className="flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl pb-3">
                {content.title}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-500  to-red-400">
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
