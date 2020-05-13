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
          fixed(width:400, height:829) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso2: file(relativePath: { eq: "liso2.png" }) {
        childImageSharp {
          fixed(width:500, height:333) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso3: file(relativePath: { eq: "liso3.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso4: file(relativePath: { eq: "liso4.png" }) {
        childImageSharp {
          fixed(width:400, height:537) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso5: file(relativePath: { eq: "liso5.png" }) {
        childImageSharp {
          fixed(width:400, height:363) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso6: file(relativePath: { eq: "liso6.png" }) {
        childImageSharp {
          fixed(width:400, height:363) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso7: file(relativePath: { eq: "liso7.png" }) {
        childImageSharp {
          fixed(width:600, height:317) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso8: file(relativePath: { eq: "liso8.png" }) {
        childImageSharp {
          fixed(width:600, height:317) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso9: file(relativePath: { eq: "liso9.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      liso10: file(relativePath: { eq: "liso10.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
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
        title={intl.formatMessage({ id: "liso.title" })} 
      />

      <h1><FormattedMessage id="liso.title"/></h1>
      <p><FormattedMessage id="liso.intro.1"/></p>
      <p><FormattedMessage id="liso.intro.2"/></p>
      <p><FormattedMessage id="liso.intro.3"/></p>

      <Img fixed={data.liso7.childImageSharp.fixed}/>
      <Img fixed={data.liso8.childImageSharp.fixed}/>
      <Img fixed={data.liso9.childImageSharp.fixed}/>
      <Img fixed={data.liso10.childImageSharp.fixed}/>

      <p><FormattedMessage id="liso.intro.4"/></p>

      <Img fixed={data.liso5.childImageSharp.fixed}/>
      <Img fixed={data.liso6.childImageSharp.fixed}/>

      <p><FormattedMessage id="liso.intro.5"/></p>

      <Img fixed={data.liso1.childImageSharp.fixed}/>
      <Img fixed={data.liso2.childImageSharp.fixed}/>
      <Img fixed={data.liso3.childImageSharp.fixed}/>
      <Img fixed={data.liso4.childImageSharp.fixed}/>
      
    </Layout>
  )
}

export default F1Page;
