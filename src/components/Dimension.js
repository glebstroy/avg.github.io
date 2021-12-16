import React from "react"

function Dimension() {
  const width = typeof window !== "undefined" ? window.innerWidth : 0
  const [dimensions, setDimensions] = React.useState(width)
  React.useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])
  return dimensions
}

export default Dimension
