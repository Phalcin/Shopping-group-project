// FeedbackPage.tsx

import React, { useState } from "react";
import { FeedbackType } from "../../type";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState<FeedbackType>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!feedback.name || !feedback.email || !feedback.message) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Feedback submitted:", feedback);
    // Reset the form after submission
    setFeedback({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[rgb(252 185 0)] text-black rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 transition focus:border-[#ffc800] focus:outline-none focus:ring-2 focus:ring-[#ffc800]"
              required
            />
          </label>
          <label htmlFor="email" className="block mb-2">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 transition focus:border-[#ffc800] focus:outline-none focus:ring-2 focus:ring-[#ffc800]"
              required
            />
          </label>
          <label htmlFor="message" className="block mb-2">
            Message:
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black transition focus:border-[#ffc800] focus:outline-none focus:ring-2 focus:ring-[#ffc800]"
              rows={4}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-white text-blue-500 px-4 py-2 rounded mt-4 hover:bg-yellow-300 transition"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <p>Thanks for your feedback!</p>
      )}
    </div>
  );
};

export default FeedbackPage;
