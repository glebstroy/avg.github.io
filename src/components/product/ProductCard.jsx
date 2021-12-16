import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function ProductCard({ type, sub, title, size, price, image, slug }) {
  const img = getImage(image)
  return (
    <div className="product">
      <div>
        <GatsbyImage image={img} alt={title} className="product__image" />
        <h3 className="product__title"> {title}</h3>
        <h4 className="product__sub">{sub.name}</h4>
        <div className="product__info">
          <p className="product__info-size">Размер: {size}</p>
          <p className="product__info-price">
            {price.pref ? <span>{price.pref} </span> : ""}
            {price.cost}
            <span>{price.price_type}</span>
          </p>
        </div>
        <Link className="product__link button-link" to={`/${type}/${slug}`}>
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
