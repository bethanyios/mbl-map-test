import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import services from './utils/services.js';
import serviceMark from './assets/watermelon.svg';

const mapStyles = {
    width: '100vw',
    height: '100vh'
};



const MyMap = (props) => {

  const displayMarker = () => {
      return services.map((service, index) => {
        return <Marker key={index} id={index} position={{
         lat: service.lat,
         lng: service.lng,
       }}
       icon={{
         url: serviceMark,
         anchorPoint: [-50,0]
       }}


    />
})
}
console.log(services[0].lat);
    return (
        <Map
          google={props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{ lat: 53, lng: 0.127758}}

          >
          {displayMarker()}

        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: ''
  })(MyMap);
