import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import SectionTwo from "../components/sectionTwo"
import SectionFive from "../components/sectionFive"
import SectionSix from "../components/sectionSix"
import SectionSeven from "../components/sectionSeven"
import SectionFour from "../components/sectionFour"
import SectionOne from "../components/sectionOne"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Hero />
    <SectionOne />
    <div className="bg-secTwo bg-cover bg-no-repeat">
      <SectionTwo />
      <SectionFour />
    </div>
    <SectionFive />
    <div className="bg-secSnS bg-cover bg-no-repeat">
      <SectionSix />
      <SectionSeven />
    </div>
  </Layout>
)

export default IndexPage
