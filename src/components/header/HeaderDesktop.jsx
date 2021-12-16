import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../button/Button"
import Navigation from "../navigation"
import HeaderInformation from "./HeaderInformation"

function HeaderDesktop() {
  return (
    <div className="header__desktop">
      <HeaderInformation />
      <div className="container">
        <div className="header__desktop__nav">
          <Link to="/">
            <StaticImage src="../../images/logo.png" alt="" />
          </Link>
          <div style={{ display: "flex" }}>
            <Navigation />
            <Button type="feedback">Заказать звонок</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDesktop
