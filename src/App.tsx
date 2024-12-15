import './App.css'
import Map from "./components/Map.tsx";
import {fetchElevation} from "./scripts/http.ts";
import {useEffect, useState} from "react";
import Input from "./components/Input.tsx";
import {useGeolocation} from "./hooks/useGeolocation.ts";
import Button from "./components/Button.tsx";

export type Coordinate = {
  lat: number,
  lng: number
}

function App() {
  const { geoLocation, error } = useGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});

  useEffect(() => {
    if (!error) {
      if (geoLocation)
        setLocation(geoLocation);
    }
  }, [geoLocation, error]);

  function handleSubmit() {
    fetchElevation(location.lat, location.lng).then(data => {
        alert(`Elevation: ${data.results[0].elevation}`);
      }
    )
  }

  function handleInputCoordinate(value: number, type: "longitude" | "latitude") {
    const partialCoordinate: Partial<Coordinate> = type === "latitude" ? {lat: value} : {lng: value};
    setLocation(prevState => ({...prevState, ...partialCoordinate}));
  }

  return (
    <div>
      <h1>Leaflet Map Example</h1>
      <p>Choose longitude and altitude and click sumbit to get elevation.</p>
      <Map coordinate={location} setLocation={setLocation}/>
      <Input location={location.lat} coordinateType="latitude" onChangeInput={handleInputCoordinate}/>
      <Input location={location.lng} coordinateType="longitude" onChangeInput={handleInputCoordinate}/>
      <Button handleClickAction={handleSubmit}>Submit</Button>
    </div>
  )
}

export default App
