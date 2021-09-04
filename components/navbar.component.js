import Image from 'next/image'

import brandLogo from "../Images/Logo.brand.png";

import austrianFlag from "../Images/austria.flag.png";
import hungarianFlag from "../Images/hungary.flag.png";

import styles from "./navbar.module.css";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import {useRouter} from 'next/dist/client/router';
import {GetCommonContent, GetNavbarContent} from "../services/content.service";

export default function NavbarComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetNavbarContent();
  return <Navbar variant="dark" bg="dark" sticky="top" expand="lg">
          <Container fluid>
            <Navbar.Brand className="d-flex flex-row align-items-top justify-content-start" href="#">
            <Image width={80} height={40} src={brandLogo} alt=""/>
              <span className="mx-1"/>
              {common[locale].title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">{content[locale].about}</Nav.Link>
                <Nav.Link href="#services">{content[locale].services}</Nav.Link>
                <Nav.Link href="#gallery">{content[locale].gallery}</Nav.Link>
                <Nav.Link href="#contact">{content[locale].contact}</Nav.Link>
                <Nav.Item>
                  <div style={{width:"120px"}} className="d-flex flex-row align-items-center justify-content-center">
                    <Nav.Link className="w-50 me-1" onClick={_ => router.push("/","/",{locale: "de"})}>
                      <Image className="rounded" src={austrianFlag} alt=""/>
                    </Nav.Link>
                    <Nav.Link className="w-50 me-1" onClick={_ => router.push("/","/",{locale: "hu"})}>
                      <Image className="rounded" src={hungarianFlag} alt=""/>
                    </Nav.Link>
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>;
}
