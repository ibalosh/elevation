import {Dispatch, SetStateAction, useEffect, useRef} from "react";
import L, {LatLngLiteral, Marker} from "leaflet";
import {Coordinate} from "../App.tsx";

export function useMap(
  mapId: string,
  coordinate: LatLngLiteral,
  setLocation: Dispatch<SetStateAction<Coordinate>>
) {
  let map: L.Map;
  const currentMarker = useRef<Marker | null>(null);

  function initializeMap(maxZoom: number = 20, initialZoom: number = 13) {
    const urlTemplate = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    map = L.map(mapId).setView(coordinate, initialZoom);

    L.tileLayer(urlTemplate, {
      maxZoom
    }).addTo(map);

    currentMarker.current = L.marker(coordinate).addTo(map)

    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      currentMarker.current?.setLatLng([lat, lng]);
      setLocation((prevState: Coordinate) => ({...prevState,...{lat, lng}}));
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    });
  }

  function tearDownMap() {
    map.off("click");
    map.remove();
  }

  useEffect(() => {
    initializeMap();

    return () => {
      tearDownMap();
    };
  }, [initializeMap, tearDownMap]);
}