import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs"
import { Button } from "../../components/button"

import "../../styles/product.css"

const ProductPage = ({ data }) => {
  const { body } = data.mdx
  const { title, size, price, image, galery, description, keywords } =
    data.allMdx.nodes[0].frontmatter
  const [actualImg, setActuaImg] = React.useState(getImage(image))
  const ref = React.useRef(null)
  const onClickGaleryImg = e =>
    (ref.current = e.target.dataset.imageValue) &&
    setActuaImg(
      getImage(galery.filter(img => img?.childImageSharp.id === ref.current)[0])
    )
  return (
    <Layout>
      <Seo title={title} description={description} keywords={keywords} />
      <div className="products-image"></div>
      <div className="container">
        <Breadcrumbs {...data.allMdx.nodes[0].frontmatter} />
        <div className="product-container">
          {galery && (
            <div className="product__galery">
              {galery.map((galeryImage, index) => {
                const galeryImg = getImage(galeryImage)
                return (
                  galeryImage !== null && (
                    <div
                      key={`${galeryImage.childImageSharp.id}-${index}`}
                      ref={ref}
                      className={`product__galery-item`}
                    >
                      <GatsbyImage
                        image={galeryImg}
                        alt={title}
                        onClick={onClickGaleryImg}
                        data-image-value={galeryImage.childImageSharp.id}
                      />
                    </div>
                  )
                )
              })}
            </div>
          )}
          <div className="product__image">
            <GatsbyImage image={actualImg} alt={title} />
          </div>
          <div className="product__info">
            <h1>{title}</h1>
            <p className="product__info-size">Размер: {size}</p>
            <p className="product__info-price">
              Серый: {price.cost}
              <span>{price.price_type}</span>
            </p>
            {price.cost_color && (
              <p className="product__info-price">
                Цветной: {price.pref && <span>{price.pref} </span>}
                {price.cost_color}
                <span>{price.price_type}</span>
              </p>
            )}
            <Button type="tel" value="+79653143013">
              Заказать
            </Button>
          </div>
        </div>
        <div className="product__additional-info">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
  query ProductMDX($slug: String) {
    allMdx(filter: { slug: { eq: $slug } }) {
      nodes {
        body
        slug
        id
        frontmatter {
          title
          size
          url
          category {
            name
            alt
          }
          description
          sub {
            name
            alt
          }
          price {
            price_type
            pref
            cost_color
            cost
          }
          galery {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
              )
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
              )
            }
          }
          keywords
          type
        }
      }
    }
    mdx {
      body
    }
  }
`
