// TODO: Write style with media query for the widths size > bootstrap md => 25% otherwise 100%

export default function ContactComponent() {
  return <div id="contact" className="d-flex flex-column mb-5 pb-5">
    <h1 className="text-center mt-2">Contact me</h1>
    <p className="text-center border-bottom border-primary col-11 col-md-6 col-lg-3 align-self-center my-3 pb-5">
      I am always happy to get to know new people, please feel free to contact me and book an appointment.
    </p>
    <p className="col-11 col-md-6 col-lg-3 align-self-center mb-2">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
      <span className="mx-1"/>
      <a href="https://goo.gl/maps/Hxna2acvPvdJ4oLz6" target="_blank">
        7333, Dummy City, Dummy Street 99.
      </a>
      </span>
    </p>
    <p className="col-11 col-md-6 col-lg-3 align-self-center mb-2">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
      <span className="mx-1"/>
      <a href="tel: +996602222222">
        +99 660 2222222
      </a>
      </span>
    </p>
    <p className="col-11 col-md-6 col-lg-3 align-self-center mb-2">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
      </svg>
      <span className="mx-1"/>
      <a href="mailto: dummy@test.at">
        dummy@test.at
      </a>
      </span>
    </p>
  </div>;
}
