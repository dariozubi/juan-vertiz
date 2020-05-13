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
          fixed(width:400, height:311) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep2: file(relativePath: { eq: "lep2.png" }) {
        childImageSharp {
          fixed(width:400, height:331) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep3: file(relativePath: { eq: "lep3.png" }) {
        childImageSharp {
          fixed(width:400, height:382) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep4: file(relativePath: { eq: "lep4.png" }) {
        childImageSharp {
          fixed(width:400, height:367) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep5: file(relativePath: { eq: "lep5.png" }) {
        childImageSharp {
          fixed(width:400, height:383) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep6: file(relativePath: { eq: "lep6.png" }) {
        childImageSharp {
          fixed(width:400, height:376) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep7: file(relativePath: { eq: "lep7.png" }) {
        childImageSharp {
          fixed(width:400, height:419) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep8: file(relativePath: { eq: "lep8.png" }) {
        childImageSharp {
          fixed(width:400, height:373) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep9: file(relativePath: { eq: "lep9.png" }) {
        childImageSharp {
          fixed(width:400, height:326) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep10: file(relativePath: { eq: "lep10.png" }) {
        childImageSharp {
          fixed(width:400, height:266) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep11: file(relativePath: { eq: "lep11.png" }) {
        childImageSharp {
          fixed(width:400, height:337) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lep12: file(relativePath: { eq: "lep12.png" }) {
        childImageSharp {
          fixed(width:400, height:340) {
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
        title={intl.formatMessage({ id: "lep.title" })} 
      />

      <h1><FormattedMessage id="lep.title"/></h1>
      <p><FormattedMessage id="lep.intro.1"/></p>
      <p><FormattedMessage id="lep.intro.2"/></p>

      <h3><FormattedMessage id="lep.section1.title"/></h3>
      <p><FormattedMessage id="lep.section1.1"/></p>

      <Img fixed={data.lep10.childImageSharp.fixed}/>
      <Img fixed={data.lep11.childImageSharp.fixed}/>
      <Img fixed={data.lep12.childImageSharp.fixed}/>

      <p><FormattedMessage id="lep.section1.2"/></p>

      <Img fixed={data.lep7.childImageSharp.fixed}/>
      <Img fixed={data.lep8.childImageSharp.fixed}/>
      <Img fixed={data.lep9.childImageSharp.fixed}/>

      <p><FormattedMessage id="lep.section1.3"/></p>

      <Img fixed={data.lep4.childImageSharp.fixed}/>
      <Img fixed={data.lep5.childImageSharp.fixed}/>
      <Img fixed={data.lep6.childImageSharp.fixed}/>

      <h3><FormattedMessage id="lep.section2.title"/></h3>
      <p><FormattedMessage id="lep.section2.1"/></p>

      <Img fixed={data.lep1.childImageSharp.fixed}/>
      <Img fixed={data.lep2.childImageSharp.fixed}/>
      <Img fixed={data.lep3.childImageSharp.fixed}/>

    </Layout>
  )
}

export default LEPPage;
