import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './components/App';
import './index.scss';

if (process.env.NODE_ENV === 'production') {
    const trackingId = "UA-30012836-58";
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(<App />, document.querySelector('#app'));