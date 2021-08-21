import React from 'react';
import { connect } from 'react-redux';
import { toggleFilters } from '../actions';

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

    render() {
        return (
            <div id="search-bar">
                <i className="icon filter" onClick={() => this.props.toggleFilters(!this.props.hideFilters)} />
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

const mapStateToProps = (state) => {
    return {
        hideFilters: state.hideFilters
    };
};

export default connect(mapStateToProps, { toggleFilters })(SearchBar);