import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { motion as Motion } from "framer-motion";
import Button from "../../components/Button";
import ContactData from "../../Pages/ContactUsPage/Contact-Data"
import Breadcrumb from "../../Components/BreadCrumb";
import FormInput from "../../Components/FormInput";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <main
      className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 sm:py-12"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-bg), var(--color-navy-dark), var(--color-bg))",
      }}
    >
      <Breadcrumb
        pageName="Contact Us"
        url="/"
        description="For more information about Beaconhouse International College, please do not hesitate to contact us. Our campuses are here to assist you."
      />

      <div className="container text-white">
<div className="flex justify-center mb-16 sm:mb-20">
  <Motion.div
    className="relative w-full sm:w-3/4 lg:w-2/3 p-[2px] rounded-2xl shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_var(--color-accent)] 
               bg-[linear-gradient(270deg,var(--color-accent),var(--color-border-gray),var(--color-accent))] 
               bg-[length:400%_400%] animate-gradientMove"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="rounded-2xl p-6 sm:p-10 h-full w-full relative overflow-hidden bg-[var(--color-navy-dark)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--color-border-gray)]/10 to-transparent opacity-40 pointer-events-none" />
      <div className="text-4xl sm:text-5xl mb-4 text-[var(--color-accent)]">
        {ContactData[0].icon}
      </div>
      <h2 className="text-lg sm:text-2xl font-extrabold mb-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-soft-white)] bg-clip-text text-transparent">
        {ContactData[0].title}
      </h2>
      <p className="mb-2 text-base sm:text-lg text-[var(--color-soft-white)]">
        📞 {ContactData[0].phone}
      </p>
      {ContactData[0].address && (
        <p className="mb-2 text-base sm:text-lg text-[var(--color-soft-white)]">
          📍 {ContactData[0].address}
        </p>
      )}
      {ContactData[0].email && (
        <p className="text-base sm:text-lg text-[var(--color-soft-white)]">
          ✉️ {ContactData[0].email}
        </p>
      )}
    </div>
  </Motion.div>
</div>
        <Motion.div
          className="shadow-2xl bg-navy-dark rounded-2xl p-6 sm:p-8 lg:p-10 border relative overflow-hidden"
          style={{
            backdropFilter: "blur(12px)",
            borderColor: "var(--color-border-gray)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
style={{
  background: "linear-gradient(to right, var(--color-accent) 100%, var(--color-bg) 100%)",
}}
          ></div>

          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
            style={{ color: "var(--color-white)" }}
          >
            Got queries?{" "}
            <span
              className="underline underline-offset-4 decoration-wavy"
              style={{ color: "var(--color-accent)" }}
            >
              Send us a message!
            </span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <FormInput
              label="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
  className="text-gray-700 bg-transparent border-gray-300"  
            />

<FormInput
  type="email"
  label="Email"
  name="Email"
  value={formData.Email}
  onChange={handleChange}
  placeholder="Enter your email"
  required
  className="text-gray-700 bg-transparent border-gray-300"  
/>
            <FormInput
              label="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
  className="text-gray-700 bg-transparent border-gray-300"  
            />

            <div className="flex flex-col md:col-span-2">
              <label
                className="font-medium mb-2 text-sm sm:text-base"
                style={{ color: "var(--color-black)" }}
              >
<label className="text-soft-white">
  Message
</label>
              </label>
<textarea
  name="Message"
  value={formData.Message}
  onChange={handleChange}
  placeholder="Write your message here..."
  rows="5"
  className="rounded-lg p-3 outline-none shadow-sm transition border 
             text-soft-white placeholder-white bg-transparent
             border-gray-300 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
/>
            </div>
            <Button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md md:col-span-2"
              variant="primary"
              size="lg"
            >
              <Send size={20} /> Send Message
            </Button>
          </form>
        </Motion.div>
      </div>
    </main>
  );
};

export default ContactUsPage;
