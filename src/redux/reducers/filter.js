const initialState = {
  category: "products",
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload }
    default:
      return state
  }
}

export default filter
