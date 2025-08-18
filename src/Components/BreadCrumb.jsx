import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

const Breadcrumb = ({ pageName, description, detailPage, url }) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-semibold text-white sm:text-3xl">
                {detailPage ? detailPage : pageName}
              </h1>
              <p className="font-medium leading-relaxed text-soft-white">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center gap-1 pr-1 font-medium text-soft-white hover:text-accent"
                  >
                    <TechIcon name="home" className="w-5 h-5"/>
                    Home
                  </Link>
                  <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-soft-white"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    to={url}
                    className={`pr-1 font-medium hover:text-accent ${
                      detailPage ? "text-soft-white" : "text-accent"
                    }`}
                  >
                    {pageName}
                  </Link>
                  {detailPage && (
                    <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 text-soft-white"></span>
                  )}
                </li>
                {detailPage && (
                  <li className="text-base font-medium text-accent whitespace-nowrap">
                    {detailPage}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs */}
      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_left)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_left"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#132c44" />
                <stop
                  offset="100%"
                  stopColor="#ff6b00"
                  stopOpacity="0.5"
                />{" "}
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_right)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_right)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_right"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff6b00" />
                <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_right"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff6b00" />
                <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Breadcrumb;
