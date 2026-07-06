import React, { useState } from "react";

function InquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted! (Backend integration coming soon)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Inquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;
