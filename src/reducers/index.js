import { combineReducers } from 'redux';

const filters = () => {
    return [
        {
            name: 'Category',
            values: [ 'Breakfast', 'Cocktails', 'Crockpot', 'Desserts', 'Entrees', 'Holiday', 'Salads', 'Sauces, Dressings, & Seasonings', 'Shakeology', 'Sides & Snacks', 'Soups' ],
        },
        {
            name: 'Container',
            values: [ 'Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow', 'Teaspoon', 'Free' ],
        },
        {
            name: 'Dietary',
            values: [ 'Gluten-Free', 'High in Fiber', 'High in Protein', 'Non-Dairy', 'Quick & Easy', 'Paleo', 'Vegan', 'Vegetarian', '80 Day' ]
        },
        {
            name: 'Source',
            values: [ 'Blog', 'Cooking Show', 'Cookbook Vol 1', 'Cookbook Vol 2', 'DietBet', 'LWLC Book', 'Monthly Group' ]
        }
    ];
};

const activeFilters = (activeFilters = { category: [], container: [], dietary: [], source: [] }, action) => {
    switch(action.type) {
        case "ADD_FILTER":
            return {
                ...activeFilters, [action.payload.name]: [...activeFilters[action.payload.name], action.payload.value]
            }
        case "REMOVE_FILTER":
            return {
                ...activeFilters, [action.payload.name]: activeFilters[action.payload.name].filter(el => el !== action.payload.value)
            };
        default:
            return activeFilters;
    }
};

const hideFilters = (hideFilters = false, action) => {
    return action.type === "TOGGLE_FILTERS" ? action.payload : hideFilters;
};

const currentPage= (currentPage = 1, action) => {
    switch(action.type) {
        case "CHANGE_PAGE":
            return action.payload;
        default:
            return 1;
    }
};

export default combineReducers({
    filters,
    activeFilters,
    hideFilters,
    currentPage
});