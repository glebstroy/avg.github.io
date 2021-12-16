/* exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            type
            category {
              alt
              name
            }
            sub {
              alt
              name
            }
            url
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const { type, category, url } = node.frontmatter
    actions.createPage({
      path: `/${type}/${category.alt}/${url}`,
      component: require.resolve("./src/templates/ProductPage.jsx"),
      context: { url },
      defer: true,
    })
  })
}
 */
