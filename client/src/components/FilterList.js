import React from 'react';
import { connect } from 'react-redux';
import { addFilter, removeFilter, toggleFilters } from '../actions';
import ReactGA from 'react-ga';

class FilterList extends React.Component {
    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
    }

    resize() {
        this.props.toggleFilters(window.innerWidth <= 992);
    }

    onFilterChange = (e) => {
        const name = e.target.value.split('.')[0].toLowerCase(); // i.e. container or category
        const value = e.target.value.split('.')[1]; // i.e. blue, breakfast, etc.

        let action = e.target.checked ? 'addFilter' : 'removeFilter';
        this.props[action]({ name, value });

        ReactGA.event({
            category: 'Engagement',
            action: action,
            label: name + ': ' + value,
        });
    };

    renderFilters() {
        return Object.values(this.props.filters).map(({ label, values }, x) => {
            let filter = Object.keys(this.props.filters)[x];
            return (
                <div classlabel={`filter ${filter}`} key={x}>
                    <h3>{label}</h3>
                    <ul>
                        {values.map((value, i) => {
                            const key = label.toLowerCase();

                            let count = '';
                            count =
                                key === 'container'
                                    ? this.props.recipes.filter((recipe) =>
                                          recipe.container.some((c) =>
                                              c.color.includes(`${value}`)
                                          )
                                      ).length
                                    : this.props.recipes.filter((recipe) =>
                                          recipe[key].includes(`${value}`)
                                      ).length;
                            const displayCount =
                                count > 0 ? (
                                    <span className="count">({count})</span>
                                ) : (
                                    ''
                                );

                            return (
                                <li key={i}>
                                    <input
                                        type="checkbox"
                                        id={value}
                                        value={`${label}.${value}`}
                                        onChange={this.onFilterChange}
                                    />
                                    <label htmlFor={value}>{value}</label>
                                    {displayCount}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div id="sidebar">
                <div
                    id="filters"
                    className={
                        this.props.hideFilters === true ? 'hidden' : 'open'
                    }
                >
                    {this.renderFilters()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        filters: state.filters,
        hideFilters: state.hideFilters,
    };
};

export default connect(mapStateToProps, {
    addFilter,
    removeFilter,
    toggleFilters,
})(FilterList);
