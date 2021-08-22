import React from 'react';
import { connect } from 'react-redux';
import { search, toggleFilters } from '../actions';

class SearchBar extends React.Component {
    render() {
        return (
            <div id="search-bar">
                <i 
                    className="icon filter"
                    onClick={() => this.props.toggleFilters(!this.props.hideFilters)}
                />
                <form>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={this.props.searchTerm}
                        onChange={(e) => this.props.search(e.target.value)}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        hideFilters: state.hideFilters
    };
};

export default connect(mapStateToProps, { search, toggleFilters })(SearchBar);