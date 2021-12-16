import React from "react"
import { Button } from "../button"

function ServicesSection() {
  return (
    <section className="home__services">
      <div className="home__services-box flex">
        <div className="container">
          <div className="home__services__info">
            <h3>Наши услуги</h3>
            <span>
              Для наших клиентов мы предоставляем широкий спектр услуг, таких
              как:
              <ul>
                <li>укладка тротуарной плитки;</li>
                <li>укладка бордюра;</li>
                <li>доставка сыпучих материалов</li>
                <li>другие.</li>
              </ul>
            </span>
            <Button type="link" to="/services">
              Подробнее об услугах
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
