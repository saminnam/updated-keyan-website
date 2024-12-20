import ContactActions from "../../Components/ContactActions";
import GlobalTitle from "../../Components/GlobalTitle";

import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section>
      <GlobalTitle title={"CONTACT US"} />
      <ContactActions />
      <div className="w-full bg-gray-50 py-10">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-2 md:my-24">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div
              className="max-w-3xl"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 className="mb-2 text-3xl font-bold font-serif md:text-5xl">
                Ready to take your business to the next level?
              </h2>
              <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
                Contact us today to discuss your project and discover how our
                software solutions can drive your success.
              </p>
              <div className="md-flex items-center">
                <div id="my-map-display">
                  <iframe
                    title="map"
                    frameBorder="0"
                    className="lg:w-[500px] w-full shadow-lg shadow-gray-400 rounded-lg"
                    src="https://www.google.com/maps/embed/v1/place?q=vadapalani&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
