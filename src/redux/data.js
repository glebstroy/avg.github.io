import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useDispatch } from "react-redux"
import { setData } from "../redux/actions/products"

const ProductsData = () => {
  const query = useStaticQuery(graphql`
    query DataQ {
      allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
        nodes {
          name
          relativePath
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
      allMdx {
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
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 240
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
    }
  `)
  const dispatch = useDispatch()
  dispatch(setData(query))
  return <></>
}

export default ProductsData
