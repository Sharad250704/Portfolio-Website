import React, { useState } from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b449946e-13dc-4303-9f4e-08b54caa69fa");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="get-in-touch-section" id="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        "Interested in collaborating, have a project in mind, or just want to connect? Please fill out the form below or reach out directly via email."{" "}
        <a href="mailto:sharadpandey3141@gmail.com">sharadpandey3141@gmail.com</a>.
      </p>
      <form className="get-in-touch-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
      {result && <p style={{ marginTop: "16px", color: "#B923E1" }}>{result}</p>}
    </div>
  );
};

export default GetInTouch;