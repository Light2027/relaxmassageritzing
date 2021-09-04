import Image from 'next/image'

import styles from "./landing.module.css";

import logo from "../Images/Logo.png";

import {useRouter} from 'next/dist/client/router';
import {GetLandingContent} from "../services/content.service";

export default function LandingComponent() {
  const router = useRouter();
  const locale = router.locale;
  const content = GetLandingContent();
  return (
    <div className={styles.landingBackground}>
      <Image className={styles.logo} src={logo} alt=""/>
    </div>
  );
}
