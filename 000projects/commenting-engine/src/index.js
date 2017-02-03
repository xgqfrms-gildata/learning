import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Main';

// ??? App === AppComponent

// Render the main component into the dom
const appRoot = document.getElementById('app');
ReactDOM.render(
    <App />,
    appRoot
);
