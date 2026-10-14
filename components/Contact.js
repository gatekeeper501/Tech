'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const webhookUrl =
        'https://script.google.com/macros/s/AKfycbxGV2v-xWkCCG1rZnp4-HHyzos0OmpAzxvF3XPiSQtJjp8pSBq_oJwaed80AvIT762lKw/exec';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          formType: 'Contact',
          name,
          email,
          message,
          date: new Date().toLocaleString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10">
      <div className="w-full max-w-[700px] mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">
          📬 Ask a Question
        </h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Have a general technology question or need advice? Send me a message below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-xl shadow-lg"
        >
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base"
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Message *
            </label>
            <textarea
              required
              rows={5}
              placeholder="How can I help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base resize-none"
            />
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`p-4 rounded-lg mb-5 text-sm font-semibold text-center ${
                submitStatus.includes('successfully')
                  ? 'bg-emerald-950/60 border border-emerald-500 text-emerald-300'
                  : 'bg-red-950/60 border border-red-500 text-red-300'
              }`}
            >
              {submitStatus}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold py-3.5 px-6 rounded-full transition-colors disabled:opacity-50 text-base"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}