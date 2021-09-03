import Image from 'next/image'

import styles from "./landing.module.css";

import logo from "../Images/Logo.png";

export default function LandingComponent() {
  return (
    <div className={styles.landingBackground}>
      <Image className={styles.logo} src={logo} alt=""/>
    </div>
  );
}
