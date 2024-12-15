import './App.css'
import {fetchElevation} from "./scripts/http";
import {useEffect, useState} from "react";
import {useMyGeolocation} from "./hooks/useMyGeolocation";

import Button from "./components/Button";
import Map from "./components/map/Map";
import UserInput from "./components/UserInput";
import {defaultCoodrinates} from "./config/config.ts";

export type Coordinate = {
  lat: number;
  lng: number;
}

function App() {
  const { geoLocation, error } = useMyGeolocation();
  const [location, setLocation] = useState<Coordinate>(defaultCoodrinates);

  function handlePositionChange(latLng : Coordinate) {
    setLocation(prevState => ({...prevState, ...latLng}));
  }

  function handleSubmit() {
    fetchElevation(location.lat, location.lng).then(data => {
        alert(`Elevation: ${data.results[0].elevation}`);
      }
    )
  }

  useEffect(() => {
    if (!error && geoLocation) {
      setLocation(geoLocation);
    }
    else if (error) {
      console.warn(error);
    }
  }, [geoLocation, error]);

  return (
    <>
      <h1>Elevation calculator app</h1>
      <p>Choose longitude and altitude by clicking on map, or by setting input values.</p>

       <Map
        location={location}
        onChangeLocation={handlePositionChange}
      />

      <UserInput
        onSubmit={handleSubmit}
        onChangeLocation={handlePositionChange}
        location={location}
      />
      <Button onSubmit={handleSubmit}>Submit</Button>
    </>
  )
}

export default App
