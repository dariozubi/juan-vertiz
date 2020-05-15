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
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      levis2: file(relativePath: { eq: "levis2.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      levis3: file(relativePath: { eq: "levis3.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doritos1: file(relativePath: { eq: "doritos1.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doritos2: file(relativePath: { eq: "doritos2.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doritos3: file(relativePath: { eq: "doritos3.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doritos4: file(relativePath: { eq: "doritos4.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barcel1: file(relativePath: { eq: "barcel1.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barcel2: file(relativePath: { eq: "barcel2.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barcel3: file(relativePath: { eq: "barcel3.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barcel4: file(relativePath: { eq: "barcel4.png" }) {
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
        title={intl.formatMessage({ id: "festivals.title" })} 
      />

      <h1><FormattedMessage id="festivals.title"/></h1>
      <p><FormattedMessage id="festivals.intro.1"/></p>
      <p><FormattedMessage id="festivals.intro.1"/></p>

      <h3><FormattedMessage id="festivals.section1.title"/></h3>

      <div className="row">
        <div className="column">
          <Img fluid={data.levis1.childImageSharp.fluid}/>
          <Img fluid={data.levis2.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.levis3.childImageSharp.fluid}/>
        </div>
      </div>

      <p><FormattedMessage id="festivals.section1.1"/></p>

      <h3><FormattedMessage id="festivals.section2.title"/></h3>

      <div className="row">
        <div className="column">
          <Img fluid={data.doritos1.childImageSharp.fluid}/>
          <Img fluid={data.doritos2.childImageSharp.fluid}/>
        </div>
        <div className="column">
          <Img fluid={data.doritos3.childImageSharp.fluid}/>
          <Img fluid={data.doritos4.childImageSharp.fluid}/>
        </div>
      </div>

      <p><FormattedMessage id="festivals.section2.1"/></p>
      <p><FormattedMessage id="festivals.section2.2"/></p>

      <h3><FormattedMessage id="festivals.section3.title"/></h3>

      <div className="alone">
         <Img fluid={data.barcel1.childImageSharp.fluid}/>
      </div>

      <p><FormattedMessage id="festivals.section3.1"/></p>
      <p><FormattedMessage id="festivals.section3.2"/></p>

      <h3><FormattedMessage id="festivals.section4.title"/></h3>

      <div className="alone">
          <Img fluid={data.barcel2.childImageSharp.fluid}/>
      </div>

      <p><FormattedMessage id="festivals.section4.1"/></p>

      <h3><FormattedMessage id="festivals.section5.title"/></h3>

      <div className="alone">
          <Img fluid={data.barcel3.childImageSharp.fluid}/>
      </div>

      <p><FormattedMessage id="festivals.section5.1"/></p>
      <p><FormattedMessage id="festivals.section5.2"/></p>

      <h3><FormattedMessage id="festivals.section6.title"/></h3>

      <div className="alone">
        <Img fluid={data.barcel4.childImageSharp.fluid}/>
      </div>

      <p><FormattedMessage id="festivals.section6.1"/></p>

    </Layout>
  )
}

export default FestivalsPage;
