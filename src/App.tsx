import './App.css'
import {fetchElevation} from "./scripts/http.ts";
import {useEffect, useState} from "react";
import {useGeolocation} from "./hooks/useGeolocation.ts";
import Inputs from "./components/Inputs.tsx";
import Map from "./components/Map.tsx";

export type Coordinate = {
  lat: number,
  lng: number
}

function App() {
  const { geoLocation, error } = useGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});
  const [showMap, setShowMap] = useState(true);

  function handleChangeLocation(value: number, type: "longitude" | "latitude") {
    const partialCoordinate: Partial<Coordinate> = type === "latitude" ? {lat: value} : {lng: value};
    setLocation(prevState => ({...prevState, ...partialCoordinate}));
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
    <div>
      <h1>Leaflet Map Example</h1>
      <p>Choose longitude and altitude and click submit to get elevation.</p>
      {showMap && <Map
        onSubmit={handleSubmit}
        onChangeLocation={handleChangeLocation}
        location={location}
      />}

      {!showMap && <Inputs
        onSubmit={handleSubmit}
        onChangeLocation={handleChangeLocation}
        location={location}
      />}
    </div>
  )
}

export default App
