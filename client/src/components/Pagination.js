import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import ReactGA from 'react-ga';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
    onChangePage = (e) => {
        const pageNumber = Number(e.selected + 1);
        this.props.changePage(pageNumber);
        ReactGA.event({
            category: 'Engagement',
            action: 'Pagination',
            label: `Term: ${this.props.searchTerm}, Page ${pageNumber}`,
        });
    };

    renderPagination() {
        const pageNumbers = Math.ceil(
            this.props.numResults / this.props.postsPerPage
        );

        return (
            <nav id="pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="&raquo;"
                    previousLabel="&laquo;"
                    onPageChange={this.onChangePage}
                    pageRangeDisplayed={5}
                    pageCount={pageNumbers}
                    renderOnZeroPageCount={null}
                    activeLinkClassName="active"
                />
            </nav>
        );
    }

    render() {
        return this.renderPagination();
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        searchTerm: state.searchTerm,
    };
};

export default connect(mapStateToProps, { changePage })(Pagination);
