import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';

import NavbarComponent from "../components/navbar.component";
import LandingComponent from "../components/landing.component";
import AboutComponent from "../components/about.component";
import ServicesComponent from "../components/services.component";
import GalleryComponent from "../components/gallery.component";
import ContactComponent from "../components/contact.component";
import FooterComponent from "../components/footer.component";

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

        <meta name="description" lang="de" content="Rücken-, Hüften- oder Beinschmerzen? Wie wäre eine relaxierende Massage gleich in der Nähe? Buche noch heute einen Termin. Relax Massage Ritzing."/>
        <meta name="description" lang="hu" content="Hát-, csípő- vagy láb fájás? Mit szólnál egy relaxáló masszáshoz rögtön a közelben? Könyvelj egy idöpontott még ma. Relax Massage Ritzing."/>
      </Head>

      <NavbarComponent/>
      <LandingComponent />

      <h1>Comming Soon...</h1>
      <p hidden={true}>
        Insert components back in here.
      </p>
      
      <FooterComponent/>

      <style global jsx>{`
        body {
          margin: 0;
          background-color: #f7f6f6;
        }
      `}</style>
    </div>
  );
}


// To add back in:
/*
<AboutComponent />
<ServicesComponent />
<GalleryComponent/>
<ContactComponent />
*/