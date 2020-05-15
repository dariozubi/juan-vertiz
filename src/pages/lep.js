import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LEPPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      lep1: file(relativePath: { eq: "lep1.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep2: file(relativePath: { eq: "lep2.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep3: file(relativePath: { eq: "lep3.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep4: file(relativePath: { eq: "lep4.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep5: file(relativePath: { eq: "lep5.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep6: file(relativePath: { eq: "lep6.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep7: file(relativePath: { eq: "lep7.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep8: file(relativePath: { eq: "lep8.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep9: file(relativePath: { eq: "lep9.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep10: file(relativePath: { eq: "lep10.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep11: file(relativePath: { eq: "lep11.png" }) {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lep12: file(relativePath: { eq: "lep12.png" }) {
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
        title={intl.formatMessage({ id: "lep.title" })} 
      />

      <h1><FormattedMessage id="lep.title"/></h1>
      <p><FormattedMessage id="lep.intro.1"/></p>
      <p><FormattedMessage id="lep.intro.2"/></p>

      <h3><FormattedMessage id="lep.section1.title"/></h3>
      <p><FormattedMessage id="lep.section1.1"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.lep10.childImageSharp.fluid}/>
          <Img fluid={data.lep11.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.lep12.childImageSharp.fluid}/>
        </div>
      </div>
    
      <p><FormattedMessage id="lep.section1.2"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.lep7.childImageSharp.fluid}/>
          <Img fluid={data.lep8.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.lep9.childImageSharp.fluid}/>
        </div>
      </div>
    
      <p><FormattedMessage id="lep.section1.3"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.lep4.childImageSharp.fluid}/>
          <Img fluid={data.lep5.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.lep6.childImageSharp.fluid}/>
        </div>
      </div>
    
      <h3><FormattedMessage id="lep.section2.title"/></h3>
      <p><FormattedMessage id="lep.section2.1"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.lep1.childImageSharp.fluid}/>
          <Img fluid={data.lep2.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.lep3.childImageSharp.fluid}/>
        </div>
      </div>
    
    </Layout>
  )
}

export default LEPPage;
