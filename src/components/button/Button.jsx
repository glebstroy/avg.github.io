import { Link } from "gatsby"
import React from "react"
import { useDispatch } from "react-redux"
import { setBurger, setFeedback } from "../../redux/actions/button"

function Button({ children, reverse, type, to }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useDispatch()
  const onFeedbackClick = () => {
    dispatch(setFeedback(true))
  }
  const onBurgerToggleClick = () => {
    setIsOpen(state => !state)
    dispatch(setBurger(!isOpen))
  }
  switch (type) {
    case "feedback":
      return (
        <div className="button-box ">
          <button
            className={`button ${reverse ? "button-reverse" : ""}`}
            onClick={onFeedbackClick}
          >
            {children}
          </button>
        </div>
      )
    case "burger":
      return (
        <button
          className={`burger ${isOpen ? "burger__open" : ""}`}
          onClick={onBurgerToggleClick}
        >
          <div className="burger_line burger_first"></div>
          <div className="burger_line burger_second"></div>
          <div className="burger_line burger_third"></div>
        </button>
      )
    case "link":
      return (
        <div className="button-box ">
          <Link className={`button ${reverse ? "button-reverse" : ""}`} to={to}>
            {children}
          </Link>
        </div>
      )
    default:
      return (
        <div className="button-box ">
          <a className={`button ${reverse ? "button-reverse" : ""}`} href={`/`}>
            {children}
          </a>
        </div>
      )
  }
}

export default Button
