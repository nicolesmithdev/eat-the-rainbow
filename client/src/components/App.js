import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes, search } from '../actions';

// Pages
import Recipes from './pages/Recipes';
class App extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }
    render() {
        return (
            <div id="page2">
                <BrowserRouter>
                    <header id="header">
                        <div className="wrap">
                            <h1>
                                <Link
                                    to="/"
                                    onClick={() => this.props.search('')}
                                >
                                    Eat The Rainbow
                                </Link>
                            </h1>
                        </div>
                    </header>
                    <Routes>
                        <Route path="/" element={<Recipes />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, { fetchRecipes, search })(App);
