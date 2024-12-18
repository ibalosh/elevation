import {Coordinate} from "../dashboard";
import {LatLng} from "leaflet";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";

type Props = {
  location: Coordinate;
  onPositionChange: (position: LatLng) => void;
}

// Marker that can be moved around to change the location
export default function LocationMarker({ location, onPositionChange }: Props) {
  const [position, setPosition] = useState<LatLng | null>(new LatLng(location.lat, location.lng));

  const map = useMapEvents({
    click(e) {
      const newPosition = e.latlng;

      setPosition(newPosition);
      onPositionChange(newPosition);
      map.flyTo(newPosition, map.getZoom());
    },
  });

  // Update the marker's position dynamically when the location prop changes
  useEffect(() => {
    setPosition(new LatLng(location.lat, location.lng));
  }, [location]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Marker at {position.lat}, {position.lng}</Popup>
    </Marker>
  );
}