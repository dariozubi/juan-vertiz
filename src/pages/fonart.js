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
          fixed(width:500, height:281) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fonart2: file(relativePath: { eq: "fonart2.png" }) {
        childImageSharp {
          fixed(width:500, height:370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fonart3: file(relativePath: { eq: "fonart3.png" }) {
        childImageSharp {
          fixed(width:500, height:363) {
            ...GatsbyImageSharpFixed
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

      <Img fixed={data.fonart1.childImageSharp.fixed}/>
      <Img fixed={data.fonart2.childImageSharp.fixed}/>
      <Img fixed={data.fonart3.childImageSharp.fixed}/>

    </Layout>
  )
}

export default FonartPage;
