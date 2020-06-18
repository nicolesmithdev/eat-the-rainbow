import React from 'react';
import filters from '../data/filters';
import recipes from '../data/recipes.json';

class FilterList extends React.Component {
    state = {
        filters: { category: [], container: [], dietary: [], source: [] },
        hideFilters: ''
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.setState({ hideFilters: window.innerWidth <= 992 });
    }

    onFilterChange = (e) => {
        const name = e.target.value.split('.')[0].toLowerCase();  // i.e. container or category
        const value = e.target.value.split('.')[1];   // i.e. blue, breakfast, etc.
        
        const isChecked = e.target.checked;
        const newValue = isChecked ? { ...this.state.filters, [name]: [...this.state.filters[name], value] } : { ...this.state.filters, [name]: this.state.filters[name].filter(el => el !== value) };

        this.setState(
            { filters: newValue, currentPage: 1 },
            () => {
                this.props.onChange(this.state.filters);
                this.props.resetPagination(1);
            } // callback function
        );   
    }

    renderFilters() {
        return filters.map(({name, values}) => (
            <div className={`filter ${name.toLowerCase()}`}>
                <h3>{name}</h3>
                <ul>
                    {values.map((value, i) => {
                        const key = name.toLowerCase();
                        
                        let count = "";
                        if ( key === "container" ) {
                            count = recipes.filter(recipe => recipe.container.some(c => c.color.includes(`${value}`))).length;
                        } else {
                            count = recipes.filter(recipe => recipe[key].includes(`${value}`)).length;
                        }

                        const displayCount = count > 0 ? <span className="count">({count})</span> : '';

                        return (
                        <li>
                            <input type="checkbox" id={value} value={`${name}.${value}`} onChange={this.onFilterChange} />
                            <label htmlFor={value}>{value}</label>
                            {displayCount}
                        </li>
                        );
                    })}
                </ul>
            </div>
        ));
    }

    render() {
        return (
            <div id="sidebar">
                <div id="filters" className={this.props.onToggleFilters === true ? 'open' : 'hidden'}>{this.renderFilters()}</div>
            </div>
        );
    }
}

export default FilterList;