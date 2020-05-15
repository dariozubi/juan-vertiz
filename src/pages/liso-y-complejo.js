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
      liso1: file(relativePath: { eq: "liso1.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso2: file(relativePath: { eq: "liso2.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso3: file(relativePath: { eq: "liso3.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso4: file(relativePath: { eq: "liso4.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso5: file(relativePath: { eq: "liso5.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso6: file(relativePath: { eq: "liso6.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso7: file(relativePath: { eq: "liso7.png" }) {
        childImageSharp {
          fluid(maxWidth:600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso8: file(relativePath: { eq: "liso8.png" }) {
        childImageSharp {
          fluid(maxWidth:600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso9: file(relativePath: { eq: "liso9.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      liso10: file(relativePath: { eq: "liso10.png" }) {
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
        title={intl.formatMessage({ id: "liso.title" })} 
      />

      <h1><FormattedMessage id="liso.title"/></h1>
      <p><FormattedMessage id="liso.intro.1"/></p>
      <p><FormattedMessage id="liso.intro.2"/></p>
      <p><FormattedMessage id="liso.intro.3"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.liso7.childImageSharp.fluid}/>
          <Img fluid={data.liso9.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.liso8.childImageSharp.fluid}/>
          <Img fluid={data.liso10.childImageSharp.fluid}/>
        </div>
      </div>

      <p><FormattedMessage id="liso.intro.4"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.liso5.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.liso6.childImageSharp.fluid}/>
        </div>
      </div>

      <p><FormattedMessage id="liso.intro.5"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.liso1.childImageSharp.fluid}/>
          <Img fluid={data.liso2.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.liso3.childImageSharp.fluid}/>
          <Img fluid={data.liso4.childImageSharp.fluid}/>
        </div>
      </div>
      
    </Layout>
  )
}

export default F1Page;
