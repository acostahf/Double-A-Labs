import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
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

const TeamSlider = () => {
  return (
    <Slider {...settings} className="bg-blue-600">
      {data.map(content => (
        <div className="p-5 bg-red-400 ">
          <div className="shadow-xl rounded-lg p-10 flex flex-grow flex-col ">
            <div className="flex pb-10">
              <div className="bg-blue-600 w-1/4 ">
                <h1>{content.img}</h1>
              </div>
              <div className="text-left w-3/4 px-5">
                <h1 className="text-xl font-black ">{content.name}</h1>
                <h1>{content.occ} </h1>
              </div>
            </div>
            <div>
              <p>{content.body}</p>
            </div>
            <div>
              <h1>{content.soc}</h1>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default TeamSlider
