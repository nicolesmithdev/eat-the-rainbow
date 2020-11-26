import React from 'react';
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
    }npm

    renderList() {
        const searchTerm = this.props.onSearchChange;
        const params = this.props.onFilterChange;
        
        // filtering
        let results = data.sort((a, b) => a.title > b.title ? 1 : -1 );
        if ( searchTerm ) {
            results = results.filter(recipe => recipe.title.toLowerCase().includes(`${searchTerm.toLowerCase()}`));
        }
        if ( params ) {
            Object.keys(params.filters).map(key => {
                let values = params.filters[key];
                if ( values.length) {
                    /*if ( key == "category" ) {
                        results = results.filter(recipe => values.some(el => el === recipe.category));
                    } else */
                    if ( key == "container") {
                        values.map(item => { 
                            results = results.filter(
                                recipe => {
                                    if ( recipe.container.some(c => c.color.includes(`${item}`))) return true;
                                    if ( recipe.container_vegan && recipe.container_vegan.some(c => c.color.includes(`${item}`))) return true;
                                }
                            )
                        });
                    } else if ( key == "source" ) {
                        results = results.filter(recipe => recipe.source.some(el => values.includes(el)));
                    } else {
                        values.map(item => { results = results.filter(recipe => recipe[key].includes(`${item}`)) });
                    }
                }
            });
        }

        // pagination
        const postsPerPage = 10;
        const indexOfLastPost = this.props.resetPagination * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        const filteredRecipes = results.map((recipe) => (<RecipeCard recipe={recipe}/>)).slice(indexOfFirstPost, indexOfLastPost);

        if ( searchTerm || params ) {
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

export default RecipeList;