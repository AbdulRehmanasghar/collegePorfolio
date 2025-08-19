import { useState, useMemo } from "react";

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Data for selectors
  const qualificationOptions = useMemo(
    () => ["High School", "Undergraduate", "Postgraduate"],
    []
  );

  const countryOptions = useMemo(
    () => [
      {
        code: "US",
        label: "United States",
        cities: ["New York", "Los Angeles"],
      },
      { code: "CA", label: "Canada", cities: ["Toronto", "Vancouver"] },
      { code: "FR", label: "France", cities: ["Paris", "Lyon"] },
      { code: "DE", label: "Germany", cities: ["Berlin", "Munich"] },
    ],
    []
  );

  // SelectorGroup component handles three dependent selects
  function SelectorGroup() {
    const [qualification, setQualification] = useState(qualificationOptions[0]);
    const [country, setCountry] = useState(countryOptions[0].code);
    const [city, setCity] = useState(countryOptions[0].cities[0]);

    const citiesForCountry = useMemo(() => {
      const found = countryOptions.find((c) => c.code === country);
      return found ? found.cities : [];
    }, [country]);

    // when country changes, reset city to first city
    function onCountryChange(e) {
      const val = e.target.value;
      setCountry(val);
      const found = countryOptions.find((c) => c.code === val);
      setCity(found ? found.cities[0] : "");
    }

    return (
      <div className="space-y-3 flex flex-col md:flex-row gap-5">
        <div>
          <label
            htmlFor="qualificationSelect"
            className="block text-[11px] font-medium text-white"
          >
            Qualification
          </label>
          <select
            id="qualificationSelect"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 py-2 px-2 rounded-md"
          >
            {qualificationOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="countrySelect"
            className="block text-[11px] font-medium text-white"
          >
            Country
          </label>
          <select
            id="countrySelect"
            value={country}
            onChange={onCountryChange}
            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 py-2 px-2 rounded-md"
          >
            {countryOptions.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="citySelect"
            className="block text-[11px] font-medium text-white"
          >
            City
          </label>
          <select
            id="citySelect"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 py-2 px-2 rounded-md"
          >
            {citiesForCountry.map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  // sample programs data (at least 9)
  const programsData = [
    {
      id: 1,
      title: "Computer Science",
      description: "BSc in Computer Science",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 2,
      title: "Business Administration",
      description: "BBA program",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 3,
      title: "Mathematics",
      description: "BS Mathematics",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 4,
      title: "Physics",
      description: "BS Physics",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 5,
      title: "Chemistry",
      description: "BS Chemistry",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 6,
      title: "Biology",
      description: "BS Biology",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 7,
      title: "English",
      description: "BA English",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 8,
      title: "History",
      description: "BA History",
      image: "src/assets/Images/programs/program/20.jpg",
    },
    {
      id: 9,
      title: "Economics",
      description: "BS Economics",
      image: "src/assets/Images/programs/program/20.jpg",
    },
  ];

  return (
    <main className="flex flex-col gap-6 h-screen  ">
      <section className="breadcrum">
        <nav className="flex  text-white borderg " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-white  hover:text-blue-600 dark:text-white dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-white  hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Templates
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-white-500 md:ms-2 dark:text-gray-400">
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </section>
      <section className="main heading mb-5">
        <h1 className="text-3xl font-bold  text-white-800 dark:text-white">
          Programs
        </h1>
      </section>
      <section className="toggle-section">
        <div className=" h-[45px] w-[202px] rounded-full bg-white">
          <div className="relative right-0  m-1  ">
            <ul
              className="relative flex flex-row flex-wrap justify-center items-center py-1.5 list-none rounded-5xl bg-[#c8c8c821]"
              data-tabs="tabs"
              role="list"
            >
              <li className="z-30 flex-auto text-center w-[5px] rounded-5xl">
                <a
                  onClick={() => setActiveTab("dashboard")}
                  className={
                    `z-30 flex items-center justify-center w-full  text-sm mb-0 transition-all ease-in-out border-0 rounded-5xl cursor-pointer bg-inherit ` +
                    (activeTab === "dashboard"
                      ? "text-white bg-black "
                      : "text-slate-600")
                  }
                  data-tab-target=""
                  role="tab"
                  aria-selected={activeTab === "dashboard"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 mr-1.5"
                  >
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"></path>
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"></path>
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"></path>
                  </svg>
                  <span className="ml-1">Grid</span>
                </a>
              </li>
              <li className="z-30 flex-auto text-center bg-black w-[1px] rounded-full">
                <a
                  onClick={() => setActiveTab("profile")}
                  className={
                    `z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer bg-inherit ` +
                    (activeTab === "profile"
                      ? "text-white bg-black "
                      : "text-slate-600")
                  }
                  data-tab-target=""
                  role="tab"
                  aria-selected={activeTab === "profile"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 mr-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1">List</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="selectors-container flex  md:flex-row flex-col gap-6">
        <div className="select ">
          {/* Replaced with dynamic selects below */}
          <SelectorGroup />
        </div>
      </section>
      <section className="program-container">
        {/* Responsive grid: 1 col mobile, 2 sm, 3 md, 4 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {programsData.map((p) => (
            <article
              key={p.id}
              className="card rounded-lg overflow-hidden shadow bg-white flex flex-col"
            >
              <div className="h-40 md:h-48 w-full bg-gray-200">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">
                  {p.description}
                </p>
                <div className="mt-4">
                  <button className="px-3 py-2 bg-black text-white rounded-md text-sm">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
