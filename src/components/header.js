import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import Image from "../components/Image"

const Header = ({ siteTitle }) => (
  <header className="bg-white  sticky top-0 z-10">
    <div className="container px-10 py-4 flex mx-auto justify-between items-center ">
      <div className="flex items-center gap-5">
        <a href="/">
          <Image src="header-logo.png" className="w-48" alt="" />
        </a>
        <h1>
          {/* <Link to="/" className="text-black font-bold uppercase ">
            {siteTitle}
          </Link> */}
        </h1>
      </div>
      <div>
        {/* <a href="mailto:demo@doublealabs.com">
          <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-md text-white py-2 px-5 lg:px-10 lg:text-base text-sm ">
            Request Demo
          </button>
        </a> */}
        {/* <ul className=" gap-4 hidden md:flex">
          <li>Use Cases</li>
          <li>Careers</li>
          <li>Media</li>
          <li>Blogs</li>
        </ul> */}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
