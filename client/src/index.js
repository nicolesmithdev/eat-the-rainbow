import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactGA from 'react-ga';

import App from './components/App';
import reducers from './reducers';
import './index.scss';

if (process.env.NODE_ENV === 'production') {
    const trackingId = "UA-30012836-58";
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);