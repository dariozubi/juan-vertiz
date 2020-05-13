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
          fixed(width:595, height:336) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      f1_2: file(relativePath: { eq: "f1_2.png" }) {
        childImageSharp {
          fixed(width:596, height:336) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      f1_3: file(relativePath: { eq: "f1_3.png" }) {
        childImageSharp {
          fixed(width:500, height:281) {
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
        title={intl.formatMessage({ id: "f1.title" })} 
      />

      <h1><FormattedMessage id="f1.title"/></h1>
      <p><FormattedMessage id="f1.intro.1"/></p>

      <Img fixed={data.f1_1.childImageSharp.fixed}/>
      <Img fixed={data.f1_2.childImageSharp.fixed}/>
      <Img fixed={data.f1_3.childImageSharp.fixed}/>

    </Layout>
  )
}

export default F1Page;
