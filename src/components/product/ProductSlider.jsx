/* eslint-disable */
import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { ProductCard } from "."
import Dimension from "../Dimension"

function ProductSlider() {
  const dimension = Dimension()
  const products = useSelector(({ products }) => products.data.allMdx.nodes)
  const [tick, setTick] = useState(0)
  const [prodCardSize, setProdCardSize] = useState(310)
  const [numberOfProdOnPage, setNumberOfProdOnPage] = useState(1)
  const [current, setCurrent] = useState(null)
  const ref = useRef()

  React.useEffect(() => {
    const sliderTransform = ref.current
    setCurrent(sliderTransform)

    setInterval(() => {
      setTick(tick => tick + 1)
    }, 15000)
  }, [])

  React.useMemo(() => {
    if (dimension > 1240) {
      setNumberOfProdOnPage(1240 / 310)
    }
    if (dimension < 1240) {
      setNumberOfProdOnPage(dimension / prodCardSize)
    }
    if (numberOfProdOnPage - Math.round(numberOfProdOnPage) < 0) {
      setProdCardSize(310)
    }
    if (numberOfProdOnPage - Math.round(numberOfProdOnPage) > 0) {
      setProdCardSize(dimension / Math.round(numberOfProdOnPage))
    }
  }, [dimension, numberOfProdOnPage, prodCardSize])

  React.useMemo(() => {
    if (
      current !== null &&
      tick <= current.children.length / Math.round(numberOfProdOnPage)
    ) {
      current.style.transform = `translateX(-${
        prodCardSize * tick * Math.round(numberOfProdOnPage)
      }px)`
    } else {
      setTick(0)
    }
  }, [])

  return (
    <div className="products-slider">
      <div className="slider-box" ref={ref}>
        {products &&
          products.map(product => {
            return (
              <ProductCard
                key={product.id}
                {...product.frontmatter}
                slug={product.slug}
              />
            )
          })}
      </div>
    </div>
  )
}

export default ProductSlider
