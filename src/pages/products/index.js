import * as React from "react"
import { useSelector } from "react-redux"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SideBar from "../../components/SideBar"
import { ProductCard, ProductEmpty } from "../../components/product"

import "../../styles/products.css"

const ProductsPage = () => {
  const products = useSelector(({ products }) => products.data.allMdx.nodes)
  console.log(products)
  const sort = useSelector(({ filter }) => filter.category)
  const productsFilter = products.filter(
    product =>
      product.frontmatter.type === sort ||
      product.frontmatter.category.alt === sort ||
      product.frontmatter.sub.alt === sort
  )
  return (
    <>
      <Layout>
        <Seo title="Продукция" />
        <div className="products-image"></div>
        <div className="container m-a" style={{ marginTop: 60 }}>
          <div className="products-box">
            <SideBar {...products} />
            <div className="products">
              {sort ? (
                productsFilter.map(product => {
                  return (
                    <ProductCard
                      key={product.id}
                      {...product.frontmatter}
                      slug={product.slug}
                    />
                  )
                })
              ) : (
                <ProductEmpty />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ProductsPage
