import {useMap} from "react-leaflet";
import {useEffect} from "react";
import {LatLng} from "leaflet";

//Helper component to recenter the map dynamically
export default function RecenterMap({ center }: { center: LatLng }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}