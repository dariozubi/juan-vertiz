import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AaltoPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      aalto1: file(relativePath: { eq: "aalto1.png" }) {
        childImageSharp {
          fluid(maxWidth:342) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto2: file(relativePath: { eq: "aalto2.png" }) {
        childImageSharp {
          fluid(maxWidth:319) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto3: file(relativePath: { eq: "aalto3.png" }) {
        childImageSharp {
          fluid(maxWidth:566) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto4: file(relativePath: { eq: "aalto4.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto5: file(relativePath: { eq: "aalto5.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto6: file(relativePath: { eq: "aalto6.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto7: file(relativePath: { eq: "aalto7.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto8: file(relativePath: { eq: "aalto8.png" }) {
        childImageSharp {
          fluid(maxWidth:486) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto9: file(relativePath: { eq: "aalto9.png" }) {
        childImageSharp {
          fluid(maxWidth:485) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto10: file(relativePath: { eq: "aalto10.png" }) {
        childImageSharp {
          fluid(maxWidth:482) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aalto11: file(relativePath: { eq: "aalto11.png" }) {
        childImageSharp {
          fluid(maxWidth:483) {
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
        title={intl.formatMessage({ id: "aalto.title" })} 
      />

      <h1><FormattedMessage id="aalto.title"/></h1>
      <p><FormattedMessage id="aalto.intro.1"/></p>
      <p><FormattedMessage id="aalto.intro.2"/></p>
      <p><FormattedMessage id="aalto.intro.3"/></p>

      <div className="row">
        <div className="column">
          <Img fluid={data.aalto1.childImageSharp.fluid}/>
          <Img fluid={data.aalto2.childImageSharp.fluid}/>
          <Img fluid={data.aalto3.childImageSharp.fluid}/>
          <Img fluid={data.aalto4.childImageSharp.fluid}/>
          <Img fluid={data.aalto5.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.aalto6.childImageSharp.fluid}/>
          <Img fluid={data.aalto7.childImageSharp.fluid}/>
          <Img fluid={data.aalto8.childImageSharp.fluid}/>
          <Img fluid={data.aalto9.childImageSharp.fluid}/>
          <Img fluid={data.aalto10.childImageSharp.fluid}/>
          <Img fluid={data.aalto11.childImageSharp.fluid}/>
        </div>
      </div>

      <h2><FormattedMessage id="aalto.subtitle"/></h2>

      <h3><FormattedMessage id="aalto.section1.title"/></h3>
      <p><FormattedMessage id="aalto.section1.1"/></p>
      <p><FormattedMessage id="aalto.section1.2"/></p>
      <p><FormattedMessage id="aalto.section1.3"/></p>
      <p><FormattedMessage id="aalto.section1.4"/></p>

      <h3><FormattedMessage id="aalto.section2.title"/></h3>
      <p><FormattedMessage id="aalto.section2.1"/></p>
      <ul>
        <li><FormattedMessage id="aalto.section2.2"/></li>
        <li><FormattedMessage id="aalto.section2.3"/></li>
        <li><FormattedMessage id="aalto.section2.4"/></li>
      </ul>
      <p><FormattedMessage id="aalto.section2.5"/></p>
      <p><FormattedMessage id="aalto.section2.6"/></p>
      <p><FormattedMessage id="aalto.section2.7"/></p>

      <h3><FormattedMessage id="aalto.section3.title"/></h3>
      <p><FormattedMessage id="aalto.section3.1"/></p>
      <p><FormattedMessage id="aalto.section3.2"/></p>
      <p><FormattedMessage id="aalto.section3.3"/></p>
      <p><FormattedMessage id="aalto.section3.4"/></p>

      <h3><FormattedMessage id="aalto.section4.title"/></h3>
      <p><FormattedMessage id="aalto.section4.1"/></p>
      <p><FormattedMessage id="aalto.section4.2"/></p>
      <p><FormattedMessage id="aalto.section4.3"/></p>

      <h3><FormattedMessage id="aalto.section5.title"/></h3>
      <p><FormattedMessage id="aalto.section5.1"/></p>
      <ul>
        <li><FormattedMessage id="aalto.section5.2"/></li>
        <li><FormattedMessage id="aalto.section5.3"/></li>
        <li><FormattedMessage id="aalto.section5.4"/></li>
      </ul>

    </Layout>
  )
}

export default AaltoPage;
