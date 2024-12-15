import Input from "./Input";
import {Coordinate} from "../App";
import {ChangeEvent} from "react";

type Props = {
  onSubmit: () => void;
  onChangeLocation: (position: Coordinate) => void;
  location: Coordinate;
}

export default function Inputs({location, onChangeLocation}: Props) {
  return (
    <div className="input-container">
      <Input
        location={location.lat}
        name="Latitude"
        type="number"
        step="0.01"
        onChangeInput={
          (e: ChangeEvent<HTMLInputElement>) => onChangeLocation({lat: Number(e.target.value), lng: location.lng})
        }
      />
      <Input
        location={location.lng}
        name="Longitude"
        type="number"
        step="0.01"
        onChangeInput={
          (e: ChangeEvent<HTMLInputElement>) => onChangeLocation({lat: location.lat, lng: Number(e.target.value)})
        }
      />
    </div>
  )
}