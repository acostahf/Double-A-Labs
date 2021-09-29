import React from "react"
import Image from "../Image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const data = [
  {
    name: "Amber Allen",
    occ: "CEO & Founder Disney, Warner Bros., Riot Games",
    body: " Amber Allan is a pioneer in the experiential technology and immersive technologies fields. With her 15+ years of experience with companies such as Disney, Warner Bros., Riot Games, Amber used her knowledge of Technology, understanding audiences and brand engagement to help launch some of the largest technology companies such as Dell, SXSW, Comic-Con,E3, HTC, Twitch, Magic Leap, YouTube, Discord and more.",
    img: "Amber.png",
    soc: "socials",
  },
  {
    name: "Asena Atalik",
    occ: "COO, Electronic Arts, Mattel, Bowman Capital",
    body: "Asena Atalik brings 20 years of experience in executive and leadership roles across operations, strategy, finance, corporate development and investment management. Asena's prior experience spans across the hedge fund industry, as well as Electronic Arts and Mattel.",
    img: "Asena.png",
    soc: "socials",
  },
  {
    name: "Dave Prout",
    occ: " Sr. Director of Operations",
    body: "Dave works alongside our other Dev Team leaders to innovate and create new technologies for Double A Labs. He has worked with over 20 game titles that have shipped on console, desktop, mobile and VR including Doom 4, Halo 4, Call of Duty: Finest Hour and Call of Duty: Ghosts. The projects that he has led and contributed on  have grossed over $1 billion in sales throughout his career. Dave has worked with a plethora of successful gaming focused startups before joining the Double A team and brings strategic knowledge and an analytical approach to the team.",
    img: "Dave.png",
    soc: "socials",
  },
  {
    name: "Chris Dreyer",
    occ: "VP of Business Development",
    body: "Chris Dreyer has worked at the cross-section of platforms and digital content for 12+ years. Chris’ ability to identify strategic opportunities, has resulted in key partnerships with platforms (Apple, Google), brands and hardware manufacturers. While spearheading EA’s mobile publishing efforts, Chris oversaw $600M in revenue, while successfully connecting the biggest brands in gaming with millions of players across the globe.",
    img: "Chris.png",
    soc: "socials",
  },
  {
    name: "Ahna Boley",
    occ: "VP of Customer Success",
    body: "Ahna is one of the first Double A Labs employees. Having started at the company as an event producer, she currently leads the production team, who are the masterminds on the ground and in the moment that make brands’ experiences successful. Starting her professional career in marketing/events for environmental engineering consultants, she uses both her analytical and creative side to bridge the gap between production, technology, and how they compliment each other.",
    img: "Ahna.png",
    soc: "socials",
  },
]

const TeamSlider = () => {
  return (
    <div className="">
      <Slider {...settings} className="">
        {data.map(content => (
          <div key="card" className="p-5 py-20">
            <div className="shadow-xl rounded-lg overflow-y-auto  h-500 p-10 bg-white bg-cardG bg-no-repeat bg-right-bottom">
              <div className="flex pb-10">
                <div className=" w-1/4">
                  <Image
                    src={content.img}
                    className=""
                    // style={{ quality: 100, width: 100, height: 100 }}
                    alt="computer image"
                  />
                </div>
                <div className="text-left w-3/4 px-5">
                  <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue">
                    {content.name}
                  </h1>
                  <h1>{content.occ} </h1>
                </div>
              </div>
              <div className="flex items-stretch text-sm">
                <p>{content.body}</p>
              </div>
              <div>
                <h1>{content.soc}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TeamSlider
