import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Form submission failed: " + error));
  };

  return (
    <section className="contact">
      <h2>get the conversation started!</h2>
      {submitted ? (
        <div style={{ background: "#d8f3dc", padding: "1.5rem", borderRadius: "8px", marginTop: "1rem" }}>
          <h3>Thank you for reaching out! ✨</h3>
          <p>I'll be in touch shortly. Looking forward to connecting with you!</p>
        </div>
      ) : (
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label>your name:<input type="text" name="name" required /></label>
        <label>your email:<input type="email" name="email" required /></label>
        <label>your vision:<textarea name="message" required></textarea></label>
        <button type="submit">Send</button>
      </form>
      )}
      
      {/* Netlify bot-only form, will be stripped from screen but parsed at build */}
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </section>
  )
}

export default Contact;