const initialState = {
  data: {},
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default products
