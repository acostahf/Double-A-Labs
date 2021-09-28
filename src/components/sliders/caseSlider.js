import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  lazyLoad: true,
  dots: true,
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

const data = [
  {
    title: "Sales Enablement",
    sub: "Dell - Train The Trainer",
    body: "Dell Sales Representatives were taken through a variety of spaces showcasing upcoming product launches and hardware improvements ahead of Black Friday. Sales Reps were taken through scheduling sessions and had hands-on interaction with the new products.",
    vid: "https://www.youtube.com/embed/iGXCgvaEk6I",
  },
  {
    title: "Fan Experience",
    sub: "Youtbue",
    body: "Popular streamers and youtube influencers were some of the first to interact within Double Space. Creators squared off against one another in different contests, voted on personal favorites, and viewed new exclusive content within the Double Space.",
    vid: "https://www.youtube.com/embed/pbp6ktKLcfM",
  },
  {
    title: "Training & Instruction",
    sub: "The Kindness Campaign",
    body: "A Double Space was created around an anti-bullying campaign put on by The Kindness Campaign. Students were tasked with exploring the treehouse and along the way observed anti-bullying content, played related mini games, and unlocked secret rewards while collaborating with their peers!",
    vid: "https://www.youtube.com/embed/DYcxd8g0REc",
  },
  {
    title: "Training & Instruction",
    sub: "The Kindness Campaign",
    body: "A Double Space was created around an anti-bullying campaign put on by The Kindness Campaign. Students were tasked with exploring the treehouse and along the way observed anti-bullying content, played related mini games, and unlocked secret rewards while collaborating with their peers!",
    vid: "https://www.youtube.com/embed/DYcxd8g0REc",
  },
]

const CaseSlider = () => {
  return (
    <Slider {...settings}>
      {data.map(content => (
        <div className="">
          <div className="flex justify-center">
            <iframe
              // width="1200"
              loading="lazy"
              height="600"
              src={content.vid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-xl w-11/12 "
            ></iframe>
          </div>
          <div className="px-20">
            <h1 className="pb-5 text-xl font-bold">{content.title}</h1>
            <h1 className="pb-10 bg-right-bottomtext-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue  ">
              {content.sub}
            </h1>
            <h1>{content.body}</h1>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default CaseSlider
