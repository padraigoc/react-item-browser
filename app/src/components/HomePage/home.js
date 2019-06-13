import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchForm';
import { Row, Col } from 'reactstrap';

import api from '../../lib/api';

class home extends Component {

    state = {
        venues : [],
        venuePic : [],
    }
    
    searchSubmit = (event) => {
        event.preventDefault();
        
        const location = event.target.elements.locationSearch.value;
        const activity = event.target.elements.locationActivity.value;
        
        api.getPlaces(activity,location, (results) => {
            let jsonResults = JSON.parse(JSON.stringify(results))

            console.log("Response from server:")
            console.log(jsonResults.data)
            
            this.setState({
                    venues: jsonResults.data
                    })
                })
            }


    render() {
        return (
            <div>
            <Navbar /><br /><br />
            <Row>
                <Col xs="6" sm="4"></Col>

                <Col xs="6" sm="4">
                <SearchForm searchSubmit={this.searchSubmit}/>
                {this.state.venues.map((resultItem, i) => {
                    return <p key={i}>{resultItem.venue.name + " - " + resultItem.venue.location.city}</p>
                } )}
                </Col>

                <Col sm="4"></Col>
            </Row>
            </div>
        );
    }
}

export default home;