import {useEffect, useState} from "react";
import {Coordinate} from "../App.tsx";

export const useMyGeolocation = (): {
  geoLocation: Coordinate | null,
  error: string | null
} => {
  const [geoLocation, setGeoLocation] = useState<Coordinate|null>(null);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position: GeolocationPosition) => {
        const latitude = parseFloat(position.coords.latitude.toFixed(10));
        const longitude = parseFloat(position.coords.longitude.toFixed(10));

        setGeoLocation({lat: latitude, lng: longitude});
      }

      const error = (error: GeolocationPositionError) => {
        setError(`Error getting location: ${error.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  },[]);

  return {
    geoLocation,
    error
  };
}
