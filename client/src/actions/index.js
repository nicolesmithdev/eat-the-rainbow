import axios from 'axios';

export const fetchRecipes = () => async (dispatch) => {
    const res = await axios.get('/api/recipes');
    const data = Object.keys(res.data).map((key) => {
        return res.data[key];
    });
    dispatch({ type: 'FETCH_RECIPES', payload: data });
};

export const search = (term) => {
    return {
        type: 'SEARCH',
        payload: term,
    };
};

export const addFilter = (filter) => {
    return {
        type: 'ADD_FILTER',
        payload: filter,
    };
};

export const removeFilter = (filter) => {
    return {
        type: 'REMOVE_FILTER',
        payload: filter,
    };
};

export const toggleFilters = (value) => {
    return {
        type: 'TOGGLE_FILTERS',
        payload: value,
    };
};

export const changePage = (pageNumber) => {
    return {
        type: 'CHANGE_PAGE',
        payload: pageNumber,
    };
};
