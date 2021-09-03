import LandingComponent from "../components/landing.component";
import AboutComponent from "../components/about.component";
import ServicesComponent from "../components/services.component";
import GalleryComponent from "../components/gallery.component";
import ContactComponent from "../components/contact.component";

export default function IndexPage() {
  return (
    <div>
      <LandingComponent />
      <AboutComponent />
      <ServicesComponent />
      <GalleryComponent />
      <ContactComponent />
    </div>
  );
}
