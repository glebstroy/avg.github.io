import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Portfolio from "../components/portfolio"

function PortfolioPage() {
  return (
    <Layout>
      <Seo title="Наши работы" />
      <div className="protfolio-image"></div>
      <Portfolio />
    </Layout>
  )
}

export default PortfolioPage
