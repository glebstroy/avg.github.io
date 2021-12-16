import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "../styles/footer.css"
import "../styles/components.css"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer__info">
        <div className="footer__info__logo">
          <StaticImage src="../images/logo.png" alt="avg плитка" />
          <p style={{ color: "#212121" }}>
            Укладка тротуарной плитки по Москве и Московской области
          </p>
        </div>
        <div className="footer__info__about">
          <h4>О нас</h4>
          <ul>
            <li>
              <Link to="/portfolio">Наши работы</Link>
            </li>
            <li>
              <Link to="/about">Производство</Link>
            </li>
            <li>
              <Link to="/">Отзывы</Link>
            </li>
          </ul>
        </div>
        <div className="footer__info__services">
          <h4>Услуги</h4>
          <ul>
            <li>
              <Link to="/laying">Монтаж продукции</Link>
            </li>
            <li>
              <Link to="/improvement">Благоустройство территорий</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка материалов</Link>
            </li>
          </ul>
        </div>
        <div className="footer__info__contacts">
          <h4>Контакты</h4>
          <ul>
            <li>
              <StaticImage
                src="../images/icons/phone-min.png"
                alt="ag-phone-number"
                width={22}
              />
              <a href="tel:+7(915) 344-02-41">+7 (915) 344-02-41</a>
            </li>
            <li>
              <StaticImage
                src="../images/icons/clock-min.png"
                alt="avg-open-time"
                width={22}
              />
              <p>09:00 - 20:00</p>
            </li>
            <li>
              <StaticImage
                src="../images/icons/address-min.png"
                alt="avg-address"
                width={28}
              />
              <p style={{ marginLeft: "12px" }}>
                Московская область, Солненагорский район, д.Соколово
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} <Link to="/">AVG Plitka</Link> powered by
        {` `}
        <a href="https://www.bigway8.com" target="_blank" rel="noreferrer">
          Bigway Studio
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
