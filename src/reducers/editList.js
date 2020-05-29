const initialState = {
    numberIdEdit: "",
    numberIdDelete: "",
    numberCoupleIdDelete: [],
    isOpenedEdit: false,
    isOpenedDelete: false,
    isOpenedAdd: false,
    isOpenedCoupleDelete:false
};

export function editList(state = initialState, action) {
  switch (action.type) {
    case "EDIT_CATEGORY":
      return {
         ...state,
         numberIdEdit: action.payload,
         isOpenedEdit: true
      };
    case "CLOSE_MODAL_EDIT":
      return {
         ...state,
         isOpenedEdit: false
      };
    case "DELETE_CATEGORY":
      return {
         ...state,
         numberIdDelete: action.payload,
         isOpenedDelete: true
      };
    case "CANCEL_DELETE_MODAL":
      return {
         ...state,
         isOpenedDelete: false
      };
    case "MODAL_ADD_CATEGORY":
      return {
         ...state,
         isOpenedAdd: true
      };
    case "CLOSE_MODAL_ADD":
      return {
         ...state,
         isOpenedAdd: false
      };
    case "DELETE_COUPLE_CATEGORY": 
      return {...state,
        numberCoupleIdDelete: [...state.numberCoupleIdDelete, action.payload]
      };
    case "MODAL_DELETE_COUPLECATEGORY":
      return {
         ...state,
         isOpenedCoupleDelete: true
      };
    case "CANCEL_COUPLE_DELETE_MODAL":
      return {
         ...state,
         isOpenedCoupleDelete: false
      };
    default:
      return state;
  }
}