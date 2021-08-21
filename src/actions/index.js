export const addFilter = (filter) => {
    console.log('addFilter', filter);
    return {
        type: 'ADD_FILTER',
        payload: filter
    };
};

export const removeFilter = (filter) => {
    console.log('removeFilter', filter);
    return {
        type: 'REMOVE_FILTER',
        payload: filter
    };
};