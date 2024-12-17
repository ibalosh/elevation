import './App.css'
import {fetchElevation} from "./scripts/http";
import {useEffect, useState} from "react";
import {useMyGeolocation} from "./hooks/useMyGeolocation";

import Button from "./components/Button";
import Map from "./components/map/Map";
import UserInput from "./components/UserInput";
import Elevation from "./components/Elevation";
import History from "./components/ElevationsHistory";

export type Coordinate = {
  lat: number;
  lng: number;
}

export type Elevation = {
    coordinate: Coordinate;
    elevation: number;
}

function App() {
  const { geoLocation, error } = useMyGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});
  const [elevations, setElevations] = useState<Elevation[]>([]);
  const showElevations = elevations.length > 0;

  function handlePositionChange(latLng : Coordinate) {
    setLocation(prevState => ({...prevState, ...latLng}));
  }

  function handleSubmit() {
    fetchElevation(location.lat, location.lng)
      .then(data => {
          const newElevations = [{coordinate: location, elevation: data}]
          const prevElevations = elevations.map((item) => ({
              coordinate: { ...item.coordinate },
              elevation: item.elevation,
          }));

          newElevations.push(...prevElevations);
          setElevations(newElevations);
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

      <Elevation elevation={elevations.length > 0 ? elevations[0].elevation : null} />
      <Button onSubmit={handleSubmit}>Calculate elevation</Button>
      {showElevations && <History elevations={elevations} />}
    </>
  )
}

export default App
