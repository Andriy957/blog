const initialState = {
  listCategory: [],
  currentPage: 1,
  quantityElementPage: 3,
  buttonsPagination: 0,
  buttonsQuantityElementPage: 3,
  sortAscDesc: "asc",
  searchInput: "",
  isLoading: false 
};

export function filterList(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload
      };
     case "UPDATE_SEARCHINPUT":
      return {
        ...state,
        currentPage: 1,
        searchInput: action.payload  
      };
     case "CHANGE_QUANTITY_ELEMENT":
      return {
        ...state,
        quantityElementPage: action.payload
      };
    case "SORT_ASC_DESC": 
      return {
        ...state,
        sortAscDesc: state.sortAscDesc == 'asc' ? 'desc' : 'asc'
      };
    case "LOAD_DATA_START":
      return {
        ...state,
        isLoading: true 
      };
    case "LOAD_DATA_END": {
      const { payload } = action;
      return {
        ...state,
        listCategory: payload.data,
        currentPage: payload.page,
        buttonsPagination: Math.ceil(payload.total / payload.perPage),
        quantityElementPage: payload.perPage,
        isLoading: false 
      };
    }
    default:
      return state;
  }
}