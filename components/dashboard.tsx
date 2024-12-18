"use client";

import {useEffect, useState} from "react";
import {useMyGeolocation} from "@/hooks/useMyGeolocation";

import Button from "./button";
import UserInput from "./user-input";
import MostRecentElevation from "./most-recent-elevation";
import MyMap from "@/components/map/my-map";
import {createElevationAction} from '@/app/actions'
import ElevationsHistory from "@/components/history";

export type Coordinate = {
  lat: number;
  lng: number;
}

export type Elevation = {
  coordinate: Coordinate;
  elevation: number;
}

function Dashboard() {
  const { geoLocation, error } = useMyGeolocation();
  const [location, setLocation] = useState<Coordinate>({lat: 0, lng: 0});
  const [elevations, setElevations] = useState<Elevation[]>([]);

  function handlePositionChange(latLng : Coordinate) {
    setLocation(prevState => ({...prevState, ...latLng}));
  }

  function handleSubmit() {
    createElevationAction(location.lat, location.lng).then(data => {
      if (data !== null) {
        const newElevations = elevations.map((item) => ({
          coordinate: { ...item.coordinate },
          elevation: item.elevation,
        }));

        newElevations.push({coordinate: location, elevation: data});
        setElevations(newElevations);
      }

    }).catch(error => {
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
      <MyMap location={location} onChangeLocation={handlePositionChange}/>

      <UserInput
        onSubmit={handleSubmit}
        onChangeLocation={handlePositionChange}
        location={location}
      />

      <MostRecentElevation elevation={elevations.length > 0 ? elevations[elevations.length - 1].elevation : null}/>
      <Button
        onSubmit={handleSubmit}
      >
        Calculate elevation
      </Button>
      <h3>Recent elevation history</h3>
      <ElevationsHistory elevations={elevations}/>
    </>
  )
}

export default Dashboard
