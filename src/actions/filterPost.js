export const changePagePost = (argPage) => ({
    type: "CHANGE_PAGE_POST",
    payload: argPage
});

export const changeQuantityPost = (argElement) => ({
    type: "CHANGE_QUANTITY_POST",
    payload: argElement
});

export const changeSortAscDescPost = () => ({
    type: "SORT_ASC_DESC_POST"
});

export const upadateSearchInputPost = (event) => ({
    type: "UPDATE_SEARCHINPUT_POST",
    payload: event.target.value
});