import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GNPPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      gnp1: file(relativePath: { eq: "gnp1.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gnp2: file(relativePath: { eq: "gnp2.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gnp3: file(relativePath: { eq: "gnp3.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
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
        title={intl.formatMessage({ id: "gnp.title" })} 
      />

      <h1><FormattedMessage id="gnp.title"/></h1>
      <p><FormattedMessage id="gnp.intro.1"/></p>
      <p><FormattedMessage id="gnp.intro.2"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.gnp1.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.gnp2.childImageSharp.fluid}/>
          <Img fluid={data.gnp3.childImageSharp.fluid}/>
          </div>
      </div>

    </Layout>
  )
}

export default GNPPage;
