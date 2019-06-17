import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchForm';
import Results from '../Results/results';
import GoogleMap from '../Map/map';
import { Row, Col } from 'reactstrap';
import api from '../../lib/api';
import "react-table/react-table.css";


class home extends Component {
    state = {
        venues: [],
        dropPins: [],
        mapView: { lat: 49.2827, lng: -123.1207 },
        zoom: 12,
    }

    handlePinClick = (marker) => {
        marker.isOpen = true;
        this.setState = ({ dropPins: Object.assign(this.state.dropPins, marker) });
    }

    searchSubmit = (event) => {
        event.preventDefault();
        const location = event.target.elements.locationSearch.value;
        const activity = event.target.elements.locationActivity.value;

        if(location && activity){
        api.getPlaces(activity, location, (results) => {
            const mapView = results.data.geocode.center;
            const dropPins = results.data.groups[0].items.map(res => {
                return {
                    latitude: res.venue.location.lat,
                    longitude: res.venue.location.lng,
                    isOpen: true,
                    isVisible: true,
                }
            })

            let venues = results.data.groups[0].items.map(resultItem => {
                return {
                    name: resultItem.venue.name,
                    address: resultItem.venue.location.formattedAddress,
                    directions: <a href=
                        {"https://www.google.com/maps/search/?api=1&query="
                            + resultItem.venue.location.lat + ","
                            + resultItem.venue.location.lng}
                        target="_blank" rel="noopener noreferrer">Open in Google Maps</a>,
                    foursquare: <a href=
                        {"https://foursquare.com/v/"
                            + resultItem.venue.name + "/"
                            + resultItem.venue.id}
                        target="_blank" rel="noopener noreferrer">Foursquare</a>
                }
            })
            this.setState({
                venues,
                mapView,
                dropPins,
            })
        })
    } else {
        window.alert("Please enter some values to begin search")
    }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)` }}>
                <Navbar/><br /><br />
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <SearchForm searchSubmit={this.searchSubmit} />
                        <Results {...this.state} />
                    </Col>
                </Row>
                <br />
                <GoogleMap {...this.state} handlePinClick={this.handlePinClick} />
            </div>
        );
    }
}
export default home;