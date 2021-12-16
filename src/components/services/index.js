import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../button"
import "./services.scss"

function Services() {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services__info">
            <div>
              <h3>Монтаж</h3>
              <p>
                Качественный монтаж материалов - залог долгой эксплуатации. Наши
                опытные специалисты помогут Вам правильно подобрать и установить
                все необходимое, чтобы Вы могли долгие годы не беспокоиться об
                их состоянии.
              </p>
              <Button to="/laying" type="link">
                Узнать подробнее о монтаже
              </Button>
            </div>
            <div className="services__info__image">
              <StaticImage src="../../images/services/laying/main.png" alt="" />
            </div>
          </div>
          <div className="services__galery">
            <StaticImage src="../../images/services/laying/01.png" alt="" />
            <StaticImage src="../../images/services/laying/02.png" alt="" />
            <StaticImage src="../../images/services/laying/03.png" alt="" />
          </div>
        </div>
      </section>
      <section className="services" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <div className="services__info">
            <div>
              <h3>Благоустройство территорий</h3>
              <p>
                Наша компания выполняет комплекс работ по благоустройству
                коммерческих и частных территорий. Мы проводим полный комплекс
                работ от проектирования до создания благоустройства объекта,
                улучшая внешний вид, делая его удобным и безопасным.
              </p>
              <Button to="/improvement" type="link">
                Узнать подробнее о благоустройстве
              </Button>
            </div>
            <div className="services__info__image">
              <StaticImage
                src="../../images/services/improvement/main.png"
                alt=""
              />
            </div>
          </div>
          <div className="services__galery">
            <StaticImage
              src="../../images/services/improvement/01.png"
              alt=""
            />
            <StaticImage
              src="../../images/services/improvement/02.png"
              alt=""
            />
            <StaticImage
              src="../../images/services/improvement/03.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services__info">
            <div>
              <h3>Доставка материалов</h3>
              <p>
                Также мы можем дотавить для вас необходимые материалы по
                специально низким ценам. Более подробно ознакомиться с
                материалами, способами их доставки и рассчитать стоимость
                доставки Вы сможете на нашем сайте по ссылке ниже.
              </p>
              <Button to="/delivery" type="link">
                Узнать подробнее о доставке
              </Button>
            </div>
            <div className="services__info__image">
              <StaticImage
                src="../../images/services/delivery/main.png"
                alt=""
              />
            </div>
          </div>
          <div className="services__galery">
            <StaticImage src="../../images/services/delivery/01.png" alt="" />
            <StaticImage src="../../images/services/delivery/02.png" alt="" />
            <StaticImage src="../../images/services/delivery/03.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
