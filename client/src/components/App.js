import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes, search } from '../actions';

// Pages
import Recipes from './pages/Recipes';
import AdminNew from './admin/AdminNew';
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
                                <Link to="/" onClick={() => this.props.search('')}>
                                    Eat The Rainbow
                                </Link>
                            </h1>
                        </div>
                    </header>
                    <Routes>
                        <Route path="/" element={<Recipes />} />
                        {process.env.NODE_ENV === 'development' && <Route path="/admin/new" exact element={<AdminNew />} />}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, { fetchRecipes, search })(App);
