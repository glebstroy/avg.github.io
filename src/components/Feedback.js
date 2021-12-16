/* eslint-disable */
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFeedback } from "../redux/actions/button"

function Feedback() {
  const feedback = useSelector(({ button }) => button.isReady)
  const dispatch = useDispatch()

  const TEL_REGEXP =
    "^(+7|7|8)?[s-]?(?[489][0-9]{2})?[s-]?[0-9]{3}[s-]?[0-9]{2}[s-]?[0-9]{2}$"

  const onCloseModal = () => {
    dispatch(setFeedback(false))
  }
  return (
    feedback && (
      <div id="feedback" className="feedback">
        <div className="feedback__modal">
          <div className="feedback__modal__info">
            <h2>Заказать звонок</h2>
            <p>
              Заполните форму обратного звонка и мы свяжемся с вами как можно
              скорее.
            </p>
            <p>Или свяжитесь с нами по телефону самостоятельно:</p>
            <div className="feedback__modal__info__phone">
              <StaticImage
                src="../images/icons/phone-min-white.png"
                alt="ag-phone-number"
              />
              <a href="tel:+7 (915) 344-02-41">+7 (915) 344-02-41</a>
            </div>
          </div>
          <div className="feedback__modal__form">
            <button
              onClick={onCloseModal}
              className="feedback__modal__close__button"
            >
              <div
                style={{
                  transform: "rotate(45deg) translateY(1px)",
                }}
              ></div>
              <div
                style={{
                  transform: "rotate(-45deg) translateY(-1px)",
                }}
              ></div>
            </button>
            <form method="post" action="#">
              <input
                type="text"
                name="Имя"
                id="name"
                placeholder="Имя"
                pattern="^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$"
                required
              />
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
                pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
              />
              <input
                type="tel"
                name="Телефон"
                id="tel"
                pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                placeholder="+7 (123) 456-78-90"
                required
              />
              <input
                type="submit"
                formTarget="_blank"
                value="Заказать"
                style={{ cursor: "pointer" }}
              />
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default Feedback

/* 
 <button onClick={closeModal}>Закрыть</button>
          <h2>Заказать звонок</h2>
          

*/
