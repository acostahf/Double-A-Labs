import React from "react"
import { useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

const data = [
  {
    title: "Sales Enablement",
    sub: "Dell - Train The Trainer",
    body: "Dell Sales Representatives were taken through a variety of spaces showcasing upcoming product launches and hardware improvements ahead of Black Friday. Sales Reps were taken through scheduling sessions and had hands-on interaction with the new products.",
    vid: "https://www.youtube.com/embed/tbzQonXW3aM",
  },
  {
    title: "Fan Experience",
    sub: "Youtube",
    body: "Popular streamers and youtube influencers were some of the first to interact within Double Space. Creators squared off against one another in different contests, voted on personal favorites, and viewed new exclusive content within the Double Space.",
    vid: "https://www.youtube.com/embed/XDkEDoDWDqw",
  },
  {
    title: "Training & Instruction",
    sub: "The Kindness Campaign",
    body: "A Double Space was created around an anti-bullying campaign put on by The Kindness Campaign. Students were tasked with exploring the treehouse and along the way observed anti-bullying content, played related mini games, and unlocked secret rewards while collaborating with their peers!",
    vid: "https://www.youtube.com/embed/vN4OVNvR1Gg",
  },
]

const CaseMobile = () => {
  // const [ref, setRef] = useState()
  // const { isIntersecting } = useIntersectionObserver(ref)
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting && !lockRef.current) {
    lockRef.current = true
  }
  return (
    <div ref={containerRef}>
      {data.map(content => (
        <div key={content.title} className="flex flex-col justify-center">
          {lockRef.current && (
            <iframe
              // width="1200"
              // height="600"
              src={content.vid}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-xl  sm:h-500"
            ></iframe>
          )}
          <div className="pb-5 text-left ">
            <div className="flex flex-col p-5">
              <h1 className="pb-2 text-2xl font-bold border-b-2 border-nmr-liteblue ">
                {content.title}
              </h1>
              <h1 className="pb-5 pt-2 bg-right-bottom text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue">
                {content.sub}
              </h1>
              <h1>{content.body}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CaseMobile
