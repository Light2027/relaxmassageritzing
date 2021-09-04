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
      <div className="col-12 col-md-4">
        <div className="my-3">
          <Image className="border border-2 border-secondary rounded" src={pfp} alt=""/>
        </div>
      </div>
      <div className="col-12 col-md-7 my-2 d-flex flex-column">
        <h1>Header</h1>
        <p>
          Some Text
        </p>
      </div>
    </div>
  </div>;
}
