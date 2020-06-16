import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '', displayFilters: false };

    onInputChange = (e) => {
        this.setState(
            { searchTerm: e.target.value, currentPage: 1 },
            () => {
                this.props.onChange(this.state.searchTerm);
                this.props.resetPagination(1);
            } // callback function
        );
    }

    toggleFilters = (e) => { 
        this.setState(
            { displayFilters: this.state.displayFilters === true ? false : true },
            () => { this.props.onToggleFilters(this.state.displayFilters); } // callback function
        );
    }

    render() {
        return (
            <div id="search-bar">
                <i className="icon filter" onClick={this.toggleFilters} />
                <form>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;