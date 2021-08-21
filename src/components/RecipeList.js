import React from 'react';
import { connect } from 'react-redux';
import data from '../data/recipes.json';
import RecipeCard from './RecipeCard';
import Pagination from './Pagination';
import Welcome from './Welcome';

class RecipeList extends React.Component {
    state = { recipes: [] };

    componentDidMount() {
        this.setState(
            { currentPage: 1 },
            () => { this.props.onPaginate(this.state.currentPage); }
        );
    }

    renderList() {
        const searchTerm = this.props.onSearchChange;
        const filters = this.props.filters;
        
        // filtering
        let results = data.sort((a, b) => a.title > b.title ? 1 : -1 );
        if ( searchTerm ) {
            results = results.filter(recipe => recipe.title.toLowerCase().includes(`${searchTerm.toLowerCase()}`));
        }
        if ( filters ) {
            Object.keys(filters).map(type => {
                let values = this.props.filters[type];
                if ( values.length) {
                    if ( type == "container") {
                        values.map(item => { 
                            results = results.filter(
                                recipe => {
                                    if ( recipe.container.some(c => c.color.includes(`${item}`))) return true;
                                    if ( recipe.container_vegan && recipe.container_vegan.some(c => c.color.includes(`${item}`))) return true;
                                }
                            )
                        });
                    } else if ( type == "source" ) {
                        results = results.filter(recipe => recipe.source.some(el => values.includes(el)));
                    } else {
                        values.map(item => { results = results.filter(recipe => recipe[type].includes(`${item}`)) });
                    }
                }
            });
        }

        // pagination
        const postsPerPage = 10;
        const indexOfLastPost = this.props.resetPagination * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        const filteredRecipes = results.map((recipe,i) => (<RecipeCard key={i} recipe={recipe}/>)).slice(indexOfFirstPost, indexOfLastPost);
        const hasFilters = Object.keys(filters).filter(type => filters[type].length > 0).length > 0;

        if ( searchTerm || hasFilters ) {
            if ( filteredRecipes.length ) {
                return (
                    <div id="results">
                        <p>Showing {results.length} recipes</p>
                        {filteredRecipes}
                        <Pagination 
                            currentPage={this.state.currentPage}
                            numResults={results.length} 
                            postsPerPage={postsPerPage} 
                            onPageClick={this.props.onPageClick}
                            resetPagination={this.props.resetPagination}
                        />
                    </div>
                );
            }

            return <em>No results found. If you feel this is a mistake, please <a href="mailto:report@eattherainbow.recipes">report</a>.</em>;
        }

        return <Welcome numResults={results.length}/>;
    }

    render() { return this.renderList(); }
}

const mapStateToProps = (state) => {
    return { filters: state.activeFilters };
};

export default connect(mapStateToProps)(RecipeList);
