import "leaflet/dist/leaflet.css";
import "./Map.css"

import {useRef} from "react";
import {useMap} from "../hooks/useMap.ts";
import {LatLng} from "leaflet";
import {Coordinate} from "../App.tsx";
import Button from "./Button.tsx";

const MAP_ID = "interactive-map";

type Props = {
  onSubmit: () => void;
  onChangeLocation: (value: number, type: "longitude" | "latitude") => void;
  location: Coordinate;
}

export default function Map({location, onSubmit, onChangeLocation}: Props)  {
  const locationRef = useRef<Coordinate>(location);
  useMap(MAP_ID, new LatLng(location.lat, location.lng), updateLocation);

  function updateLocation(lat: number, lng: number) {
    locationRef.current = {lat, lng};
  }

  return <>
    <div id={MAP_ID} className="map"></div>
    <Button onSubmit={onSubmit}>Submit</Button>
  </>
};