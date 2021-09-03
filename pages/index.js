import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';

import NavbarComponent from "../components/navbar.component";
import LandingComponent from "../components/landing.component";
import AboutComponent from "../components/about.component";
import ServicesComponent from "../components/services.component";
import GalleryComponent from "../components/gallery.component";
import ContactComponent from "../components/contact.component";

export default function IndexPage() {
  return (
    <div>
      <NavbarComponent/>
      <LandingComponent />
      <AboutComponent />
      <ServicesComponent />
      <GalleryComponent />
      <ContactComponent />

      <style global jsx>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
