import {useEffect, useState} from "react";
import {Coordinate} from "../App.tsx";

export const useGeolocation = (): {
  geoLocation: Coordinate | null,
  error: string | null
} => {
  const [geoLocation, setGeoLocation] = useState<Coordinate|null>(null);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setGeoLocation({lat: latitude, lng: longitude});
        console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
      }

      const error = (error: GeolocationPositionError) => {
        setError(`Error getting location: ${error.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setError('Geolocation is not supported by this browser.');
      return;
    }
  },[]);

  return {
    geoLocation,
    error
  };
}
