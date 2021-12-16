import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../button"

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-box">
          <div className="welcome-box__left">
            <h2>
              Поможем Вам подобрать<span> качественные материалы</span> для
              покрытия Вашего тротуара от производителей по самой
              <span> лучшей цене</span>
            </h2>
            <div className="welcome-box__info">
              Матриалы разных видов: плитка, брусчатка, бордюры, песок, крошка,
              щебень и другие
            </div>
            <div className="welcome-box__pins">
              <div className="welcome-box__pin">
                <StaticImage src="../../images/icons/like-ellipse.png" alt="" />
                <p>Расширенная гарантия от производителя</p>
              </div>
              <div className="welcome-box__pin">
                <StaticImage src="../../images/icons/cost-ellipse.png" alt="" />
                <p>Нашли дешевле? Снизим стоимость</p>
              </div>
              <div className="welcome-box__pin">
                <StaticImage src="../../images/icons/star-ellipse.png" alt="" />
                <p>Только качественная продукция и материалы</p>
              </div>
            </div>
            <Button>Рассчитать стоимость материалов</Button>
          </div>
          <div className="welcome-box__right">
            <StaticImage src="../../images/home/home-plitka.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
