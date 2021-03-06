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
          fluid(maxWidth:800) {
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
        title={intl.formatMessage({ id: "posters.title" })} 
      />

      <h1><FormattedMessage id="posters.title"/></h1>
      <p><FormattedMessage id="posters.intro.1"/></p>
      <p><FormattedMessage id="posters.intro.2"/></p>
      <p><FormattedMessage id="posters.intro.3"/></p>
      <p><FormattedMessage id="posters.intro.4"/></p>

      <div className="alone">
        <Img fluid={data.carteles1.childImageSharp.fluid}/>
      </div>

    </Layout>
  )
}

export default PostersPage;
