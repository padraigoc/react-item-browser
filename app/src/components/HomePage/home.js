import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchForm';
import { Row, Col } from 'reactstrap';
import axios from 'axios';


class index extends Component {

    
    getPlaces = (event) => {
        event.preventDefault();
    
        const location = event.target.elements.locationSearch.value;
        const activity = event.target.elements.locationSelect.value;
        
        const endPoint = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id: "XWLI1ZO0ZJNNOL11OAKT5IJE5D2MXEWE0TMWWPIAMWOUJZBM",
            client_secret: "APSA24BZEQVQXHNECYEGKJ3QSC0SYQGPZIKDVYEDASLVMXMB",
            query: activity,
            near: location,
            v: "20190610"
        };
    
        let url = endPoint + new URLSearchParams(parameters);
        console.log(url);
        
        axios.get(url)
         .then(res => {
            console.log("Response from foursquare: " + JSON.stringify(res))
         })
            .catch(error => {
                 console.log("Error: " + error)
         })  
    }

    render() {
        return (
            <div>
            <Navbar /><br /><br />
            <Row>
                <Col xs="6" sm="4"></Col>

                <Col xs="6" sm="4">
                <SearchForm getPlaces={this.getPlaces}/>
                </Col>

                <Col sm="4"></Col>
            </Row>
            </div>
        );
    }
}

export default index;