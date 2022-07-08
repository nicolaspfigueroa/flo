import React from 'react';
import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

interface Props{
  coord : any;
  id : string;
}
const Location: React.FC<Props> = ({ coord, id }) => {
  const navigate = useNavigate();

  return (
    <Marker
      position={coord}
      onClick={() => {
        navigate('/journeys/' + id);
      }}
    />
  );
}

export default Location;
