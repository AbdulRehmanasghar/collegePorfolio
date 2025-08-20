"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("grid");

  const qualificationOptions = useMemo(
    () => ["All", "HND", "BSc", "BA", "BBA", "LLB"],
    []
  );

  const instituteOptions = useMemo(
    () => ["All", "University of Essex", "Pearson BTEC", "University of Kent"],
    []
  );

  const degreeOptions = useMemo(
    () => [
      "All",
      "Computing",
      "Business",
      "Artificial Intelligence",
      "Accounting",
      "Law",
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
    {
      id: 1,
      title: "HND Computing",
      description:
        "This HND programme provides students with a solid foundation in computing, covering core programming, networking, databases, security and web development.",
      image: "/modern-classroom-work.png",
      institute: "Pearson BTEC",
      type: "HND",
    },
    {
      id: 2,
      title: "BSc Artificial Intelligence",
      description:
        "The BSc Artificial Intelligence programme by the Computer Science and Electronic Engineering department offers a top-tier education in AI technologies.",
      image: "/placeholder-unboz.png",
      institute: "University of Essex",
      type: "BSc",
    },
    {
      id: 3,
      title: "BS Accounting and Finance",
      description:
        "The Business School is ranked in the top 150 for Business and Economics in THE World University Rankings by Subject 2023. The BS programme offers comprehensive training.",
      image: "/male-student-library.png",
      institute: "University of Essex",
      type: "BS",
    },
    {
      id: 4,
      title: "BBA Business Administration",
      description:
        "Comprehensive business administration program covering management, marketing, finance, and strategic planning for future business leaders.",
      image: "/modern-classroom-collaboration.png",
      institute: "University of Kent",
      type: "BBA",
    },
    {
      id: 5,
      title: "BA (Hons) Business",
      description:
        "Honours degree in business studies with focus on contemporary business practices, entrepreneurship, and global market dynamics.",
      image: "/placeholder-1l5ld.png",
      institute: "University of Kent",
      type: "BA",
    },
    {
      id: 6,
      title: "LLB (Hons) Bachelor of Laws",
      description:
        "Comprehensive law degree covering constitutional law, criminal law, contract law, and legal practice in modern judicial systems.",
      image: "/law-students-library.png",
      institute: "University of Essex",
      type: "LLB",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">›</span>
                <span className="text-gray-500 text-sm">Programmes</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-blue-900 mb-8">Programmes</h1>

        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "grid"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Grid size={16} />
            Grid
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "list"
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              {programsData.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded text-sm font-medium">
                      {program.type}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs">
                      {program.institute}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {programsData.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-64 h-48 sm:h-32 bg-gray-100 flex-shrink-0">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-blue-900 text-white px-2 py-1 rounded text-xs font-medium">
                        {program.type}
                      </div>
                    </div>

                    <div className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-blue-900 mb-2 sm:mb-0">
                          {program.title}
                        </h3>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded self-start">
                          {program.institute}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {program.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Read More
                        <span className="ml-1">→</span>
                      </a>
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
