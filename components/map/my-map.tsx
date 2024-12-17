import {useMemo} from "react";
import dynamic from "next/dynamic";
import {Coordinate} from "@/components/dashboard";

type Props = {
  location: Coordinate;
  onChangeLocation: (coordinate: Coordinate) => void;
};

export default function MyMap({location, onChangeLocation}: Props) {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map/map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])


  return <div>
    <Map location={location} onChangeLocation={onChangeLocation}/>
  </div>
}