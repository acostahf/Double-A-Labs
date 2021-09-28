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
    name: "Amber Allen",
    occ: "CEO & Founder Disney, Warner Bros., Riot Games",
    body: " Amber Allan is a pioneer in the experiential technology and immersive technologies fields. With her 15+ years of experience with companies such as Disney, Warner Bros., Riot Games, Amber used her knowledge of Technology, understanding audiences and brand engagement to help launch some of the largest technology companies such as Dell, SXSW, Comic-Con,E3, HTC, Twitch, Magic Leap, YouTube, Discord and more.",
    img: "img",
    soc: "socials",
  },
  {
    name: "Asena Atalik",
    occ: "COO, Electronic Arts, Mattel, Bowman Capital",
    body: "Asena Atalik brings 20 years of experience in executive and leadership roles across operations, strategy, finance, corporate development and investment management. Asena's prior experience spans across the hedge fund industry, as well as Electronic Arts and Mattel.",
    img: "img",
    soc: "socials",
  },
]

const ProductSlider = () => {
  return (
    <Slider {...settings}>
      <div className="p-20">
        <div className="flex justify-center">
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
        </div>
      </div>
      <div className="p-20">
        <div className="flex justify-center">
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
        </div>
      </div>
    </Slider>
  )
}

export default ProductSlider
