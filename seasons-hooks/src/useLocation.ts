import { useState, useEffect } from 'react';
import { SeasonsState } from './models/SeasonsPropsState';

const useLocation = (): SeasonsState => {
  const [lat, setLat] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      err => {
        setErrorMessage(err.message);
      }
    ),
      [];
  });

  return { lat: lat, errorMessage: errorMessage };
};

export default useLocation;
