import './App.css'
import {fetchElevation} from "./scripts/http.ts";
import {useEffect, useState} from "react";
import {useMyGeolocation} from "./hooks/useMyGeolocation.ts";

import Inputs from "./components/Inputs.tsx";
import Map from "./components/map/Map.tsx";
import Button from "./components/Button.tsx";

export type Coordinate = {
  lat: number;
  lng: number;
}

function App() {
  const { geoLocation, error } = useMyGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});

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
  }, [geoLocation, error]);

  return (
    <>
      <h1>Elevation calculator app</h1>
      <p>Choose longitude and altitude by clicking on map, or by setting input values.</p>

       <Map
        location={location}
        onChangeLocation={handlePositionChange}
      />

      <Inputs
        onSubmit={handleSubmit}
        onChangeLocation={handlePositionChange}
        location={location}
      />
      <Button onSubmit={handleSubmit}>Submit</Button>
    </>
  )
}

export default App
