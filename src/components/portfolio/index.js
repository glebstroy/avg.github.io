import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFeedback } from "../../redux/actions/button"

import "./portfolio.scss"

function Portfolio() {
  const galery = useSelector(({ products }) => products.data.allFile.nodes)
  const dispatch = useDispatch()
  const onFeedbackClick = () => {
    dispatch(setFeedback(true))
  }
  return (
    <>
      <div className="container">
        <div className="protfolio">
          <h3>Примеры выполненых работ</h3>
          <p style={{ color: "#666666" }}>
            Если Вас заинтересовала одна из этих работ, мы можем с легкостью
            сделать ее на Вашей территории.{" "}
            <a
              href="tel:+79153440241"
              style={{
                textDecoration: "none",
                color: "#4293DD",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Позвоните нам
            </a>{" "}
            или
            <button
              style={{
                backgroundColor: "transparent",
                color: "#4293DD",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
              onClick={onFeedbackClick}
            >
              закажите звонок,
            </button>
            чтобы мы могли связаться с Вами в удобное время
          </p>
        </div>
        <div className="portfolio-galery">
          {galery &&
            galery.map((item, i) => {
              const image = getImage(item)
              return (
                <div className="" key={item.id}>
                  <GatsbyImage image={image} alt="" />
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Portfolio
/* "../../images/portfolio/" */
