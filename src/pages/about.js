import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../components/button"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/about.css"

function About() {
  return (
    <Layout>
      <Seo title="О нас" />
      <div className="about-image"></div>
      <section className="about">
        <div className="container">
          <h1>Производство</h1>
          <div className="about__info">
            <p>
              Наша компания 7 лет занимается производством изделий из
              высококачественного бетона, а именно:
            </p>
            <ul>
              <li>вибропрессованной тротуарной плитки;</li>
              <li>вибролитьевой тротуарной плитки; </li>
              <li>бордюрных камней;</li>
              <li>и других видов бетонных изделий.</li>
            </ul>
            <p>
              Качество изделий подтверждается лабораторными испытаниями и
              соответствует всем ГОСТам. Многолетний опыт дает нам возможность,
              не боясь работы любой сложности, гарантировать качественный
              результат.
            </p>
          </div>
          <div className="about__categories">
            <Link to="/" /**vibropress */>
              <StaticImage src="../images/about/vibropress.png" alt="" />
              <div className="about__categories__title">Вибропрессованная</div>
            </Link>
            <Link to="/" /**vibrolit */>
              <StaticImage src="../images/about/vibrolit.png" alt="" />
              <div className="about__categories__title">Вибролитая</div>
            </Link>
            <Link to="/" /* bordur-dorozh*/>
              <StaticImage src="../images/about/bordur-dorozh.png" alt="" />
              <div className="about__categories__title">Бордюр дорожный</div>
            </Link>
            <Link to="/" /*bordur-sad*/>
              <StaticImage src="../images/about/bordur-sad.png" alt="" />
              <div className="about__categories__title">Бордюр садовый</div>
            </Link>
            <Link to="/" /* vodostok */>
              <StaticImage src="../images/about/vodostok.png" alt="" />
              <div className="about__categories__title">
                Водосток тротуарный
              </div>
            </Link>
            <Link to="/material">
              <StaticImage src="../images/about/material.png" alt="" />
              <div className="about__categories__title">Сыпучие материалы</div>
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button type="link" to="/products">
              К продукции
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
