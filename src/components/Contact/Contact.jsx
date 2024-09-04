import React from "react";
import "./Contact.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4e138836-fa27-4617-bb08-fd18329e6005");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src="theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I,m currently avaliable to work, So feel free to send me a message
            about anything that you want me to work on. You can contact me
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="mail_icon.svg" alt="" />
              <p>dedgesiddhesh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="call_icon.svg" alt="" />
              <p>+91 8605114383</p>
            </div>
            <div className="contact-detail">
              <img src="linkedin.svg" alt="" />
              <p>
                <a href="www.linkedin.com/in/siddhesh-dedge">Linkedin</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src="location_icon.svg" alt="" />
              <p>India, Maharashtra pune</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
