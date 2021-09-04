import {useRouter} from 'next/dist/client/router';
import {GetCommonContent, GetServiceContent} from "../services/content.service";

export default function ServicesComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetServiceContent();
  const services = [
    {name: "1", duration: 30},
    {name: "2", duration: 60},
    {name: "3", duration: 30},
  ];

  return <div id="services" className="border-bottom d-flex flex-column justify-content-center">
    <h1 className="text-center mt-2">Services</h1>
    <div className="border border-2 border-dark bg-white col-11 col-md-6 col-lg-3 align-self-center rounded mt-3 mb-5">
      {services.map((s) => (
        <p key={s.name} className="text-center">{s.name} - {s.duration}</p>
      ))}
    </div>
  </div>;
}