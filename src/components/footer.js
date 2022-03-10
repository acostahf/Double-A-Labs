import React from "react"
import Image from "../components/Image"
import {
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="px-20 pb-10 pt-10 bg-footerGrad bg-no-repeat bg-cover bg-center">
      <div className="text-white flex flex-col items-center md:flex-row justify-between ">
        <div className="flex flex-col justify-center gap-3 pb-5">
          <div className="flex gap-6 md:pl-10">
            <a className=" " href="/">
              Privacy
            </a>

            <a href="/">Careers</a>
            <a href="/">Terms</a>
            {/* <a href="/">About</a> */}
          </div>
          {/* <div>
            <a href="mailto:demo@doublealabs.com">demo@doublelabs.com</a>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex justify-center items-center flex-col">
            <Image
              src="whiteLogo.svg"
              style={{ quality: 100, width: 30, height: 30 }}
              alt="computer image"
            />
            <h1 className="font-bold  pt-2">DOUBLE A LABS</h1>
          </div>
        </div>
        <div className="flex items-center gap-10 text-4xl">
          <a href="https://twitter.com/doublea_labs">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/doublealabs">
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/company/doublealabs/">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/channel/UCMAkoc0yEsgpX6CCjgB5Z9A">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
