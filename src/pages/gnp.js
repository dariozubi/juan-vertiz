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
          fixed(width:400, height:600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gnp2: file(relativePath: { eq: "gnp2.png" }) {
        childImageSharp {
          fixed(width:400, height:299) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gnp3: file(relativePath: { eq: "gnp3.png" }) {
        childImageSharp {
          fixed(width:400, height:301) {
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
        title={intl.formatMessage({ id: "gnp.title" })} 
      />

      <h1><FormattedMessage id="gnp.title"/></h1>
      <p><FormattedMessage id="gnp.intro.1"/></p>
      <p><FormattedMessage id="gnp.intro.2"/></p>

      <Img fixed={data.gnp1.childImageSharp.fixed}/>
      <Img fixed={data.gnp2.childImageSharp.fixed}/>
      <Img fixed={data.gnp3.childImageSharp.fixed}/>

    </Layout>
  )
}

export default GNPPage;
