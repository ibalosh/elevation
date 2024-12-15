import {memo} from "react";
import "./Elevation.css";

type Props = {
  elevations: number[];
}

// we don't want to re-render the History component if
// we are moving on map, or changing the input values
export default memo(function History({elevations} : Props) {
  return (
    <>
      <h3>Elevation history</h3>
      <ol className="history">
        {elevations.map((elevation, index) =>
          <li key={index} className={`${(index % 2 === 0) ? "history-item light" : "history-item dark"}`}>
            {elevation}
          </li>)
        }
      </ol>
    </>
  )
})