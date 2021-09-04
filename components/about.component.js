import Image from 'next/image'

import pfp from "../Images/Pfp.jpg";

import {useRouter} from 'next/dist/client/router';
import {GetCommonContent, GetAboutContent} from "../services/content.service";

export default function AboutComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetAboutContent();
  return <div id="about" className="container-fluid border-bottom">
    <div className="row justify-content-center">
      <div className="col-10 col-md-3 d-flex justify-content-center">
        <div className="my-3 col-8 col-md-8">
          <Image className="rounded" src={pfp} alt={content[locale].pfpAlt}/>
        </div>
      </div>
      <div className="col-10 col-md-7 my-2 d-flex flex-column">
        <h1>{content[locale].header} 👋</h1>
        <p>
          {content[locale].aboutMe}
        </p>
      </div>
    </div>
  </div>;
}
