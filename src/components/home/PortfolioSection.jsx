import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../button"

function PortfolioSection() {
  return (
    <section className="home__portpholio-section">
      <div className="home__portfolio-box flex">
        <div className="container">
          <div className="home__portfolio__info">
            <h3>Выполняем работы любой сложности</h3>
            <span>
              Выполненые работы с различными узорами и уровнем сложности вы
              можете посмотреть в нашем портфолио
            </span>
            <Button type="link" to="/portfolio">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home__portfolio-galery">
          <StaticImage
            src="https://i.pinimg.com/originals/3e/4c/10/3e4c1058798b8199f159bc1725b603db.jpg"
            alt=""
            width={380}
            height={380}
            objectFit="contain"
          />
          <StaticImage
            src="https://i.pinimg.com/originals/ac/0f/53/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg"
            alt=""
            width={380}
            height={380}
            objectFit="contain"
          />
          <StaticImage
            src="https://i.pinimg.com/originals/e3/a6/9a/e3a69ac57820e59f61fa935bbbcaeb15.jpg"
            alt=""
            width={380}
            height={380}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
