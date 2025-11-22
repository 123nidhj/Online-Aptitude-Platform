import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Your Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Total Tests Taken</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">12</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Average Score</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">78%</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">Hours Practiced</h2>
          <p className="text-4xl font-bold text-purple-600 mt-2">6.2</p>
        </div>

      </div>

      {/* Recent Attempts */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Attempts</h2>

      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <div className="grid grid-cols-3 font-semibold text-gray-700 border-b pb-3 mb-3">
          <p>Topic</p>
          <p>Score</p>
          <p>Date</p>
        </div>

        <div className="grid grid-cols-3 text-gray-600 py-2 border-b">
          <p>Quantitative Aptitude</p>
          <p>82%</p>
          <p>Nov 20, 2025</p>
        </div>

        <div className="grid grid-cols-3 text-gray-600 py-2 border-b">
          <p>Logical Reasoning</p>
          <p>75%</p>
          <p>Nov 18, 2025</p>
        </div>

        <div className="grid grid-cols-3 text-gray-600 py-2">
          <p>Data Interpretation</p>
          <p>68%</p>
          <p>Nov 15, 2025</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/assessment">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Start New Test
          </button>
        </Link>

        <Link to="/topics">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
            Explore Topics
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;
