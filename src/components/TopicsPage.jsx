import React from "react";
import { Link } from "react-router-dom";

function TopicsPage() {
  const topics = [
    { name: "Quantitative Aptitude", path: "/assessment" },
    { name: "Logical Reasoning", path: "/assessment" },
    { name: "Verbal Ability", path: "/assessment" },
    { name: "Data Interpretation", path: "/assessment" },
    { name: "Puzzles", path: "/assessment" },
    { name: "Number Series", path: "/assessment" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Select a Topic
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Choose a topic below to start practicing questions and test your skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {topics.map((topic, i) => (
          <Link to={topic.path} key={i}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition cursor-pointer text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {topic.name}
              </h2>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default TopicsPage;
