import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostersPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      carteles1: file(relativePath: { eq: "carteles1.png" }) {
        childImageSharp {
          fixed(width:800, height:450) {
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
        title={intl.formatMessage({ id: "posters.title" })} 
      />

      <h1><FormattedMessage id="posters.title"/></h1>
      <p><FormattedMessage id="posters.intro.1"/></p>
      <p><FormattedMessage id="posters.intro.2"/></p>
      <p><FormattedMessage id="posters.intro.3"/></p>
      <p><FormattedMessage id="posters.intro.4"/></p>

      <Img fixed={data.carteles1.childImageSharp.fixed}/>

    </Layout>
  )
}

export default PostersPage;
