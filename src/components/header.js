import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-white shadow-xl">
    <div className="container px-10 py-4 flex mx-auto justify-between items-center ">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="text-black font-bold uppercase ">
          {siteTitle}
        </Link>
      </h1>
      <div>
        <button className="bg-gradient-to-r from-nmr-liteblue to-nmr-darkBlue rounded-md text-white py-2 px-10">
          Request Demo
        </button>
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
