'use client';

import React, { useState } from 'react';

export default function RepairForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceCategory, setDeviceCategory] = useState('Phone');
  const [deviceModel, setDeviceModel] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { label: '📱 Phone', value: 'Phone' },
    { label: '💻 Tablet', value: 'Tablet' },
    { label: '🖥️ Computer', value: 'Computer' },
    { label: '⚡ Other Electronics', value: 'Other Electronics' },
  ];

  const presetModels = {
    Phone: ['iPhone 17 Pro Max', 'iPhone 16 Pro', 'Galaxy S Series'],
    Tablet: ['13-inch iPad Pro', 'iPad Air', 'Galaxy Tab'],
    Computer: ['MacBook Pro', 'Dell Latitude', 'Custom Windows PC'],
    'Other Electronics': ['Trek E-Bike Battery', 'DVR Security System', 'J-Tech HDMI Extender'],
  };

  const WEBHOOK_URL =
    'https://script.google.com/macros/s/AKfycbwLSk2w_Z2GEfo4kWzUmTg3HyLKvZLBKRf2Nj-XYIEoy4mGlQK2awAg73Hn8-bMujg4/exec';

  const submitForm = async (e) => {
    e.preventDefault();
    if (!name || !email || !deviceModel || !message) {
      alert('Please fill out your Name, Email, Device Model, and Message.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    const ticketId = 'TC-' + Math.floor(1000 + Math.random() * 9000);

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketId,
          name,
          email,
          phone,
          deviceCategory,
          deviceModel,
          message,
        }),
      });
      setName('');
      setEmail('');
      setPhone('');
      setDeviceModel('');
      setMessage('');
      setSubmitStatus(`Success! Service Ticket #${ticketId} created.`);
    } catch (error) {
      setSubmitStatus('Oops! Something went wrong. Please email me directly instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10">
      <div className="w-full max-w-[760px] mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">
          📝 Request a Repair Quote
        </h2>
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          Select your device category, choose or type your model, and describe your issue below.
        </p>

        <form onSubmit={submitForm} className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-xl shadow-lg">
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Name *</label>
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
            <label className="block text-sm font-semibold text-gray-200 mb-2">Email *</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Phone (Optional)</label>
            <input
              type="tel"
              placeholder="(501) 555-0123"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base"
            />
          </div>

          {/* Category Selector */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Device Category *</label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.value}
                  onClick={() => {
                    setDeviceCategory(cat.value);
                    setDeviceModel('');
                  }}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    deviceCategory === cat.value
                      ? 'bg-sky-400 text-slate-950 border-sky-400 font-bold'
                      : 'bg-slate-900 text-gray-400 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Chips */}
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Quick Select Model or Type Below *</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {presetModels[deviceCategory].map((model) => (
                <button
                  type="button"
                  key={model}
                  onClick={() => setDeviceModel(model)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${
                    deviceModel === model
                      ? 'bg-sky-500 text-slate-950 font-bold border-sky-500'
                      : 'bg-slate-900 text-gray-400 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
            <input
              type="text"
              required
              placeholder="e.g., iPhone 17 Pro Max..."
              value={deviceModel}
              onChange={(e) => setDeviceModel(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base"
            />
          </div>

          {/* Issue Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Describe the Issue *</label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about the issue..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-sky-400 text-base resize-none"
            />
          </div>

          {/* Status Alert */}
          {submitStatus && (
            <div
              className={`p-4 rounded-lg mb-5 text-sm font-semibold text-center ${
                submitStatus.includes('Oops')
                  ? 'bg-red-950/60 border border-red-500 text-red-300'
                  : 'bg-emerald-950/60 border border-emerald-500 text-emerald-300'
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
            {isSubmitting ? 'Submitting Ticket...' : 'Generate Repair Ticket'}
          </button>
        </form>
      </div>
    </section>
  );
}