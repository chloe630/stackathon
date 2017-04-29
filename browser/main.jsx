'use strict';

// React Imports
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

// Root Imports
import Root from './Root';
import Home from './Home';
import Input from './Input';

import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';

import Login from './Login';
import SignUp from './SignUp';
import SingleUser from './SingleUser';


render(
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/" component={ Root }>
                <Route path="/search" component = { Input } />
                <Route path="/recipes" component={ AllRecipes }/>
                <Route path="/recipes/:id" component={ SingleRecipe } />
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ SignUp } />
                <Route path = "user/:id" component={ SingleUser } />
                <IndexRoute component={ Home } />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('main')
);
