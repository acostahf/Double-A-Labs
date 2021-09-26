import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import SectionTwo from "../components/sectionTwo"
import SectionThree from "../components/sectionThree"
import SectionFive from "../components/sectionFive"
import SectionSix from "../components/sectionSix"
import SectionSeven from "../components/sectionSeven"
import SectionFour from "../components/sectionFour"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
  </Layout>
)

export default IndexPage
