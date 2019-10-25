import React from 'react';
import ReactDOM from 'react-dom';
// React router import
import {
    Route,
    BrowserRouter as Router,
    Switch } from 'react-router-dom';

// Importing CSS Style
import './css/index.css';

// Importing JS classes
import App from './App';
import ContentFrame from './contentFrame';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import NotFound from './notfound';

const routing = (
    <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/resume" component={ContentFrame(Resume)} />
                <Route path="/portfolio" component={ContentFrame(Portfolio)} />
                <Route path="/about" component={ContentFrame(About)} />
                <Route component={ContentFrame(NotFound)} />
            </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
