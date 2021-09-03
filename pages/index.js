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
      <Head>
        <title>Relax Massage Ritzing</title>

        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
      </Head>

      <NavbarComponent/>
      <LandingComponent />
      <AboutComponent />
      <ServicesComponent />
      <GalleryComponent />
      <ContactComponent />

      <style global jsx>{`
        body {
          margin: 0;
          background-color: #f7f6f6;
        }
      `}</style>
    </div>
  );
}
