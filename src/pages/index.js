import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SectionTwo from "../components/sectionTwo"
import SectionSeven from "../components/sectionSeven"
// import AnimatedText from "../components/AnimatedText"
import Features from "../components/Features"
import SectionOne from "../components/sectionOne"
import Brands from "../components/Brands"
import Testimonials from "../components/sliders/Testimonials"

const IndexPage = () => (
  <Layout>
    <Hero />
    <SectionOne />

    <SectionTwo />
    {/* <SectionFour /> */}

    {/* <SectionFive /> */}

    {/* <SectionSix /> */}
    {/* <AnimatedText /> */}
    <Features />
    <Brands />
    <Testimonials />
    <SectionSeven />
  </Layout>
)

export default IndexPage
