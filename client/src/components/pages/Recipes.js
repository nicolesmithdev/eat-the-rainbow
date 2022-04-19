import React from 'react';

import FilterList from '../FilterList';
import SearchBar from '../SearchBar';
import RecipeList from '../RecipeList';

class Recipes extends React.Component {
    render() {
        return (
            <div className="container wrap">
                <FilterList />
                <div className="content">
                    <SearchBar />
                    <RecipeList />
                </div>
            </div>
        );
    }
}

export default Recipes