import styles from "./page.module.css";
import Dashboard from "@/components/dashboard";

export default async function HomePage() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.header}>Elevation calculator app</h1>
        <p>Choose longitude and altitude by clicking on map, or by setting input values.</p>
        <Dashboard/>
      </main>
    </div>
  );
}
