import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"

function ServicesPage() {
  return (
    <Layout>
      <Seo title="Услуги" />
      <div className="services-image"></div>
      <Services />
    </Layout>
  )
}

export default ServicesPage
