import { combineReducers } from "redux"
import products from "./products"
import filter from "./filter"
import button from "./button"

const rootReducer = combineReducers({
  products,
  filter,
  button,
})

export default rootReducer
