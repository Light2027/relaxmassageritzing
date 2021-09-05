import Image from 'next/image'

import brandLogo from "../Images/Logo.brand.webp";

import austrianFlag from "../Images/austria.flag.webp";
import hungarianFlag from "../Images/hungary.flag.webp";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import {useRouter} from 'next/dist/client/router';
import {germanKey, hungarianKey, GetCommonContent, GetNavbarContent} from "../services/content.service";

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
                <Nav.Link href="#gallery" hidden={true}>{content[locale].gallery}</Nav.Link>
                <Nav.Link href="#contact">{content[locale].contact}</Nav.Link>
                <Nav.Item>
                  <div style={{width:"120px"}} className="d-flex flex-row align-items-center justify-content-center">
                    <Nav.Link className="w-50 me-1" onClick={_ => router.push("/","/",{scroll: false, locale: germanKey})}>
                      <Image className="rounded" src={austrianFlag} alt={content[locale].austrianFlag}/>
                    </Nav.Link>
                    <Nav.Link className="w-50 me-1" onClick={_ => router.push("/","/",{scroll: false, locale: hungarianKey})}>
                      <Image className="rounded" src={hungarianFlag} alt={content[locale].hungarianFlag}/>
                    </Nav.Link>
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>;
}
