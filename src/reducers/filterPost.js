const initialState = {
    listImage: [],
    currentPage: 1, 
    quantityElementPage: 2,
    buttonsPagination: 0,   
    buttonsQuantityElementPage: 3,
    sortAscDesc: "asc",
    searchInput: "",
    isLoading: false 
};

export function filterPost(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PAGE_POST":
      return {
        ...state,
        currentPage: action.payload
      };
    case "CHANGE_QUANTITY_POST":
      return {
        ...state,
        quantityElementPage: action.payload
      };
    case "UPDATE_SEARCHINPUT_POST":
      return {
        ...state,
        currentPage: 1,
        searchInput: action.payload  
      };
    case "SORT_ASC_DESC_POST": 
      return {
        ...state,
        sortAscDesc: state.sortAscDesc == 'asc' ? 'desc' : 'asc'
      };      
    case "LOAD_DATA_START_POSTS":
      return {
        ...state,
        isLoading: true 
      };
    case "LOAD_DATA_END_POSTS": {
      const { payload } = action;
      return {
        ...state,
        listImage: payload.data,
        currentPage: payload.page,
        buttonsPagination: Math.ceil(payload.total / payload.perPage),
        quantityElementPage: payload.perPage,
        isLoading: false 
      }
    };
    default:
      return state;
  }
}