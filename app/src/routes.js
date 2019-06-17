import React, { Component } from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';
import HomePage from './components/HomePage/home';

class routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>x
            </BrowserRouter>
        );
    }
}

export default routes;