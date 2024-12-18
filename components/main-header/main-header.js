import styles from "./navlink.module.css";
import NavLink from "@/components/main-header/navlink";

export default function MainHeader() {
  return(
    <>
      <nav>
        <ul className={styles.nav}>
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/history">History</NavLink></li>
        </ul>
      </nav>
    </>
  )
}