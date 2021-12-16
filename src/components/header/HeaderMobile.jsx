import React from "react"
import Navigation from "../navigation"
import { Button } from "../button"
import Dimension from "../Dimension"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { setBurger } from "../../redux/actions/button"
import "../../styles/header.scss"

function HeaderMobile() {
  const dimension = Dimension()
  const dispatch = useDispatch()
  const onBugerClose = () => dispatch(setBurger(false))

  return (
    <div className="header__mobile">
      <div style={{ padding: "0 20px", alignItems: "center" }}>
        {dimension > 540 ? (
          <Link to="/" onClick={onBugerClose}>
            <StaticImage
              src="../../images/logo.png"
              alt=""
              style={{ margin: "10px 0" }}
            />
          </Link>
        ) : (
          <Link to="/" onClick={onBugerClose}>
            <StaticImage src="../../images/logo-alt.png" alt="" />
          </Link>
        )}
        <Button type="burger" />
      </div>
      <Navigation />
    </div>
  )
}

export default HeaderMobile
