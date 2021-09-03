import Image from 'next/image'

import austrianFlag from "../Images/austria.flag.png";
import hungarianFlag from "../Images/hungary.flag.png";

import styles from "./navbar.module.css";

export default function NavbarComponent() {
  return <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <li class="nav-item">
          <div style={{width:"150px"}} class="d-flex flex-row align-items-center justify-content-center">
            <a class="nav-link w-50" href="#">
              <Image class="rounded" src={austrianFlag} alt=""/>
            </a>
            <a class="nav-link w-50" href="#">
              <Image class="rounded" src={hungarianFlag} alt=""/>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>;
}
