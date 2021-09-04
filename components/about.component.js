import {useRouter} from 'next/dist/client/router';
import {GetCommonContent, GetAboutContent} from "../services/content.service";

export default function AboutComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetAboutContent();
  return <div id="about" className="container-fluid border-bottom">
    <div className="row justify-content-center">
      <div className="d-flex flex-column">
        <h1 className="text-center">{content[locale].header} 👋</h1>
        <p className="text-center">
          {content[locale].aboutMe}
        </p>
      </div>
    </div>
  </div>;
}
