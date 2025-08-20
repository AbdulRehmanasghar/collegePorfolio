import React, { useEffect, useState, useRef } from "react";
import counterData from "./counterData";
import AOS from "aos";
import "aos/dist/aos.css";
import TechIcon from "../../Components/TechIcon";

const Counter = ({ end, suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg py-20"
      data-aos="fade-up"
      data-aos-mirror="true"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Scholarship <span className="text-accent">Programme</span>
            </h2>
            <p className="text-lg text-soft-white max-w-lg mx-auto md:mx-0 mb-8">
              Empowering dreams through education: Explore our Scholarship
              Programme, opening doors to a brighter future for students.
            </p>
            <button className="group bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105">
              Read More
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                <TechIcon name="moveright" />
              </span>
            </button>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8 text-center md:text-right">
            {counterData.map((counter, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl text-accent mb-2">
                  <Counter
                    end={counter.end}
                    suffix={counter.suffix}
                    inView={inView}
                  />
                </div>
                <p className="text-lg text-soft-white">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;