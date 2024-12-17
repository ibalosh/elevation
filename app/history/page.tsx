import styles from "../page.module.css";
import {getElevations} from "@/lib/prisma";
import ElevationsHistory from "@/components/elevation-history";

export default async function Home() {
  const elevations = await getElevations(20);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Elevation history</h3>
        <ElevationsHistory elevations={elevations.map(e => {
          return {elevation: e.elevation, coordinate: {lat: e.lat, lng: e.lng}}
        })} />
      </main>
    </div>
  );
}
