import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const F1Page = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      f1_1: file(relativePath: { eq: "f1_1.png" }) {
        childImageSharp {
          fluid(maxWidth:595) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f1_2: file(relativePath: { eq: "f1_2.png" }) {
        childImageSharp {
          fluid(maxWidth:596) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f1_3: file(relativePath: { eq: "f1_3.png" }) {
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
        title={intl.formatMessage({ id: "f1.title" })} 
      />

      <h1><FormattedMessage id="f1.title"/></h1>
      <p><FormattedMessage id="f1.intro.1"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.f1_1.childImageSharp.fluid}/>
          <Img fluid={data.f1_2.childImageSharp.fluid}/>
      </div>
        <div className="column">
          <Img fluid={data.f1_3.childImageSharp.fluid}/>
        </div>
      </div>

    </Layout>
  )
}

export default F1Page;
