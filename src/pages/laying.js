import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Curb, LayingMain, SideBar, Slabs } from "../components/laying"
import "../components/laying/laying.css"
import { graphql } from "gatsby"

const layingBar = [
  {
    name: "Тротуарная плитка",
    title: "тротуарной плитки",
    link: "#slabs",
  },
  {
    name: "Бордюр",
    title: "бордюра",
    link: "#curb",
  },
]

function LayingContent({ hash, title }) {
  switch (hash) {
    case layingBar[0].link:
      return (
        <div className="laying__content">
          {title}
          <Slabs />
        </div>
      )
    case layingBar[1].link:
      return (
        <div className="laying__content">
          {title}
          <Curb />
        </div>
      )

    default:
      return (
        <div className="laying__content">
          {title}
          <LayingMain />
        </div>
      )
  }
}

function Laying({ location }) {
  const layingBarFiltredItem = layingBar.filter(
    item => item.link === location.hash
  )
  const layingTitle = <h1>Монтаж {layingBarFiltredItem[0]?.title ?? ""}</h1>
  return (
    <Layout>
      <Seo title="Монтаж" />
      <div className="services-image"></div>
      <section className="laying">
        <div className="container">
          <div style={{ display: "flex" }}>
            <SideBar layingBar={layingBar} hash={location.hash} />
            <LayingContent hash={location.hash} title={layingTitle} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Laying

export const query = graphql`
  query LocationQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
