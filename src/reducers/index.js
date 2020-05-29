import { combineReducers } from "redux";
import { filterList } from "./filterList";
import { editList } from "./editList";
import { register } from "./register";
import { filterPost } from "./filterPost";
import { editPost } from "./editPost";

const rootReducer = combineReducers({
  filterListReducer: filterList,
  editListReducer: editList,
  registerReducer: register,
  filterImageReducer: filterPost,
  editImageReducer: editPost,
});

export default rootReducer;