const initialState = {
    category: '',
    listCategories: [],
    numberIdEdit: '',
    numberIdDelete: '',
    isOpenedAdd: false,
    isOpenedEdit: false,
    isOpenedDelete: false,
    isLoading: false
};

export function editPost(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL_ADD_POST":
      return {
         ...state,
         isOpenedAdd: true
      };
    case "CLOSE_MODAL_ADD_POST":
      return {
         ...state,
         isOpenedAdd: false
      };
    case "EDIT_POST":
      return {
         ...state,
         numberIdEdit: action.payload,
         isOpenedEdit: true
      };
    case "CLOSE_MODAL_EDIT_POST":
      return {
         ...state,
         isOpenedEdit: false
      };
    case "DELETE_POST":
      return {
         ...state,
         numberIdDelete: action.payload,
         isOpenedDelete: true
      };
    case "CANCEL_DELETE_MODAL_POST":
      return {
         ...state,
         isOpenedDelete: false
      };      
    case "UPDATE_SELECT":
      return {
        ...state,
        category: action.payload  
      };
    case "LOAD_DATA_START_SELECT":
      return {
        ...state,
        isLoading: true 
      };
    case "LOAD_DATA_END_SELECT": {
      const { payload } = action;
      return {
        ...state,
        listCategories: payload.data,
        isLoading: false 
      }
    };
    default:
      return state;
  }
}


