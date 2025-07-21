import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    console.log("HandleSubmit executed!");
    console.log("Current values:", { name, email, message });

    // New: Error checking
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    // Update the errors state
    console.log("Setting errors:", newErrors);
    setErrors(newErrors);

    // If there are any errors, do not submit the form
    if (newErrors.name || newErrors.email || newErrors.message) {
      return; // Do not submit the form!
    }

    // Successful submission
    console.log("Form submitted successfully!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Your message has been sent successfully!");

    // Clear the form and errors
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <p>Name: {name}</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <p>Email: {email}</p>

        <input
          type="text"
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
        <p>Message: {message}</p>

        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </section>
  );
}

export default Contact;
