import { Link } from "gatsby"
import React from "react"

function BreadcrumbsLink({ children, to, onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  )
}

export default BreadcrumbsLink
