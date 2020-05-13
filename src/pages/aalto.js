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
          fixed(width:342, height:425) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto2: file(relativePath: { eq: "aalto2.png" }) {
        childImageSharp {
          fixed(width:319, height:425) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto3: file(relativePath: { eq: "aalto3.png" }) {
        childImageSharp {
          fixed(width:566, height:425) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto4: file(relativePath: { eq: "aalto4.png" }) {
        childImageSharp {
          fixed(width:500, height:375) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto5: file(relativePath: { eq: "aalto5.png" }) {
        childImageSharp {
          fixed(width:500, height:338) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto6: file(relativePath: { eq: "aalto6.png" }) {
        childImageSharp {
          fixed(width:500, height:457) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto7: file(relativePath: { eq: "aalto7.png" }) {
        childImageSharp {
          fixed(width:500, height:453) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto8: file(relativePath: { eq: "aalto8.png" }) {
        childImageSharp {
          fixed(width:486, height:322) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto9: file(relativePath: { eq: "aalto9.png" }) {
        childImageSharp {
          fixed(width:485, height:322) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto10: file(relativePath: { eq: "aalto10.png" }) {
        childImageSharp {
          fixed(width:482, height:322) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aalto11: file(relativePath: { eq: "aalto11.png" }) {
        childImageSharp {
          fixed(width:483, height:322) {
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
        title={intl.formatMessage({ id: "aalto.title" })} 
      />

      <h1><FormattedMessage id="aalto.title"/></h1>
      <p><FormattedMessage id="aalto.intro.1"/></p>
      <p><FormattedMessage id="aalto.intro.2"/></p>
      <p><FormattedMessage id="aalto.intro.3"/></p>

      <Img fixed={data.aalto1.childImageSharp.fixed}/>
      <Img fixed={data.aalto2.childImageSharp.fixed}/>
      <Img fixed={data.aalto3.childImageSharp.fixed}/>
      <Img fixed={data.aalto4.childImageSharp.fixed}/>
      <Img fixed={data.aalto5.childImageSharp.fixed}/>
      <Img fixed={data.aalto6.childImageSharp.fixed}/>
      <Img fixed={data.aalto7.childImageSharp.fixed}/>
      <Img fixed={data.aalto8.childImageSharp.fixed}/>
      <Img fixed={data.aalto9.childImageSharp.fixed}/>
      <Img fixed={data.aalto10.childImageSharp.fixed}/>
      <Img fixed={data.aalto11.childImageSharp.fixed}/>

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
