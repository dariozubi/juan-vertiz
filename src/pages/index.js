import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Works from "../components/works"

const IndexPage = () => {
  const intl = useIntl();
  return(
    <Layout>
      <SEO 
        lang={intl.locale}
        title={intl.formatMessage({ id: "main.title" })} 
      />
      <h3 style={{ textAlign: 'center', margin: '70px 0 0'}}><FormattedMessage id="main.intro.1"/></h3>
      <h3 style={{ textAlign: 'center', margin: '0'}}><FormattedMessage id="main.intro.2"/></h3>
      <h3 style={{ textAlign: 'center', margin: '0 0 100px'}}><FormattedMessage id="main.intro.3"/></h3>
      <Works/>
    </Layout>
  )
}

export default IndexPage;