import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Do you have further questions?</h2>
      <p>If you are interested in our services, please contact us via the following contact details. We're also accepting new travel planners to join our team!</p>
      <div className="contact-boxes">
        <div className="contact-box">
          <span className="contact-icon">💬</span>
          <strong>Quick chat</strong>
          <a href="https://wa.me/420777018287" target="_blank">Message us on WhatsApp</a>
        </div>
        <div className="contact-box">
          <span className="contact-icon">✉️</span>
          <strong>Email support</strong>
          <a href="mailto:ask@superguided.com">ask@superguided.com</a>
        </div>
        <div className="contact-box">
          <span className="contact-icon">🔥</span>
          <strong>New partners</strong>
          <a href="mailto:join@superguided.com">join@superguided.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;