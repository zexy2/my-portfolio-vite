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
    console.log("HandleSubmit çalıştı!");
    console.log("Current values:", { name, email, message });

    // Yeni: Error kontrolü
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // İsim kontrolü
    if (!name.trim()) {
      newErrors.name = "İsim zorunludur";
    }

    // Email kontrolü
    if (!email.trim()) {
      newErrors.email = "Email zorunludur";
    } else if (!validateEmail(email)) {
      newErrors.email = "Geçerli bir email adresi girin";
    }

    // Mesaj kontrolü
    if (!message.trim()) {
      newErrors.message = "Mesaj zorunludur";
    }

    // Errors state'ini güncelle
    console.log("Setting errors:", newErrors);
    setErrors(newErrors);

    // Eğer hata varsa, form gönderme
    if (newErrors.name || newErrors.email || newErrors.message) {
      return; // Form gönderme!
    }

    // Başarılı gönderim
    console.log("Form başarıyla gönderildi!");
    console.log("İsim:", name);
    console.log("Email:", email);
    console.log("Mesaj:", message);

    alert("Mesajınız başarıyla gönderildi!");

    // Formu ve hataları temizle
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>İletişim</h2>
      <div>
        <input
          type="text"
          placeholder="İsminizi giriniz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <p>İsim: {name}</p>

        <input
          type="email"
          placeholder="Emailinizi giriniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <p>Email: {email}</p>

        <input
          type="text"
          placeholder="Mesajınızı yazın"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
        <p>Mesaj: {message}</p>

        <button type="button" onClick={handleSubmit}>
          Gönder
        </button>
      </div>
    </section>
  );
}

export default Contact;
