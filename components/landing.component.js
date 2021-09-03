import NavbarComponent from "./navbar.component";

import styles from "../styles/landing.module.css";

export default function LandingComponent() {
  return (
    <div className={styles.landingBody}>
      <NavbarComponent />
    </div>
  );
}
