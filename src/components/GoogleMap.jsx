import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const GoogleMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyAPaJD0dDHU-xNIjXfRro6YM85DQ5uTRVw" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPaJD0dDHU-xNIjXfRro6YM85DQ5uTRVw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `445px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

export default GoogleMapComponent