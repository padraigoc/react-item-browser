import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchForm';
import { Row, Col } from 'reactstrap';

class index extends Component {

    //method which makes API call
    getLocation = (event) => {
        const location = event.target.elements.locationSearch.value;
        event.preventDefault();
        console.log(location);
    }


    render() {
        return (
            <div>
            <Navbar /><br /><br />
            <Row>
                <Col xs="6" sm="4"></Col>

                <Col xs="6" sm="4">
                <SearchForm getLocation={this.getLocation}/>
                </Col>

                <Col sm="4"></Col>
            </Row>
            </div>
        );
    }
}

export default index;