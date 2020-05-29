export const updateSelectCategory = (event) => ({
    type: "UPDATE_SELECT",
    payload: event.target.value
});
 
export const modalAddPost = () => ({
    type: "OPEN_MODAL_ADD_POST"
});

export const closeModalAddPost = () => ({
    type: "CLOSE_MODAL_ADD_POST"
});  

export const editPost = (argNumberIdEdit) => ({
    type: "EDIT_POST",
    payload: argNumberIdEdit
});

export const closeModalEditPost = () => ({
    type: "CLOSE_MODAL_EDIT_POST"
});

export const deletePost = (argNumberIdDelete) => ({
    type: "DELETE_POST",
    payload: argNumberIdDelete
});
 
export const cancelDeleteModalPost = () => ({
    type: "CANCEL_DELETE_MODAL_POST"
});  