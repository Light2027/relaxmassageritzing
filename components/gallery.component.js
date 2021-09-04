import {useRouter} from 'next/dist/client/router';
import {GetCommonContent, GetGalleryContent} from "../services/content.service";

import {GetImages} from "../services/image.service";

export default function GalleryComponent() {
  const router = useRouter();
  const locale = router.locale;
  const common = GetCommonContent();
  const content = GetGalleryContent();
  const images = GetImages();
  return <div id="gallery" className="border-bottom">
    <h1 className="text-center mt-2">Gallery</h1>
    
  </div>;
}
