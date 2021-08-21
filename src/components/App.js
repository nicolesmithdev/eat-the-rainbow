import React from 'react';

import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import FilterList from './FilterList';
import Pagination from './Pagination';

class App extends React.Component {
    state = { filters: null, displayFilters: false };

    reset = () => {
        this.setState({ filters: null });
    }

    onSearchChange = (term) => {
        this.setState({ searchTerm: term });
    }

    onToggleFilters = (toggle) => {
        this.setState({ displayFilters: toggle });
    }
    
    render() {      
        return (
            <div id="page2">
                <header id="header">
                    <div className="wrap">
                        <h1>Eat The Rainbow</h1>
                    </div>
                </header>
                <div className="container wrap">
                    <FilterList />
                    <div className="content">
                        <SearchBar />
                        <RecipeList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;