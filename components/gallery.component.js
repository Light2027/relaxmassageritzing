import {useRouter} from 'next/dist/client/router';
import {Row, Col, Container} from 'react-bootstrap';
import {GetCommonContent, GetGalleryContent} from "../services/content.service";

import {GetImages} from "../services/image.service";

export default function GalleryComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetGalleryContent();
  return <div id="gallery" hidden={true} className="border-bottom">
    <h1 className="text-center mt-2">{content[locale].title}</h1>
    <Container fluid className="m-3">
      <Row className="justify-content-center">
        
      </Row>
    </Container>
  </div>;
}
