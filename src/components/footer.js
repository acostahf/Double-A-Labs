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
    <div className="flex justify-center p-20 bg-footer bg-bottom  bg-no-repeat bg-cover">
      <div className="text-white flex justify-center items-center flex-col text-center">
        <div className="pb-5">
          <Image
            src="whiteLogo.svg"
            style={{ quality: 100, width: 30, height: 30 }}
            alt="computer image"
          />
        </div>
        <h1 className="font-bold pb-5">DOUBLE A LABS</h1>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 pb-5">
          <div>
            <a className="pr-3 lg:pr-10" href="...">
              Privacy
            </a>

            <a href="...">Terms of Use</a>
          </div>
          <div>
            <a href="mailto:demo@doublealabs.com">demo@doublelabs.com</a>
          </div>
        </div>
        <div className="flex gap-10 text-lg">
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
