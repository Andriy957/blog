const initialState = {
  errorMessage: null,
  isLoading: false 
};

export function register(state = initialState, action) {
  switch (action.type) {
    case "LOAD_DATA_ERROR_START":
      return {
        ...state,
        isLoading: true 
      };
    case "LOAD_DATA_ERROR_END": 
      return {
        ...state,
        errorMessage: action.payload[0].message,
        isLoading: false 
      };
    default:
      return state;
  }
}