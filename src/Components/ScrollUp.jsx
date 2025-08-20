import { useEffect, useState } from "react";
import TechIcon from "./TechIcon";
import Button from "./Button";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          variant="primary"
          size="scroll-up"
          className="fixed bottom-10 right-10 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out z-50 cursor-pointer"
        >
          <TechIcon name="chevron-up" className="w-6 h-6" />
        </Button>
      )}
    </>
  );
}