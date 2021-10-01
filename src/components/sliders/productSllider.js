import React from "react"
// import { createRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

const settings = {
  // lazyLoad: true,
  dots: false,
  infinite: true,
  autoplay: true,
  arrow: true,
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
        slidesToShow: 1,
        // centerMode: true,
        // centerPadding: "100px",
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        // slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,

        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        // slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,

        dots: true,
      },
    },
  ],
}

const data = [
  {
    title: "Hybrid1",
    vid: "https://www.youtube.com/embed/PFfQQ-3ShCE",
  },
  {
    title: "Hybrid2",
    vid: "https://www.youtube.com/embed/zQpBXMHoa8Q",
  },
]

const ProductSlider = () => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting && !lockRef.current) {
    lockRef.current = true
  }
  return (
    <div ref={containerRef}>
      <Slider {...settings}>
        {data.map(content => (
          <div key="product" className="flex justify-center">
            {lockRef.current && (
              <iframe
                // width="1200"
                // height="600"
                src={content.vid}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className="rounded-xl w-full md:w-11/12 md:h-300 lg:h-500"
              ></iframe>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider
