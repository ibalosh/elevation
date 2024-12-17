import {useEffect, useState} from "react";


export const useMyGeolocation = (): {
  geoLocation: {lat: number, lng: number} | null,
  error: string | null
} => {
  const [geoLocation, setGeoLocation] = useState<{lat: number, lng: number}|null>(null);
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
