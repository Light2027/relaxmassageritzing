import Image from 'next/image'

import brandLogo from "../Images/Logo.brand.png";

import austrianFlag from "../Images/austria.flag.png";
import hungarianFlag from "../Images/hungary.flag.png";

import styles from "./navbar.module.css";

export default function NavbarComponent() {
  return <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <div style={{width:"150px"}} className="d-flex flex-row align-items-center justify-content-center">
            <a className="nav-link w-50 me-1" href="#">
              <Image className="rounded" src={austrianFlag} alt=""/>
            </a>
            <a className="nav-link w-50 ms-1" href="#">
              <Image className="rounded" src={hungarianFlag} alt=""/>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>;
}
