import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // Honeypot field
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot detection
    if (formData.website) {
      return;
    }

    const { name, email, company, message } = formData;

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        submitting: false,
        message: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    setStatus({
      submitting: true,
      message: '',
      type: '',
    });

    try {
      // Send inquiry asynchronously directly to contact@blackline-creative.com
      await fetch('https://formsubmit.co/ajax/contact@blackline-creative.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New BlackLine Creative Website Inquiry — ${name}`,
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || 'N/A',
          message: message.trim(),
        }),
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        website: '',
      });

      setStatus({
        submitting: false,
        message: "Thanks for reaching out. We'll be in touch soon.",
        type: 'success',
      });
    } catch (err) {
      setStatus({
        submitting: false,
        message: "Thanks for reaching out. We'll be in touch soon.",
        type: 'success',
      });
    }
  };

  return (
    <main className="contact-page">
      {/* NAVBAR */}
      <Navbar variant="black" />

      {/* CONTACT SECTION */}
      <section className="contact-section">
        {/* LEFT INFORMATION */}
        <div className="contact-info">
          <span className="eyebrow">LET'S TALK</span>

          <h1>
            Got a project in
            <br />
            mind? Let’s draw
            <br />
            the line together<span>.</span>
          </h1>

          <p className="intro">
            Tell us about your goals and we'll map out the best way to get there.
          </p>

          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <a href="mailto:contact@blackline-creative.com">
              <span className="contact-icon">✉</span>
              contact@blackline-creative.com
            </a>

            <div>
              <span className="contact-icon">◉</span>
              Chicago, IL
            </div>

            <a href="/">
              <span className="contact-icon">◎</span>
              blackline-creative.com
            </a>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="form-wrapper">
          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field for bot protection */}
            <div className="website-field" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                maxLength={100}
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                maxLength={200}
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* COMPANY */}
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                maxLength={150}
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group message-group">
              <label htmlFor="message">What can we help you with? *</label>
              <textarea
                id="message"
                name="message"
                maxLength={3000}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              id="submit-button"
              className="submit-button"
              disabled={status.submitting}
            >
              <span>{status.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              <span className="arrow">→</span>
            </button>

            {/* STATUS MESSAGE */}
            {status.message && (
              <p
                id="form-status"
                className={`form-status ${status.type}`}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
