import { useState } from "react";
import TechIcon from "./TechIcon";

export default function NewsLetter() {
const [email, setEmail] = useState("");
const [isSubscribed, setIsSubscribed] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [emailError, setEmailError] = useState(""); 

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateForm = () => {
  let isValid = true;

  if (!email.trim()) {
    setEmailError("Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    setEmailError("Please enter a valid email address");
    isValid = false;
  } else {
    setEmailError("");
  }

  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 5000);
  }, 1500);
};

const handleChange = (e) => {
  setEmail(e.target.value);
  if (emailError) setEmailError("");
};

  return (
    <section className="relative mt-15 sm:mt-20 py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl">
          d
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-lg"></div>
            <div className="relative bg-gradient-to-br from-accent to-accent-dark p-4 rounded-full shadow-lg">
              <TechIcon name="bell" className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <p className="text-custom-lg text-soft-white/80 font-medium mt-2 max-w-2xl mx-auto">
          Join our newsletter community and be the first to receive exclusive
          deals, product updates, and styling tips. Unsubscribe at any time.
        </p>

        {isSubscribed && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg backdrop-blur-sm animate-fade-in">
            <div className="flex items-center justify-center text-green-400">
              <TechIcon name="check" className="w-6 h-6 mr-2" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
            <p className="mt-2 text-soft-white/80 text-sm">
              Check your inbox for a confirmation email with your 20% discount
              code.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`max-w-[700px] mx-auto mt-7 transition-all duration-300 ${
            isSubscribed ? "opacity-70" : "opacity-100"
          }`}
        >
          <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="relative flex-grow">
              <TechIcon
                name="mail"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-mygray/70"
              />
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Your email address"
                className="py-4 pl-12 pr-4 w-full rounded-lg sm:rounded-r-none border border-border-gray text-border-gray bg-white/5 backdrop-blur-sm caret-accent placeholder-border-gray focus:outline-none focus:border-accent transition-all duration-300"
                disabled={isSubscribed || isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isSubscribed || isLoading}
              className="relative py-4 px-8 sm:px-10 text-white bg-gradient-to-r from-accent to-accent-dark font-medium rounded-lg sm:rounded-l-none flex items-center justify-center gap-2 focus:outline-none hover:from-accent-dark hover:to-accent-darker disabled:opacity-80 disabled:cursor-not-allowed transition-all group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent -z-10 group-hover:opacity-0 transition-opacity"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-darker to-accent-dark -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>

              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : isSubscribed ? (
                <>
                  <TechIcon name="check" className="w-5 h-5" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <TechIcon
                    name="send"
                    className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </div>

          {emailError && (
            <div className="mt-3 flex items-center justify-start text-red-400 text-sm">
              {emailError}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
