import Image from 'next/image'

import austrianFlag from "../Images/austria.flag.png";
import hungarianFlag from "../Images/hungary.flag.png";

import styles from "./navbar.module.css";

export default function NavbarComponent() {
  return <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item" style={{width: "5% !important"}}>
          <a class="nav-link" href="#">
            <Image class="rounded" src={austrianFlag} alt=""/>
          </a>
        </li>
        <li class="nav-item" style={{width: "5% !important"}}>
          <a class="nav-link" href="#">
            <Image class="rounded" src={hungarianFlag} alt=""/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
}
