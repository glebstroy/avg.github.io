import React from "react"
import { useDispatch } from "react-redux"
import { setCategory } from "../redux/actions/filter"

import "../styles/menu.css"
import Dimension from "./Dimension"

const sideBar = [
  { category: "Тротуарная плитка", sub: ["Вибропрессованная", "Вибролитая"] },
  { category: "Водостоки", sub: [] },
  { category: "Ступени для крыльца", sub: [] },
  { category: "Фасадная плитка", sub: [] },
  { category: "Бордюры", sub: ["Садовый бордюр", "Дорожные бордюры"] },
  {
    category: "Сыпучие материалы",
    sub: ["Песок", "Щебень", "Цемент в мешках", "Сухие смеси"],
  },
]

function SideBar(props) {
  const [actualTitle, setActualTitle] = React.useState("Все")
  const [toggle, setToggle] = React.useState(true)
  const sidebarRef = React.useRef()
  const dimension = Dimension()
  const data = Object.values(props)
  const dispatch = useDispatch()
  const resetProducts = e =>
    dispatch(setCategory("products")) && onClickSidebarCategory(e)
  const setProduction = e => {
    const filtredProducts = data
      .filter(
        product =>
          product.frontmatter.category.name === e.target.innerText ||
          product.frontmatter.sub.name === e.target.innerText
      )
      .map(product => {
        switch (e.target.innerText) {
          case product.frontmatter.category.name:
            return product.frontmatter.category.alt
          case product.frontmatter.sub.name:
            return product.frontmatter.sub.alt
          default:
            return product.frontmatter.type
        }
      })
      .slice(-1)
    dispatch(setCategory(filtredProducts[0]))
    onClickSidebarCategory(e)
  }

  const onClickSidebarCategory = e => {
    if (dimension < 920) {
      setToggle(toggle => !toggle)
      sidebarRef.current.style.display = toggle ? "block" : ""
      setActualTitle(e.target.innerText)
    }
  }
  return (
    <div className="sidebar">
      {dimension < 920 && (
        <div className="sidebar__title">
          <h5>
            <button
              className="sidebar__button"
              onClick={onClickSidebarCategory}
            >
              {actualTitle}
            </button>
          </h5>
        </div>
      )}
      <ul className="sidebar__ul" ref={sidebarRef}>
        <li>
          <h5>
            <button className="sidebar__button" onClick={resetProducts}>
              Все
            </button>
          </h5>
        </li>
        {sideBar.map((item, index) => (
          <li key={index}>
            <h5>
              <button className="sidebar__button" onClick={setProduction}>
                {item.category}
              </button>
            </h5>
            {item.sub !== [] && (
              <ul>
                {item.sub.map((subcategory, i) => (
                  <li key={i}>
                    <h6>
                      <button
                        className="sidebar__button"
                        onClick={setProduction}
                      >
                        {subcategory}
                      </button>
                    </h6>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
