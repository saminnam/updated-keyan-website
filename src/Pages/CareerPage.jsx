import React, { useState } from "react";
import CommonHero from "../Components/CommonHero";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prevData) => ({ ...prevData, resume: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("resume", formData.resume);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);

    // Handle form submission here.
    // You can use `fetch` or `axios` to send formDataObj to the backend.

    console.log([...formDataObj]); // For debugging
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section>
        <CommonHero title={"CAREERS"} />
        <div className="flex justify-center items-center min-h-screen my-20">
          <div className="w-full max-w-2xl bg-white shadow-lg border rounded-md p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Apply Here
            </h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Resume */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="resume"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter the subject"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-transparent border border-orange-500 transition-transform duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
