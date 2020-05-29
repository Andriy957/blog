export const editСategory = (argNumberIdEdit) => ({
    type: "EDIT_CATEGORY",
    payload: argNumberIdEdit
});
    
export const closeModalEdit = () => ({
    type: "CLOSE_MODAL_EDIT"
});
    
export const deleteCategory = (argNumberIdDelete) => ({
    type: "DELETE_CATEGORY",
    payload: argNumberIdDelete
});
    
export const cancelDeleteModal = () => ({
    type: "CANCEL_DELETE_MODAL"
});
    
export const modalAddCategory = () => ({
    type: "MODAL_ADD_CATEGORY"
});

export const closeModalAdd = () => ({
    type: "CLOSE_MODAL_ADD"
});    

export const deleteСoupleСategory = (argDeleteCoupleCategory) => ({
    type: "DELETE_COUPLE_CATEGORY",
    payload: argDeleteCoupleCategory
});
    
export const modalDeleteCoupleCategory = () => ({
    type: "MODAL_DELETE_COUPLECATEGORY"
});

export const cancelCoupleDeleteModal = () => ({
    type: "CANCEL_COUPLE_DELETE_MODAL"
}); 