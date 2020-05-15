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
      mexicanreadymade2: file(relativePath: { eq: "mexicanreadymade2.png" }) {
        childImageSharp {
          fluid(maxWidth:400, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mexicanreadymade: file(relativePath: { eq: "mexicanreadymade.png" }) {
        childImageSharp {
          fluid(maxWidth:400, fit: CONTAIN) {
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
        title={intl.formatMessage({ id: "mrm.title" })} 
      />

      <h1><FormattedMessage id="mrm.title"/></h1>
      <p><FormattedMessage id="mrm.intro.1"/></p>
      <p><FormattedMessage id="mrm.intro.2"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.mexicanreadymade.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.mexicanreadymade2.childImageSharp.fluid}/>
        </div>
      </div>

    </Layout>
  )
}

export default MRMPage;
