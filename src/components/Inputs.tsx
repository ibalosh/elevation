import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {Coordinate} from "../App.tsx";

type Props = {
  onSubmit: () => void;
  onChangeLocation: (value: number, type: "longitude" | "latitude") => void;
  location: Coordinate;
}

export default function Inputs({onSubmit, location, onChangeLocation}: Props) {
  return (
    <>
      <Input location={location.lat} coordinateType="latitude" onChangeInput={onChangeLocation}/>
      <Input location={location.lng} coordinateType="longitude" onChangeInput={onChangeLocation}/>
      <Button onSubmit={onSubmit}>Submit</Button>
    </>
  )
}