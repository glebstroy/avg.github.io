import { Link } from "gatsby"
import React from "react"

function SideBar({ layingBar, hash }) {
  const [sideBarToggle, setSideBarToggle] = React.useState(null)
  React.useEffect(() => {
    setSideBarToggle(document.querySelector(".laying__sidebar"))
  }, [])

  const onSideBarToggle = e => {
    sideBarToggle.classList.toggle("open")
    if (e.target !== "submit") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="laying__sidebar">
        <ul>
          {layingBar.map((bar, i) => {
            return (
              <li key={i} className={bar.link === hash ? "active" : ""}>
                <Link to={bar.link} onClick={onSideBarToggle}>
                  {bar.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="laying__sidebar__toggle">
        <button onClick={onSideBarToggle}>Click</button>
      </div>
    </>
  )
}

export default SideBar
