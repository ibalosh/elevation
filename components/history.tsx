import {memo} from "react";
import styles from "./elevation.module.css";
import {Elevation} from "@/components/dashboard";

type Props = {
  elevations: Elevation[];
}

// we don't want to re-render the History component if
// we are moving on map, or changing the input values
export default memo(function History({elevations} : Props) {
  return (
    <>
      <ol className={styles.history}>
        {elevations.map((elevation, index) =>
          <li key={index} className={`${(index % 2 === 0) ?
            `${styles.historyItem} ${styles.light}` : `${styles.historyItem} ${styles.dark}`}`}>
            <span>Longitude: {elevation.coordinate.lat}</span>
            <span>Latitude: {elevation.coordinate.lng}</span>
            <span>Elevation: {elevation.elevation}</span>
          </li>)
        }
      </ol>
    </>
  )
})