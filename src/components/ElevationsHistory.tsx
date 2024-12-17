import {memo} from "react";
import "./Elevation.css";
import {Elevation} from "../App.tsx";

type Props = {
  elevations: Elevation[];
}

// we don't want to re-render the History component if
// we are moving on map, or changing the input values
export default memo(function History({elevations} : Props) {
    console.log(elevations)
  return (
    <>
      <h3>Elevation history</h3>
      <ol className="history">
        {elevations.map((e, index) =>
            <li key={index} className={`${(index % 2 === 0) ? "history-item light" : "history-item dark"}`}>
                <span>Latitude: {e.coordinate.lat}</span>
                <span>Longitude: {e.coordinate.lng}</span>
                <span>{e.elevation}</span>
            </li>)
        }
      </ol>
    </>
  )
})
