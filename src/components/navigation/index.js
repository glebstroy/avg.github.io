import { Link } from "gatsby"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setBurger } from "../../redux/actions/button"
import Dimension from "../Dimension"

const nav = [
  { name: "Главная", link: "/" },
  { name: "Продукция", link: "/products" },
  { name: "Услуги", link: "/services" },
  { name: "Наши работы", link: "/portfolio" },
  { name: "О нас", link: "/about" },
]

function Navigation() {
  const dimension = Dimension()
  const dispatch = useDispatch()
  const burgerIsOpen = useSelector(({ button }) => button.isOpen)
  const onBugerClose = () => dispatch(setBurger(false))
  return (
    <nav
      style={
        dimension < 920
          ? burgerIsOpen
            ? { display: "block" }
            : { display: "none" }
          : { display: "block" }
      }
    >
      <ul>
        {nav.map((item, i) => (
          <Link to={item.link} onClick={onBugerClose} key={item.name + i}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
