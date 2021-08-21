import React from 'react';

import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import FilterList from './FilterList';

class App extends React.Component {
    state = { filters: null, displayFilters: false };

    reset = () => {
        this.setState({ filters: null });
    }

    onSearchChange = (term) => {
        this.setState({ searchTerm: term });
    }

    onFilterChange = (filters) => {
        this.setState({ filters: { filters }, currentPage: 1 });
    }

    onToggleFilters = (toggle) => {
        this.setState({ displayFilters: toggle });
    }

    resetPagination = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }

    onPageClick = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }
    
    render() {      
        return (
            <div id="page2">
                <header id="header">
                    <div className="wrap">
                        <h1 onClick={this.reset}>Eat The Rainbow</h1>
                    </div>
                </header>
                <div className="container wrap">
                    <FilterList 
                        onChange={this.onFilterChange} 
                        onToggleFilters={this.state.displayFilters}
                        resetPagination={this.resetPagination}
                        onRandom={this.onRandom}
                    />
                    <div className="content">
                        <SearchBar 
                            onChange={this.onSearchChange}
                            onToggleFilters={this.onToggleFilters}
                            resetPagination={this.resetPagination}
                        />
                        <RecipeList 
                            onSearchChange={this.state.searchTerm}
                            onFilterChange={this.state.filters}
                            resetPagination={this.state.currentPage}
                            onPaginate={this.resetPagination}
                            onPageClick={this.onPageClick}
                            onRandom={this.onRandom}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;