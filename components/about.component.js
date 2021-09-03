import Image from 'next/image'

import pfp from "../Images/Pfp.jpg";

export default function AboutComponent() {
  return <div id="about" className="container-fluid border-bottom">
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="my-3 px-5">
          <Image className="border border-2 border-secondary rounded" src={pfp} alt=""/>
        </div>
      </div>
      <div className="col-12 col-md-8 my-2 d-flex flex-column">
        <h1>Header</h1>
        <p>
          Some Text
        </p>
      </div>
    </div>
  </div>;
}
