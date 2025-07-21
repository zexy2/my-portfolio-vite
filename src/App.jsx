import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  // Projects data - CV'nizdeki projeler
  const projectsData = [
    {
      id: 1,
      title: "Twitter Clone - Full Stack Social Media Platform",
      description:
        "A complete social media platform similar to Twitter with user authentication, posting tweets, likes, comments, and following functionality. Built with Flask backend and React frontend.",
      tech: [
        "Flask",
        "React",
        "PostgreSQL",
        "Python",
        "JavaScript",
        "CSS",
        "HTML",
      ],
      date: "2024",
      github: "https://github.com/zexy2/Twitter-Clone",
    },
    {
      id: 2,
      title: "Big Bag Çuval Fabrikası - Industrial E-Commerce Website",
      description:
        "Developed a complete industrial e-commerce website for a bag manufacturing company. Features include multilingual support (TR/EN), WhatsApp integration, product catalog, and SEO optimization. Successfully serving 1000+ customers with 20+ years of industry experience.",
      tech: ["PHP", "CSS", "MySQL", "HTML", "SEO", "Responsive Design"],
      date: "January 2025 - February 2025",
      website: "https://www.bigbagcuvalfabrikasi.com/",
    },
    {
      id: 3,
      title: "Kafein Technology Studios - Frontend Development",
      description:
        "Developing modern web applications using React and JavaScript. Working on responsive user interfaces.",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      date: "July 2025 - Present",
    },
    {
      id: 4,
      title: "Network Admin Guide - Interactive Solutions",
      description:
        "Comprehensive network troubleshooting guide with 10 interactive solutions, GSAP animations, bilingual support (TR/EN), and educational tools for OSI layer problems. Features real-time simulations, VLAN configurations, routing solutions, and advanced diagnostic tools.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "GSAP",
        "Cisco Packet Tracer",
        "Network Security",
      ],
      date: "June 2025",
      github: "https://github.com/zexy2/network-admin-guide",
      website: "https://zexy2.github.io/network-admin-guide/",
    },
    {
      id: 5,
      title: "AI Phone Price Predictor - 99.2% Accuracy",
      description:
        "Advanced Machine Learning system that predicts mobile phone prices with 99.2% accuracy using real Trendyol marketplace data. Features modern dark UI inspired by Notion and Stripe, real-time filtering, dynamic phone selection, and supports 10+ major brands including Apple, Samsung, and Xiaomi.",
      tech: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Machine Learning",
      ],
      date: "June 2025",
      github: "https://github.com/zexy2/ai-phone-price-predictor",
    },
    {
      id: 6,
      title: "Ferry Simulation System - Operating Systems Project",
      description:
        "Comprehensive Java-based transportation simulation system developed for Operating Systems course. Features multi-vehicle ferry management, toll booth system, capacity control, and statistical analysis. Built with Maven architecture and includes comprehensive unit testing with JUnit framework.",
      tech: [
        "Java 8",
        "Object-Oriented Programming",
        "Threading",
        "Synchronization",
        "Unit Testing",
      ],
      date: "2024",
      github: "https://github.com/zexy2/ferry-simulation-system",
    },
  ];

  return (
    <div className="container">
      <ParticlesBackground />
      <Navbar />
      <About
        name="Zeki Akgül"
        title="Frontend Developer & Computer Engineering Student"
        description="I am a Computer Engineering student at Manisa Celal Bayar University. I am working as a Frontend Developer Intern at Kafein Technology Studios. I am focused on continuously improving myself in the field of web development."
        university="Manisa Celal Bayar University"
        experience="Kafein Technology Studios - Frontend Developer Intern"
        github="https://github.com/zexy2"
        linkedin="linkedin.com/in/zeki-akgül"
        mail="zekiakgul09@gmail.com"
        medium="https://medium.com/@zeki.akgul"
      />

      <Projects projects={projectsData} />
      <Contact />
    </div>
  );
}

export default App;
