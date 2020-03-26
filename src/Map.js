import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import services from './utils/services.js'

const mapStyles = {
    width: '100vw',
    height: '100vh'
};



const MyMap = (props) => {

  const displayMarker = () => {
      return services.map((service, index) => {
        return <Marker key={index} id={index} position={{
         lat: services.lat,
         lng: services.lng,
       }}
    />
})
}
    return (
        <Map
          google={props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 53.507351, lng: 0.127758}}
          >
          {displayMarker()}
        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDVVvArLl32Y8YQSPgSh2Mv89hOmdfIOQw'
  })(MyMap);
