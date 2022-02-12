import React from 'react';
import { connect } from 'react-redux';
import { search, toggleFilters } from '../actions';
import ReactGA from 'react-ga';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.typingTimeout = 0;
    }

    onSearchInput = (e) => {
        // Clear the previously set timer
        clearTimeout(this.typingTimeout);

        // Set the value of the search box to a state
        this.props.search(e.target.value);

        // Reset the timer and track input
        this.typingTimeout = setTimeout(() => {
            ReactGA.event({
                category: 'Engagement',
                action: 'Searched a query',
                label: 'Search Term: ' + e.target.value,
            });
        }, 300);
    };

    render() {
        return (
            <div id="search-bar">
                <i
                    className="icon filter"
                    onClick={() =>
                        this.props.toggleFilters(!this.props.hideFilters)
                    }
                />
                <form>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search..."
                        value={this.props.searchTerm}
                        onChange={this.onSearchInput}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        hideFilters: state.hideFilters,
    };
};

export default connect(mapStateToProps, { search, toggleFilters })(SearchBar);
