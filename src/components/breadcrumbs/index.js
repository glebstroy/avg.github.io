import React from "react"

import { useDispatch } from "react-redux"
import BreadcrumbsLink from "./breadcrumbsLink"
import { setCategory } from "../../redux/actions/filter"

function Breadcrumbs({ category, sub, title }) {
  const dispatch = useDispatch()
  const getCategoryName = () => dispatch(setCategory(category.alt))
  const getSubName = () => dispatch(setCategory(sub.alt))
  return (
    <div className="breadcrumbs">
      <BreadcrumbsLink to={"/products"} onClick={getCategoryName}>
        {category.name}
      </BreadcrumbsLink>
      {" > "}
      <BreadcrumbsLink to={"/products"} onClick={getSubName}>
        {sub.name}
      </BreadcrumbsLink>
      {" > "} {title}
    </div>
  )
}

export default Breadcrumbs
