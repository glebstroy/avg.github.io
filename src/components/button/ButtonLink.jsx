import React from "react"

function ButtonLink({ children, type, value }) {
  return (
    <a className="button-link" href={`${type}://${value}`}>
      {children}
    </a>
  )
}

export default ButtonLink
