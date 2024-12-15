import './App.css'
import {fetchElevation} from "./scripts/http";
import {useEffect, useState} from "react";
import {useMyGeolocation} from "./hooks/useMyGeolocation";

import Button from "./components/Button";
import Map from "./components/map/Map";
import UserInput from "./components/UserInput";
import Elevation from "./components/Elevation";
import History from "./components/ElevationsHistory.tsx";

export type Coordinate = {
  lat: number;
  lng: number;
}

function App() {
  const { geoLocation, error } = useMyGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});

  const [elevations, setElevations] = useState<number[]>([]);

  function handlePositionChange(latLng : Coordinate) {
    setLocation(prevState => ({...prevState, ...latLng}));
  }

  function handleSubmit() {
    fetchElevation(location.lat, location.lng)
      .then(data => {
        setElevations(prevState => [data.results[0].elevation, ...prevState]);
      })
      .catch(error => {
        alert(`Error occurred: ${error.message}`);
      })
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

      <UserInput
        onSubmit={handleSubmit}
        onChangeLocation={handlePositionChange}
        location={location}
      />

      <Elevation elevation={elevations.length > 0 ? elevations[elevations.length-1] : null} />
      <Button onSubmit={handleSubmit}>Submit</Button>
      {elevations.length > 0 && <History elevations={elevations} />}
    </>
  )
}

export default App
