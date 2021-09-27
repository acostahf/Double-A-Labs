import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const data = [
  {
    title: "Sales Enablement",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nulla nec morbi blandit quam lectus diam morbi.",
    vid: "https://www.youtube.com/embed/iGXCgvaEk6I",
  },
  {
    title: "Fan Experience",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nulla nec morbi blandit quam lectus diam morbi.",
    vid: "https://www.youtube.com/embed/pbp6ktKLcfM",
  },
  {
    title: "Training & Instruction",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit nulla nec morbi blandit quam lectus diam morbi.",
    vid: "https://www.youtube.com/embed/DYcxd8g0REc",
  },
]

const CaseSlider = () => {
  return (
    <Slider {...settings}>
      {data.map(content => (
        <div className="p-20">
          <div className="flex justify-center">
            <iframe
              // width="1200"
              height="600"
              src={content.vid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl w-11/12 "
            ></iframe>
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold">{content.title}</h1>
            <h1>{content.body}</h1>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default CaseSlider
