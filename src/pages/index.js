import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Works from "../components/works"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 style={{ textAlign: 'center', margin: '70px 0 0'}}>I'm on a constant quest to evolve, interested in creating unique spaces and experiences for exploration, collaboration and innovation in both large and small scale. </h3>
    <h3 style={{ textAlign: 'center', margin: '0'}}>I'm keen on understanding how spaces, material and people interact in order to seek how design can influence those interactions.</h3>
    <h3 style={{ textAlign: 'center', margin: '0 0 100px'}}>From commercial projects to communities development my role is to move everyone within my reach.</h3>
    <Works/>
  </Layout>
)

export default IndexPage;
