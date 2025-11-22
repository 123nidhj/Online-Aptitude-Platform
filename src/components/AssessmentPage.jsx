import React, { useState } from "react";

function AssessmentPage() {
  const questions = [
    {
      id: 1,
      question: "If a train travels at 60 km/hr, how long will it take to cover 240 km?",
      options: ["2 hours", "3 hours", "4 hours", "5 hours"],
      answer: "4 hours",
    },
    {
      id: 2,
      question: "What is the next number in the series: 2, 6, 12, 20, 30, ?",
      options: ["36", "40", "42", "56"],
      answer: "42",
    },
    {
      id: 3,
      question: "If A is twice as fast as B, and B takes 10 days to complete a task, how long will A take?",
      options: ["20 days", "5 days", "10 days", "3 days"],
      answer: "5 days",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (questionId, option) => {
    setSelected({ ...selected, [questionId]: option });
  };

  const score = Object.keys(selected).filter(
    (qid) => selected[qid] === questions.find((q) => q.id == qid).answer
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Assessment
      </h1>

      {!submitted ? (
        <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Question {current + 1} of {questions.length}
          </h2>

          <p className="text-gray-800 text-lg mb-6">
            {questions[current].question}
          </p>

          <div className="space-y-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(questions[current].id, option)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                  selected[questions[current].id] === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                onClick={() => setSubmitted(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrent((prev) => prev + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Test Completed!
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Your Score:
          </p>

          <p className="text-5xl font-bold text-blue-600 mb-6">
            {score} / {questions.length}
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setSelected({});
              setCurrent(0);
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retry Test
          </button>
        </div>
      )}
    </div>
  );
}

export default AssessmentPage;
