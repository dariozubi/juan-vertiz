import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FonartPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      fonart1: file(relativePath: { eq: "fonart1.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fonart2: file(relativePath: { eq: "fonart2.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fonart3: file(relativePath: { eq: "fonart3.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO 
        lang={intl.locale}
        title={intl.formatMessage({ id: "fonart.title" })} 
      />

      <h1><FormattedMessage id="fonart.title"/></h1>
      <p><FormattedMessage id="fonart.intro.1"/></p>
      <p><FormattedMessage id="fonart.intro.2"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.fonart1.childImageSharp.fluid}/>
          <Img fluid={data.fonart2.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.fonart3.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export default FonartPage;
