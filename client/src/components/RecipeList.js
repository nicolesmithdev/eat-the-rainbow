import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';
import Pagination from './Pagination';
import Welcome from './Welcome';

class RecipeList extends React.Component {
    renderList() {
        const searchTerm = this.props.searchTerm;
        const filters = this.props.filters;
        const random = this.props.random;

        // filtering
        let results = this.props.recipes.sort((a, b) =>
            a.title > b.title ? 1 : -1
        );
        if (searchTerm) {
            results = results.filter((recipe) =>
                recipe.title
                    .toLowerCase()
                    .includes(`${searchTerm.toLowerCase()}`)
            );
        }
        if (filters) {
            Object.keys(filters).map((type) => {
                let values = this.props.filters[type];
                if (values.length) {
                    if (type == 'container') {
                        values.map((item) => {
                            results = results.filter((recipe) => {
                                if (
                                    recipe.container.some((c) =>
                                        c.color.includes(`${item}`)
                                    )
                                )
                                    return true;
                                if (
                                    recipe.container_vegan &&
                                    recipe.container_vegan.some((c) =>
                                        c.color.includes(`${item}`)
                                    )
                                )
                                    return true;
                                if (
                                    recipe.container_gut &&
                                    recipe.container_gut.some((c) =>
                                        c.color.includes(`${item}`)
                                    )
                                )
                                    return true;
                            });
                        });
                    } else if (type === 'category' || type === 'source') {
                        results = results.filter((recipe) =>
                            recipe[type].some((el) => values.includes(el))
                        );
                    } else {
                        values.map((item) => {
                            results = results.filter((recipe) =>
                                recipe[type].includes(`${item}`)
                            );
                        });
                    }
                }
            });
        }
        if (random) {
            results = [results[Math.floor(Math.random() * results.length)]];
        }

        // pagination
        const postsPerPage = 10;
        const indexOfLastPost = this.props.currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        const filteredRecipes = results
            .map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
            .slice(indexOfFirstPost, indexOfLastPost);
        const hasFilters =
            Object.keys(filters).filter((type) => filters[type].length > 0)
                .length > 0;

        if (searchTerm || hasFilters || random) {
            if (filteredRecipes.length) {
                return (
                    <div id="results">
                        <p>Showing {results.length} recipes</p>
                        {filteredRecipes}
                        <Pagination
                            numResults={results.length}
                            postsPerPage={postsPerPage}
                        />
                    </div>
                );
            }

            return (
                <em>
                    No results found. If you feel this is a mistake, please{' '}
                    <a href="mailto:nicole@nicolesmith.dev">report</a>.
                </em>
            );
        }

        return <Welcome numResults={results.length} />;
    }

    render() {
        return this.renderList();
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        filters: state.activeFilters,
        currentPage: state.currentPage,
        searchTerm: state.searchTerm,
        random: state.random,
    };
};

export default connect(mapStateToProps, {})(RecipeList);
