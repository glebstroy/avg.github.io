import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  AboutSection,
  HowWeWorkSection,
  PortfolioSection,
  ProductsSection,
  ServicesSection,
  WelcomeSection,
} from "../components/home"

import "../styles/home.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Главная" />
      <WelcomeSection />
      <HowWeWorkSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <AboutSection />
    </Layout>
  )
}

export default IndexPage
