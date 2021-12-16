import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const [height, setHeight] = React.useState(0)
  React.useEffect(() => {
    setHeight(window.innerHeight)
    setTimeout(() => {
      window.open("/", "_self")
    }, 4000)
  }, [])
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div
        style={{
          height: height - 415,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>404: Пожалуй, эта страница где-то потерялась</h1>
          <p>Вы будете перенаправлены на главную автоматически.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
