import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MRMPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      mexicanreadymade2: file(relativePath: { eq: "aalto9.png" }) {
        childImageSharp {
          fluid(maxWidth:485) {
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
        title={intl.formatMessage({ id: "about.title" })} 
      />

      <h1><FormattedMessage id="about.title"/></h1>

      <div className="alone">
        <Img fluid={data.mexicanreadymade2.childImageSharp.fluid}/>
      </div>

      <p><FormattedMessage id="about.intro.1"/></p>
      <p><FormattedMessage id="about.intro.2"/></p>
      <p><FormattedMessage id="about.intro.3"/></p>

    </Layout>
  )
}

export default MRMPage;
