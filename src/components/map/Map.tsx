import "leaflet/dist/leaflet.css";
import "./Map.css";

import { Coordinate } from "../../App";
import { LatLng } from "leaflet";
import LocationMarker from "./LocationMarker";
import { MapContainer, TileLayer } from 'react-leaflet';
import RecenterMap from "./RecenterMap";

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
      className="map-container"
    >
      <RecenterMap center={new LatLng(location.lat, location.lng)} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker location={location} onPositionChange={(position) => onChangeLocation(position)} />
    </MapContainer>
  );
}