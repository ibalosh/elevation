import {memo} from "react";
import "./Elevation.css";

type Props = {
  elevations: number[];
}

// we don't want to re-render the History component if
// we are moving on map, or changing the input values
export default memo(function History({elevations} : Props) {
  return (
    <div className="history">
    {elevations.map((elevation, index) =>
      <p key={index} className={`${(index%2 === 0) ? "history-item light" : "history-item dark"}`}>
        {elevation}
      </p>)
    }
    </div>
  )
})