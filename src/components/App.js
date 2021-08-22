import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../history';

// Pages
import Recipes from './pages/Recipes';

class App extends React.Component {    
    render() {      
        return (
            <div id="page2">
                <Router history={history}>
                    <header id="header">
                        <div className="wrap">
                            <h1><Link to="/">Eat The Rainbow</Link></h1>
                        </div>
                    </header>                    
                    <Switch>
                        <Route path="/" exact component={Recipes} />
                    </Switch>                    
                </Router>
            </div>
        );
    }
}

export default App;