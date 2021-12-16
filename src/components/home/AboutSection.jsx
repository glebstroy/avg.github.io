import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../button"

function AboutSection() {
  return (
    <section className="home__about-section">
      <div className="home__about-box">
        <div className="home__about__info flex">
          <div className="home__about__info-box">
            <h3>О нас</h3>
            <p>
              Наша компания 7 лет занимается производством изделий из
              высококачественного бетона, а именно:
            </p>
            <ul>
              <li>вибропрессованной тротуарной плитки;</li>
              <li>вибролитьевой тротуарной плитки;</li>
              <li>бордюрных камней;</li>
              <li>и других видов бетонных изделий.</li>
            </ul>
            <p>
              Качество изделий подтверждается лабораторными испытаниями и
              соответствует всем ГОСТам.
            </p>
            <p>
              Многолетний опыт дает нам возможность, не боясь работы любой
              сложности, гарантировать качественный результат.
            </p>
            <Button type="link" to="/about">
              Узнать подробнее о производстве
            </Button>
          </div>
        </div>
        <StaticImage src="../../images/home/about-section-plitka.jpg" alt="" />
      </div>
    </section>
  )
}

export default AboutSection
