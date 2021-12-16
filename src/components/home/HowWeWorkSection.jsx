import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function HowWeWorkSection() {
  return (
    <section className="hww-section">
      <div className="container">
        <h3>Как мы работаем</h3>
        <div className="hww__work-cards">
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/waterpass.png" alt="" />
            </div>
            <h4>Замеры</h4>
            <p>
              В течение одного рабочего дня наши специалисты осуществят замер
              Ваших территорий.
            </p>
          </div>
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/grunt.png" alt="" />
            </div>
            <h4>Подготовка грунта</h4>
            <p>
              Для подготовки основания используются только экологически чистые и
              высококачественные материалы.
            </p>
          </div>
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/bricks.png" alt="" />
            </div>
            <h4>Укладка</h4>
            <p>
              Укладка тротуарного покрытия любой сложности осуществляется
              качественно и в оговоренные сроки
            </p>
          </div>
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/ramming.png" alt="" />
            </div>
            <h4>Трамбовка</h4>
            <p>
              Для выравнивания и утрамбовки грунта используется
              высококачественная виброплита.
            </p>
          </div>
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/fill-up-bucket.png" alt="" />
            </div>
            <h4>Засыпка</h4>
            <p>
              На завершающем этапе на уложенной плитке засыпается слой
              высококачественного, просеянного песка.
            </p>
          </div>
          <div className="hww__work-card flex">
            <div>
              <StaticImage src="../../images/icons/card.png" alt="" />
            </div>
            <h4>Оплата</h4>
            <p>Платежи принимаются как в наличном, так и безналичном виде.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
