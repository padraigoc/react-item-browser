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
        // isGeolocationAvailable: '',
        zoom: 12,
    }

    handlePinClick = (marker) => {
        console.log(marker)
        marker.isOpen = true;
        this.setState=({ dropPins: Object.assign(this.state.dropPins,marker) });
    }


    searchSubmit = (event) => {
        event.preventDefault();

        const location = event.target.elements.locationSearch.value;
        const activity = event.target.elements.locationActivity.value;

        api.getPlaces(activity, location, (results) => {

            const center = results.data.geocode.center;
            const venues = results.data.groups[0].items;

            const markers = results.data.groups[0].items.map(res => {
                return {
                    latitude: res.venue.location.lat,
                    longitude: res.venue.location.lng,
                    isOpen: true,
                    isVisible: true,            
                }
            })
            this.setState({
                venues: venues,
                mapView: center,
                dropPins: markers,
            }, function () {
                console.log("Current state")
                console.log(this.state);
            })
        }
        )
    }

    render() {
        return (
            
            <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)` }}>
                <Navbar /><br /><br />

                    <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
        
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
                </Row>
                <br />
                <GoogleMap {...this.state} handlePinClick={this.handlePinClick} />
            </div>
        );
    }
}

export default home;