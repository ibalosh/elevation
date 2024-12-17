import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import styles from "./map.module.css";

import { LatLng } from "leaflet";
import LocationMarker from "./location-marker";
import { MapContainer, TileLayer } from 'react-leaflet';
import RecenterMap from "./recenter-map";
import {Coordinate} from "@/components/dashboard";


type Props = {
  location: Coordinate;
  onChangeLocation: (coordinate: Coordinate) => void;
};

const DEFAULT_MAP_ZOOM_NUMBER = 13;

export default function Map({ location, onChangeLocation }: Props) {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={DEFAULT_MAP_ZOOM_NUMBER}
      scrollWheelZoom={false}
      className={styles.container}
    >
      <RecenterMap center={new LatLng(location.lat, location.lng)} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker location={location} onPositionChange={(position) => onChangeLocation(position)} />
    </MapContainer>
  );
}
