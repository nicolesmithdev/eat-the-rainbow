import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';

class Pagination extends React.Component {
    renderPagination() {
        const pageNumbers = [];
        
        for (let i = 1; i <= Math.ceil(this.props.numResults / this.props.postsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav id="pagination">
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a 
                                onClick={() => this.props.changePage(number)} 
                                href="#"
                                className={this.props.currentPage === number ? 'active' : ''}
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
    return { currentPage: state.currentPage };
};

export default connect(mapStateToProps, { changePage })(Pagination);