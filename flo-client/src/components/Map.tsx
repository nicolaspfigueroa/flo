import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { journey } from '../interfaces/journey';

import Location from './Location';

const mapContainer = {
  lat: 37.433431,
  lng: -100.500331,
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;

interface Props{
  journeys : journey[]
}
const Map: React.FC<Props> = ({ journeys }) => {
  const mapOptions = {
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyCJRh8iW___YUpIZ-Ukzn2Rk48wYeRFk9M"} language='en'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapContainer}
        zoom={4}
        options={mapOptions}
      >
        {journeys &&
          journeys.map((journey) => {
            return (
              <Location
                key={journey._id}
                id={journey._id}
                coord={journey.coordinates}
              ></Location>
            );
          })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
