import Input from "./Input.tsx";
import {Coordinate} from "../App.tsx";
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
        name="latitude"
        type="number"
        step="0.01"
        onChangeInput={
          (e: ChangeEvent<HTMLInputElement>) => onChangeLocation({lat: Number(e.target.value), lng: location.lng})
        }
      />
      <Input
        location={location.lng}
        name="longitude"
        type="number"
        step="0.01"
        onChangeInput={
          (e: ChangeEvent<HTMLInputElement>) => onChangeLocation({lat: location.lat, lng: Number(e.target.value)})
        }
      />
    </div>
  )
}