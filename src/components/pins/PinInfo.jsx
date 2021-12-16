import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./pins.scss"

function PinInfo({ type, content, map }) {
  switch (type) {
    case "phone":
      return (
        <div className="pin">
          <StaticImage src="../../images/icons/phone-min-white.png" alt="" />
          <a href={`tel:${content}`}>{content}</a>
        </div>
      )
    case "clock":
      return (
        <div className="pin">
          <StaticImage src="../../images/icons/clock-min-white.png" alt="" />
          <p>{content}</p>
        </div>
      )
    case "email":
      return (
        <div className="pin">
          <StaticImage src="../../images/icons/email-min-white.png" alt="" />
          <a href={`mailto:${content}`}>{content}</a>
        </div>
      )
    case "address":
      return (
        <div className="pin">
          <StaticImage src="../../images/icons/address-min-white.png" alt="" />
          {map ? (
            <a href={map} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )
    default:
      ;<div />
  }
}

export default PinInfo
