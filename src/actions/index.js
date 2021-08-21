export const addFilter = (filter) => {
    return {
        type: 'ADD_FILTER',
        payload: filter
    };
};

export const removeFilter = (filter) => {
    return {
        type: 'REMOVE_FILTER',
        payload: filter
    };
};

export const toggleFilters = (value) => {
    return {
        type: 'TOGGLE_FILTERS',
        payload: value
    };
};

export const changePage = (pageNumber) => {
    return {
        type: 'CHANGE_PAGE',
        payload: pageNumber
    };
};