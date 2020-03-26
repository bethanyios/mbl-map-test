import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100vw',
    height: '100vh'
};

const MyMap = (props) => {
    return (
        <Map
          google={props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 53.507351, lng: 0.127758}}
        />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDVVvArLl32Y8YQSPgSh2Mv89hOmdfIOQw'
  })(MyMap);