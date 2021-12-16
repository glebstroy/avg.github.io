const initialState = {
  isReady: false,
  isOpen: false,
}

const button = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEEDBACK":
      return { ...state, isReady: action.payload }
    case "SET_BURGER":
      return { ...state, isOpen: action.payload }
    default:
      return state
  }
}

export default button
