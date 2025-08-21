"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("grid");

  const qualificationOptions = useMemo(
    () => [
      "All",
      "Intermediate",
      "ADP Programs",
      "B.Ed / M.Ed",
      "Computer Short Courses",
      "Domestic Cook Short Course",
    ],
    []
  );

  const instituteOptions = useMemo(
    () => ["All", "BISE DG KHAN", "Islamia University Bahawalpur", "PSAD"],
    []
  );

  const degreeOptions = useMemo(
    () => [
      "All",
      // Intermediate
      "FSc",
      "FA",
      "FA(IT)",
      "ICS",
      // ADP Programs
      "ADP CS",
      "ADP English",
      "ADP Urdu Education",
      "ADP Zoology",
      "ADP Math",
      "ADP Saraiki",
      // B.Ed / M.Ed
      "B.Ed",
      "M.Ed",
      // Computer Short Courses
      "CCA",
      "Video Editing",
      "Graphic Designing",
      // Other
      "Domestic Cook",
    ],
    []
  );

  function SelectorGroup() {
    const [qualification, setQualification] = useState("All");
    const [institute, setInstitute] = useState("All");
    const [degree, setDegree] = useState("All");

    return (
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
            SELECT QUALIFICATION TYPE
          </label>
          <select
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
          >
            {qualificationOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
            FILTER BY INSTITUTE
          </label>
          <select
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
          >
            {instituteOptions.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
            FILTER BY DEGREE
          </label>
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
          >
            {degreeOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  const programsData = [
    // Intermediate Classes - Affiliate with BISE DG KHAN
    {
      id: 1,
      title: "FSc",
      description:
        "Intermediate FSc program focusing on pre-engineering and pre-medical foundations.",
      image: "src/assets/Images/programs/modern-classroom-work.png",
      institute: "BISE DG KHAN",
      type: "Intermediate",
    },
    {
      id: 2,
      title: "FA",
      description:
        "Intermediate FA program emphasizing arts, humanities and social sciences.",
      image: "src/assets/Images/programs/placeholder-unbox.png",
      institute: "BISE DG KHAN",
      type: "Intermediate",
    },
    {
      id: 3,
      title: "FA(IT)",
      description:
        "FA with IT focuses on arts subjects combined with introductory information technology.",
      image: "src/assets/Images/programs/male-student-library.png",
      institute: "BISE DG KHAN",
      type: "Intermediate",
    },
    {
      id: 4,
      title: "ICS",
      description:
        "Intermediate Computer Science (ICS) covering programming, networking and algorithms.",
      image: "src/assets/Images/programs/modern-classroom-collaboration.png",
      institute: "BISE DG KHAN",
      type: "Intermediate",
    },

    // ADP Programs - Affiliate with Islamia University Bahawalpur
    {
      id: 5,
      title: "ADP CS",
      description:
        "Associate Diploma Program in Computer Science: practical computing and programming skills.",
      image: "src/assets/Images/programs/placeholder-1l5ld.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },
    {
      id: 6,
      title: "ADP English",
      description:
        "ADP in English focusing on language, literature and communication skills.",
      image: "src/assets/Images/programs/law-students-library.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },
    {
      id: 7,
      title: "ADP Urdu Education",
      description:
        "ADP in Urdu Education preparing teachers and educators in Urdu language instruction.",
      image: "src/assets/Images/programs/modern-classroom-work.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },
    {
      id: 8,
      title: "ADP Zoology",
      description:
        "ADP in Zoology covering animal biology, ecology and lab skills.",
      image: "src/assets/Images/programs/placeholder-unbox.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },
    {
      id: 9,
      title: "ADP Math",
      description:
        "ADP in Mathematics with emphasis on applied and theoretical mathematics.",
      image: "src/assets/Images/programs/male-student-library.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },
    {
      id: 10,
      title: "ADP Saraiki",
      description:
        "ADP in Saraiki language and culture, focusing on regional literature and linguistics.",
      image: "src/assets/Images/programs/modern-classroom-collaboration.png",
      institute: "Islamia University Bahawalpur",
      type: "ADP",
    },

    // B.Ed / M.Ed (Affiliate assumed with Islamia University Bahawalpur)
    {
      id: 11,
      title: "B.Ed",
      description:
        "Bachelor of Education program preparing professional teachers for schools.",
      image: "src/assets/Images/programs/placeholder-1l5ld.png",
      institute: "Islamia University Bahawalpur",
      type: "B.Ed",
    },
    {
      id: 12,
      title: "M.Ed",
      description:
        "Master of Education focusing on advanced teaching methods and educational research.",
      image: "src/assets/Images/programs/law-students-library.png",
      institute: "Islamia University Bahawalpur",
      type: "M.Ed",
    },

    // Computer Short Courses - Affiliate with PSAD
    {
      id: 13,
      title: "CCA",
      description:
        "Computer short course (CCA) covering office applications and basic IT skills.",
      image: "src/assets/Images/programs/modern-classroom-work.png",
      institute: "PSAD",
      type: "Short Course",
    },
    {
      id: 14,
      title: "Video Editing",
      description:
        "Short course in video editing: tools, workflows and basic motion graphics.",
      image: "src/assets/Images/programs/placeholder-unbox.png",
      institute: "PSAD",
      type: "Short Course",
    },
    {
      id: 15,
      title: "Graphic Designing",
      description:
        "Short course in graphic design covering layout, typography and digital tools.",
      image: "src/assets/Images/programs/male-student-library.png",
      institute: "PSAD",
      type: "Short Course",
    },

    // Domestic Cook Short Course
    {
      id: 16,
      title: "Domestic Cook Short Course",
      description:
        "Practical short course teaching home cooking techniques, hygiene and basic catering.",
      image: "src/assets/Images/programs/modern-classroom-collaboration.png",
      institute: "Community Courses",
      type: "Short Course",
    },
  ];

  return (
    <div className="min-h-screen bg-[#002140] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="text-orange-400 hover:text-orange-500 text-sm"
              >
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">›</span>
                <span className="text-gray-300 text-sm">Programmes</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Programmes
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border ${
              activeTab === "grid"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-transparent text-gray-300 border-transparent hover:bg-white/5 hover:border-white/10"
            }`}
          >
            <Grid size={16} />
            Grid
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border ${
              activeTab === "list"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-transparent text-gray-300 border-transparent hover:bg-white/5 hover:border-white/10"
            }`}
          >
            <List size={16} />
            List
          </button>
        </div>

        {/* Filter selectors */}
        <SelectorGroup />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programsData.map((program) => (
                <motion.div
                  key={program.id}
                  className="bg-navy-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">
                        {program.type}
                      </div>
                      <h3 className="text-xl font-bold text-white mt-3">
                        {program.title}
                      </h3>
                      <p className="text-accent text-sm mt-1">
                        {program.institute}
                      </p>
                      <p className="text-soft-white text-sm mt-3">
                        {program.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <a
                        href="#"
                        className="text-orange-400 hover:text-orange-500 font-medium"
                      >
                        Read More →
                      </a>
                      {/* <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                        View
                      </button> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {programsData.map((program) => (
                <motion.div
                  key={program.id}
                  className="bg-navy-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-64 h-48 sm:h-32 bg-[#021b2a] flex-shrink-0 overflow-hidden">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                          {program.title}
                        </h3>
                        <div className="text-xs text-accent px-2 py-1 rounded self-start">
                          {program.institute}
                        </div>
                      </div>
                      <p className="text-soft-white text-sm leading-relaxed mb-4 line-clamp-2">
                        {program.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-orange-400 hover:text-orange-500 font-medium"
                        >
                          Read More →
                        </a>
                        {/* <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                          View
                        </button> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
