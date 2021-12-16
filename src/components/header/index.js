import React from "react"
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"
import Dimension from "../Dimension"

function Index() {
  const dimension = Dimension()
  return (
    <header>{dimension < 920 ? <HeaderMobile /> : <HeaderDesktop />}</header>
  )
}

export default Index
