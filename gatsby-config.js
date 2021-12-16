module.exports = {
  siteMetadata: {
    title: `Укладка тротуарной плитки по Москве и Московской области`,
    description: `Укладка тротуарной плитки и бордюра от производителя в Москве и Московской области под ключ с гарантией и по ГОСТ. Доставка сыпучих материалов`,
    keywords: `тротуарная плитка, укладка тротуарной плитки, брусчатка, укладка брусчатки, бордюр, установка бордюра, укладка тротуарной плитки Солнечногорский район, укладка тротуарной плитки Истринский район, укладка тротуарной плитки Клинский район, укладка тротуарной плитки Одинцовский район, доставка сыпучих материалов`,
    author: `Bigway Studio`,
    siteUrl: `https://avg-plitka.ru`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/md`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://glebstroy.github.io/`,
        sitemap: `https://glebstroy.github.io/sitemap.xml`,
      },
    },
  ],
}
