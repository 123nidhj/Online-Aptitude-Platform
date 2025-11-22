import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Learn Smarter. Test Faster. Grow Confident.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Aptivise helps you practice aptitude, track progress, and prepare for placements with ease.
        </p>

        <div className="flex gap-4">
          <Link to="/signin">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </Link>

          <Link to="/topics">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-all">
              Explore Topics
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Why Aptivise?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Quality Questions</h3>
            <p className="text-gray-600">
              Hand-crafted aptitude questions to strengthen your problem-solving skills.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
            <p className="text-gray-600">
              Get detailed explanations & insights right after completing assessments.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p className="text-gray-600">
              Monitor improvement over time with your personalized dashboard.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Aptivise. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
