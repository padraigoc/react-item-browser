import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent =
    withScriptjs(withGoogleMap(props => (
        <GoogleMap zoom={props.zoom} center={props.mapView}>
            {props.dropPins &&
                props.dropPins.filter(marker => marker.isVisible).map((marker, id) => {
                    return (
                        <Marker
                            onClick={() => props.handlePinClick(marker)}
                            key={id}
                            position={{ lat: marker.latitude, lng: marker.longitude }}>
                            <InfoWindow>
                                <p>{props.venues[id].name}</p>
                            </InfoWindow>
                        </Marker>
                    );
                })}
        </GoogleMap>
    ))
    );


export default class map extends Component {
    render() {
        return (
            <MyMapComponent
                {...this.props}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBHCh9_4JcSiOOn2DEAuDm3dvB7Tp8Shn8" 
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

