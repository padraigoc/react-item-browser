import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent =
    withScriptjs(withGoogleMap((props) =>
        <GoogleMap zoom={props.zoom} center={props.mapView}>      
            {props.dropPins
                .map((pin, id) => (
                    <Marker key={id} position={{ lat: pin.latitude, lng: pin.longitude }} /> ))
            }
        </GoogleMap>
    ))

class map extends Component {
    render() {
        return (
            <MyMapComponent
                {...this.props}
                //need to hide API KEY!!
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBHCh9_4JcSiOOn2DEAuDm3dvB7Tp8Shn8"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default map;