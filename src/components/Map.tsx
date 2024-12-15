import "leaflet/dist/leaflet.css";
import "./Map.css"
import {useMap} from "../hooks/useMap.ts";
import {LatLng} from "leaflet";
import {Coordinate} from "../App.tsx";
import {Dispatch, SetStateAction} from "react";
const MAP_ID = "interactive-map";

type Props = {
 coordinate: Coordinate;
 setLocation: Dispatch<SetStateAction<Coordinate>>;
}

const Map = ({coordinate, setLocation}: Props) => {
  useMap(MAP_ID, new LatLng(coordinate.lat, coordinate.lng), setLocation);

  return (
    <div>
      <div id={MAP_ID} className="map"></div>
    </div>
  );
};

export default Map;