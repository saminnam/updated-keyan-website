import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import CommonHero from "../Components/CommonHero";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Handle form submission for creating a new contact message
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contacts", formData);
      alert("Form submitted successfully!"); // Success alert
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error saving contact", error);
      alert("There was an error submitting the form. Please try again."); // Error alert
    }
  };

  return (
    <section>
      <CommonHero title={"CONTACT US"} />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-3xl">
              <h2 className="mb-2 text-3xl font-bold md:text-5xl">
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
            <div className="mx-auto  max-w-xl p-8 text-center rounded-lg shadow-lg shadow-gray-400">
              <h3 className="text-2xl font-bold md:text-3xl font-serif">
                Feel free to contact
              </h3>
              <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
                Are you prepared to elevate your business to new heights? Reach
                out to us today.
              </p>
              <form
                className="mx-auto mb-4 max-w-sm h-[400px] text-left"
                name="wf-form-password"
                onSubmit={handleSubmit}
              >
                <div className="main">
                  <div className="relative mb-5">
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input block h-9 w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
                    />
                    <label className="absolute left-2 top-2">
                      <span className="transition-all delay-[0ms] left-0">
                        U
                      </span>
                      <span className="transition-all delay-[75ms] left-[14px]">
                        s
                      </span>
                      <span className="transition-all delay-[150ms] left-[23px]">
                        e
                      </span>
                      <span className="transition-all delay-[225ms] left-[34px]">
                        r
                      </span>
                      <span className="transition-all delay-[300ms] left-[42px]">
                        n
                      </span>
                      <span className="transition-all delay-[375ms] left-[54px]">
                        a
                      </span>
                      <span className="transition-all delay-[450ms] left-[64px]">
                        m
                      </span>
                      <span className="transition-all delay-[525ms] left-[81px]">
                        e
                      </span>
                      <p className="absolute -left-2 -top-4 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                        Username
                      </p>
                    </label>
                  </div>
                  <div className="relative mb-5">
                    <input
                      required
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input block rounded-md text-sm"
                    />
                    <label className="absolute left-2 top-2 w-full">
                      <span className="transition-all delay-[0ms] left-0">
                        E
                      </span>
                      <span className="transition-all delay-[75ms] left-[10px]">
                        m
                      </span>
                      <span className="transition-all delay-[150ms] left-[27px]">
                        a
                      </span>
                      <span className="transition-all delay-[225ms] left-[37px]">
                        i
                      </span>
                      <span className="transition-all delay-[300ms] left-[43px]">
                        l
                      </span>
                      <p className="absolute -left-2 -top-3 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                        Email Address
                      </p>
                    </label>
                  </div>
                  <div className="relative mb-5 md:mb-6 lg:mb-8">
                    <input
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="input block h-auto w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
                    ></input>
                    <label className="absolute left-2 top-2">
                      <span className="transition-all delay-[0ms] left-0">
                        S
                      </span>
                      <span className="transition-all delay-[75ms] left-[11px]">
                        u
                      </span>
                      <span className="transition-all delay-[150ms] left-[22px]">
                        b
                      </span>
                      <span className="transition-all delay-[225ms] left-[34px]">
                        j
                      </span>
                      <span className="transition-all delay-[300ms] left-[40px]">
                        e
                      </span>
                      <span className="transition-all delay-[375ms] left-[51px]">
                        c
                      </span>
                      <span className="transition-all delay-[450ms] left-[61px]">
                        t
                      </span>
                      <p className="absolute -left-2 -top-2 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                        Subject
                      </p>
                    </label>
                  </div>
                  <div className="relative mb-5 md:mb-6 lg:mb-8">
                    <textarea
                      required
                      name="message"
                      maxLength="5000"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="input block h-auto w-full rounded-md border border-black px-3 py-2 pl-4 text-sm text-black"
                    ></textarea>
                    <label className="absolute left-2 top-2">
                      <span className="transition-all delay-[0ms] left-0">
                        M
                      </span>
                      <span className="transition-all delay-[75ms] left-[16px]">
                        e
                      </span>
                      <span className="transition-all delay-[150ms] left-[26px]">
                        s
                      </span>
                      <span className="transition-all delay-[225ms] left-[34px]">
                        s
                      </span>
                      <span className="transition-all delay-[300ms] left-[42px]">
                        a
                      </span>
                      <span className="transition-all delay-[375ms] left-[52px]">
                        g
                      </span>
                      <span className="transition-all delay-[450ms] left-[63px]">
                        e
                      </span>
                      <p className="absolute -left-2 -top-2 text-xl m-2 text-gray-400 transition duration-500 pointer-events-none">
                        Message
                      </p>
                    </label>
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="inline-flex py-3 w-full cursor-pointer items-center justify-center rounded-lg bg-[#006CB7] text-[14px] font-medium text-white transition-all border border-[#ff7222] hover:bg-white hover:text-[#ff7222]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
