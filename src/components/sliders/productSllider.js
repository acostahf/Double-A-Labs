import React from "react"
import { useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  lazyLoad: true,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "200px",
  slidesToShow: 1,
  // className: "center",
  centerMode: true,
}

const ProductSlider = () => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting && !lockRef.current) {
    lockRef.current = true
  }
  return (
    <Slider {...settings}>
      <div className="">
        <div ref={containerRef} className="flex justify-center">
          {lockRef.current && (
            <iframe
              // width="1200"
              loading="lazy"
              height="600"
              src="https://www.youtube.com/embed/iGXCgvaEk6I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl w-11/12 "
            ></iframe>
          )}
        </div>
      </div>
      <div className="">
        <div ref={containerRef} className="flex justify-center">
          {lockRef.current && (
            <iframe
              // width="1200"
              loading="lazy"
              height="600"
              src="https://www.youtube.com/embed/iGXCgvaEk6I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl w-11/12 "
            ></iframe>
          )}
        </div>
      </div>

      <div className="">
        <div ref={containerRef} className="flex justify-center">
          {lockRef.current && (
            <iframe
              // width="1200"
              loading="lazy"
              height="600"
              src="https://www.youtube.com/embed/iGXCgvaEk6I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl w-11/12 "
            ></iframe>
          )}
        </div>
      </div>
    </Slider>
  )
}

export default ProductSlider
