import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FestivalsPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      levis1: file(relativePath: { eq: "levis1.png" }) {
        childImageSharp {
          fixed(width:500, height:282) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      levis2: file(relativePath: { eq: "levis2.png" }) {
        childImageSharp {
          fixed(width:500, height:282) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      levis3: file(relativePath: { eq: "levis3.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      doritos1: file(relativePath: { eq: "doritos1.png" }) {
        childImageSharp {
          fixed(width:500, height:315) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      doritos2: file(relativePath: { eq: "doritos2.png" }) {
        childImageSharp {
          fixed(width:500, height:295) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      doritos3: file(relativePath: { eq: "doritos3.png" }) {
        childImageSharp {
          fixed(width:500, height:282) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      doritos4: file(relativePath: { eq: "doritos4.png" }) {
        childImageSharp {
          fixed(width:500, height:281) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barcel1: file(relativePath: { eq: "barcel1.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barcel2: file(relativePath: { eq: "barcel2.png" }) {
        childImageSharp {
          fixed(width:500, height:334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barcel3: file(relativePath: { eq: "barcel3.png" }) {
        childImageSharp {
          fixed(width:500, height:400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barcel4: file(relativePath: { eq: "barcel4.png" }) {
        childImageSharp {
          fixed(width:500, height:404) {
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
        title={intl.formatMessage({ id: "festivals.title" })} 
      />

      <h1><FormattedMessage id="festivals.title"/></h1>
      <p><FormattedMessage id="festivals.intro.1"/></p>
      <p><FormattedMessage id="festivals.intro.1"/></p>

      <h3><FormattedMessage id="festivals.section1.title"/></h3>

      <Img fixed={data.levis1.childImageSharp.fixed}/>
      <Img fixed={data.levis2.childImageSharp.fixed}/>
      <Img fixed={data.levis3.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section1.1"/></p>

      <h3><FormattedMessage id="festivals.section2.title"/></h3>

      <Img fixed={data.doritos1.childImageSharp.fixed}/>
      <Img fixed={data.doritos2.childImageSharp.fixed}/>
      <Img fixed={data.doritos3.childImageSharp.fixed}/>
      <Img fixed={data.doritos4.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section2.1"/></p>
      <p><FormattedMessage id="festivals.section2.2"/></p>

      <h3><FormattedMessage id="festivals.section3.title"/></h3>

      <Img fixed={data.barcel1.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section3.1"/></p>
      <p><FormattedMessage id="festivals.section3.2"/></p>

      <h3><FormattedMessage id="festivals.section4.title"/></h3>

      <Img fixed={data.barcel2.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section4.1"/></p>

      <h3><FormattedMessage id="festivals.section5.title"/></h3>

      <Img fixed={data.barcel3.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section5.1"/></p>
      <p><FormattedMessage id="festivals.section5.2"/></p>

      <h3><FormattedMessage id="festivals.section6.title"/></h3>

      <Img fixed={data.barcel4.childImageSharp.fixed}/>

      <p><FormattedMessage id="festivals.section6.1"/></p>

    </Layout>
  )
}

export default FestivalsPage;
