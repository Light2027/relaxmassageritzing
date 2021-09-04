import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';

import NavbarComponent from "../components/navbar.component";
import LandingComponent from "../components/landing.component";
import AboutComponent from "../components/about.component";
import ServicesComponent from "../components/services.component";
import GalleryComponent from "../components/gallery.component";
import ContactComponent from "../components/contact.component";

import {useRouter} from 'next/dist/client/router';
import {GetCommonContent} from "../services/content.service";

export default function IndexPage() {
  // TODO: Add galery back

  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  return (
    <div>
      <Head>
        <title>{common[locale].title}</title>

        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavbarComponent/>
      <LandingComponent />
      <AboutComponent />
      <ServicesComponent />
      <GalleryComponent/>
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
