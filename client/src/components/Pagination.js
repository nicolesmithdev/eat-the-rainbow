import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import ReactGA from 'react-ga';

class Pagination extends React.Component {
    onChangePage = (e) => {
        const pageNumber = Number(e.target.text);
        this.props.changePage(pageNumber);
        ReactGA.event({
            category: 'Engagement',
            action: 'Pagination',
            label: `Term: ${this.props.searchTerm}, Page ${pageNumber}`,
        });
    };

    renderPagination() {
        const pageNumbers = [];

        for (
            let i = 1;
            i <= Math.ceil(this.props.numResults / this.props.postsPerPage);
            i++
        ) {
            pageNumbers.push(i);
        }

        return (
            <nav id="pagination">
                <ul>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <a
                                onClick={this.onChangePage}
                                href="#"
                                className={
                                    this.props.currentPage === number
                                        ? 'active'
                                        : ''
                                }
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
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
