import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchForm';
import GoogleMap from '../Map/map'
import { Row, Col } from 'reactstrap';
//import { geolocated } from "react-geolocated";
import api from '../../lib/api';

class home extends Component {

    state = {
        venues: [],
        venuePic: [],
        dropPins: [],
        mapView: { lat: 49.2827, lng: -123.1207 },
        isGeolocationAvailable: '',
        zoom: 12
    }


    searchSubmit = (event) => {
        event.preventDefault();

        const location = event.target.elements.locationSearch.value;
        const activity = event.target.elements.locationActivity.value;


        api.getPlaces(activity, location, (results) => {
            //console.log(results);

            const center = results.data.geocode.center;
            const venues = results.data.groups[0].items;

            const pins = results.data.groups[0].items.map((res) => {
                return {
                    latitude: res.venue.location.lat,
                    longitude: res.venue.location.lng,
                    isVisable: true
                }
            })
            this.setState({
                venues: venues,
                mapView: center,
                dropPins: pins,
            }, function () {
                console.log("Current state")
                console.log(this.state);
            })
        }
        )
    }

    render() {
        return (
            <div>
                <Navbar /><br /><br />
                <Row>
                    <Col xs="6" sm="4"></Col>

                    <Col xs="6" sm="4">
                        <SearchForm searchSubmit={this.searchSubmit} />

                        {this.state.venues.map((resultItem, i) => {
                            return <p key={i}>

                                {resultItem.venue.name + " - " + resultItem.venue.location.formattedAddress + " - "}

                                <a href=
                                    {"https://www.google.com/maps/search/?api=1&query="
                                        + resultItem.venue.location.lat + ","
                                        + resultItem.venue.location.lng}
                                    target="_blank" rel="noopener noreferrer">Open in Google Maps</a>

                            </p>


                        })}
                    </Col>

                    <Col sm="4"></Col>
                </Row>
                <GoogleMap {...this.state} />
            </div>
        );
    }
}

export default home;