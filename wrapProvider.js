import React from "react"
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import Feedback from "./src/components/Feedback"
import ProductsData from "./src/redux/data"

import rootReducer from "./src/redux/reducers"

const wrapProvider = ({ element }) => {
  const composeEnhancers = compose

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return (
    <Provider store={store}>
      <ProductsData />
      <Feedback />
      {element}
    </Provider>
  )
}
export default wrapProvider
