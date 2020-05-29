export const changePage = (argPage) => ({
    type: "CHANGE_PAGE",
    payload: argPage
});

export const upadateStateSearchInput = (event) => ({
    type: "UPDATE_SEARCHINPUT",
    payload: event.target.value
});

export const changeQuantityElementPage = (argElement) => ({
    type: "CHANGE_QUANTITY_ELEMENT",
    payload: argElement
});

export const changeSortAscDesc = () => ({
    type: "SORT_ASC_DESC"
});