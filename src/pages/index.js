import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SectionTwo from "../components/sectionTwo"
import SectionSeven from "../components/sectionSeven"
import AnimatedText from "../components/AnimatedText"
import SectionOne from "../components/sectionOne"

const IndexPage = () => (
  <Layout>
    <Hero />
    <SectionOne />

    <SectionTwo />
    {/* <SectionFour /> */}

    {/* <SectionFive /> */}

    {/* <SectionSix /> */}
    <AnimatedText />
    <SectionSeven />
  </Layout>
)

export default IndexPage
