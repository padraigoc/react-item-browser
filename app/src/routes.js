import React, { Component } from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';
import HomePage from './components/HomePage/index';

class routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>
                {/* <Route exact path="/place/" component={Place}/> */}
            </BrowserRouter>
        );
    }
}

export default routes;