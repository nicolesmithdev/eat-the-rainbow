import { combineReducers } from 'redux';
import filters from './filters';

const recipes = (recipes = [], action) => {
    return action.type === 'FETCH_RECIPES' ? action.payload : recipes;
};

const recipe = (recipe = {}, action) => {
    return action.type === 'CREATE_RECIPE' ? action.payload : recipe;
};

const searchTerm = (searchTerm = '', action) => {
    return action.type === 'SEARCH' ? action.payload : searchTerm;
};

const currentPage = (currentPage = 1, action) => {
    return action.type === 'CHANGE_PAGE' ? action.payload : currentPage;
};

const activeFilters = (
    activeFilters = { category: [], container: [], dietary: [], source: [] },
    action
) => {
    switch (action.type) {
        case 'ADD_FILTER':
            return {
                ...activeFilters,
                [action.payload.name]: [
                    ...activeFilters[action.payload.name],
                    action.payload.value,
                ],
            };
        case 'REMOVE_FILTER':
            return {
                ...activeFilters,
                [action.payload.name]: activeFilters[
                    action.payload.name
                ].filter((el) => el !== action.payload.value),
            };
        default:
            return activeFilters;
    }
};

const hideFilters = (hideFilters = false, action) => {
    return action.type === 'TOGGLE_FILTERS' ? action.payload : hideFilters;
};

const random = (random = false, action) => {
    return action.type === 'RANDOMIZE' ? action.payload : random;
};

const formFields = () => {
    let fields = [
        {
            label: 'Recipe Title',
            slug: 'title',
            type: 'input',
            children: false,
            value: '',
        },
    ];

    Object.values(filters).map((filter) => {
        if (filter.slug === 'container') {
            return false;
        }
        const field = {
            label: filter.label,
            slug: filter.slug,
            type: 'select',
            children: filter.values,
            value: [],
        };
        fields.push(field);
        return field;
    });

    return fields;
};

export default combineReducers({
    recipes,
    recipe,
    filters: () => filters,
    searchTerm,
    currentPage,
    activeFilters,
    hideFilters,
    random,
    formFields,
});
