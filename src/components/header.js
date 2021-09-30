import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "../components/Image"

const Header = ({ siteTitle }) => (
  <header className="bg-white shadow-2xl">
    <div className="container px-10 py-4 flex mx-auto justify-between items-center ">
      <div className="flex items-center gap-5">
        <Image src="logo.png" className="w-10" alt="" />
        <h1>
          <Link to="/" className="text-black font-bold uppercase ">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <form action="mailto:info@doublealabs.com">
          <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-md text-white py-2 px-5 lg:px-10 lg:text-base text-sm ">
            Request Demo
          </button>
        </form>
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
