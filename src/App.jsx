import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, 
  FaPhp, FaLaravel, FaReact, FaCss3Alt, FaJs,
  FaBars, FaTimes // Gidugangan kani para sa mobile menu icons
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

// ==========================================
// 1. HOME PAGE COMPONENT
// ==========================================
const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Aspiring Web Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-20 flex flex-col md:flex-row items-center justify-between min-h-[75vh]">
        
        {/* Left Side: Text Details */}
        <div className="w-full md:w-1/2 z-10 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">Hello I am</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Reniel Glenn Aniora</h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white">
             I'M AN <span className="text-primary">{text}<span className="animate-pulse">|</span></span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            I build dynamic, secure, and user-friendly web applications. My recent work includes developing a Task Management System for Emergence Systems and Solutions, and crafting an RFID-based School Attendance System.
          </p>
          
          <Link to="/contact">
            <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 font-bold rounded mb-10 transition shadow-[0_0_15px_rgba(229,57,53,0.4)] w-full md:w-auto">
              CONTACT ME
            </button>
          </Link>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a target='a' href="https://www.facebook.com/renielglenn.aniora.1" className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaFacebookF /></a>
            <a target='a' href="https://www.instagram.com/rnyel_glnn?igsh=a3p2bGZ1MjhydWFh" className="w-10 h-10 bg-pink-600 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaInstagram /></a>
            <a  target='a' href="https://github.com/reniela97-design" className="w-10 h-10 bg-gray-800 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaGithub /></a>
          </div>
        </div>

        {/* Right Side: Hero Image and Orbital Animation */}
        <div className="w-full md:w-1/2 flex justify-center mt-24 md:mt-0 relative min-h-[350px] md:min-h-[600px] items-center">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] z-0"></div>
          
          {/* 1. Ang Visible Line Track sa Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-gray-800 z-10 pointer-events-none"></div>

          {/* 2. Ang Nag-tuyok nga Icons (Gawas sa Picture) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] animate-spin-slow z-20 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e1e1e] p-2 md:p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaLaravel className="text-xl md:text-3xl text-[#FF2D20]" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1e1e1e] p-2 md:p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaReact className="text-xl md:text-3xl text-[#61DAFB]" />
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#1e1e1e] p-2 md:p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaPhp className="text-xl md:text-3xl text-[#777BB4]" />
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#1e1e1e] p-2 md:p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaJs className="text-xl md:text-3xl text-[#F7DF1E]" />
            </div>
          </div>

          {/* 3. Ang Imong Picture */}
          <div className="relative z-30 w-[240px] h-[300px] md:w-[350px] md:h-[450px] rounded-b-[120px] md:rounded-b-[200px] overflow-hidden border-b-4 border-primary bg-[#0f0f0f]">
            <img 
              src="an.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover relative z-20 pointer-events-none"
            />
          </div>

        </div>
      </main>

      {/* Marquee Skills */}
      <div className="mt-10 md:mt-20 border-y border-gray-800 py-4 md:py-6 overflow-hidden flex bg-[#0a0a0a]">
        <div className="whitespace-nowrap flex animate-marquee items-center gap-10 md:gap-16 px-10">
          <SkillItem icon={<FaLaravel className="text-[#FF2D20] text-xl md:text-2xl"/>} name="LARAVEL" />
          <SkillItem icon={<FaPhp className="text-[#777BB4] text-xl md:text-2xl"/>} name="PHP" />
          <SkillItem icon={<FaReact className="text-[#61DAFB] text-xl md:text-2xl"/>} name="REACT" />
          <SkillItem icon={<SiTailwindcss className="text-[#38B2AC] text-xl md:text-2xl"/>} name="TAILWIND" />
          <SkillItem icon={<SiMysql className="text-[#4479A1] text-xl md:text-2xl"/>} name="MYSQL" />
          <SkillItem icon={<FaJs className="text-[#F7DF1E] text-xl md:text-2xl"/>} name="JAVASCRIPT" />
          <SkillItem icon={<FaCss3Alt className="text-[#1572B6] text-xl md:text-2xl"/>} name="CSS" />
        </div>
      </div>
    </>
  );
};

// ==========================================
// 2. ABOUT PAGE
// ==========================================
const About = () => (
  <div className="min-h-[75vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-10 max-w-6xl mx-auto gap-12 py-10 md:py-20">
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
        <img src="ren.png" alt="Reniel" className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-gray-800 shadow-xl" />
      </div>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-white">About Me</h1>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">I am a passionate aspiring web developer with a strong desire to continuously learn and expand my skill set.</p>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">My goal is to master modern web development tools and frameworks, allowing me to create seamless digital experiences.</p>
      <Link to="/contact">
        <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-bold rounded transition w-full md:w-auto">LET'S CONNECT</button>
      </Link>
    </div>
  </div>
);

// ==========================================
// 3. PROJECTS PAGE
// ==========================================
const Projects = () => {
  const projectList = [
    { title: "Task Management System", client: "Emergence Systems & Solutions", tech: ["Laravel", "Blade", "MySQL", "Tailwind"], image: "emer.png", desc: "A comprehensive task tracking system to streamline workflow and monitor project progress." },
    { title: "MSU Buug Website", client: "Academic Institution", tech: ["PHP", "CSS", "JavaScript", "HTML"], image: "un.jpg", desc: "A dedicated platform for MSU Buug to provide school resources and announcements." },
    { title: "RFID School Attendance", client: "School Administration", tech: ["Laravel", "PHP", "RFID", "MySQL"], image: "on.png", desc: "Automated attendance tracking utilizing RFID hardware for real-time reporting." },
    { title: "Tree Coin Web App", client: "Personal Project", tech: ["HTML", "CSS", "Vanilla JS"], image: "tree.png", desc: "A front-end web application showcasing core design and JS principles." }
  ];

  return (
    <div className="min-h-[75vh] py-10 md:py-20 px-6 md:px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 md:mb-12 text-center text-white">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
        {projectList.map((proj, i) => (
          <div key={i} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition group flex flex-col">
            <div className="h-48 md:h-56 overflow-hidden relative">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-xs md:text-sm font-semibold text-primary mb-4">{proj.client}</p>
              <p className="text-gray-400 text-sm md:text-base mb-6 flex-1">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#1e1e1e] px-2 py-1 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-semibold text-gray-300 border border-gray-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. SKILLS PAGE
// ==========================================
const Skills = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-10 md:py-20">
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 text-white">Technical Skills</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl w-full">
      <SkillBox icon={<FaLaravel className="text-[#FF2D20] text-4xl md:text-5xl"/>} name="Laravel" />
      <SkillBox icon={<FaPhp className="text-[#777BB4] text-4xl md:text-5xl"/>} name="PHP" />
      <SkillBox icon={<FaReact className="text-[#61DAFB] text-4xl md:text-5xl"/>} name="React JS" />
      <SkillBox icon={<SiTailwindcss className="text-[#38B2AC] text-4xl md:text-5xl"/>} name="Tailwind" />
      <SkillBox icon={<SiMysql className="text-[#4479A1] text-4xl md:text-5xl"/>} name="MySQL" />
      <SkillBox icon={<FaJs className="text-[#F7DF1E] text-4xl md:text-5xl"/>} name="JavaScript" />
      <SkillBox icon={<FaCss3Alt className="text-[#1572B6] text-4xl md:text-5xl"/>} name="CSS 3" />
      <SkillBox icon={<FaGithub className="text-white text-4xl md:text-5xl"/>} name="Git / Github" />
    </div>
  </div>
);

const SkillBox = ({ icon, name }) => (
  <div className="bg-[#111] border border-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center gap-3 md:gap-4 hover:-translate-y-2 transition hover:border-primary/50">
    {icon}
    <span className="text-base md:text-xl font-semibold text-gray-300">{name}</span>
  </div>
);

// ==========================================
// 5. CONTACT PAGE
// ==========================================
const Contact = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-10 md:py-20">
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-white">Get In Touch</h1>
    <p className="text-gray-400 max-w-xl text-sm md:text-lg mb-10">Have a project in mind? Feel free to send me a message.</p>
    <form className="flex flex-col gap-4 md:gap-5 w-full max-w-md bg-[#111] p-6 md:p-8 rounded-xl border border-gray-800">
      <input type="text" placeholder="Your Name" className="bg-[#1e1e1e] text-white p-3 md:p-4 rounded outline-none focus:border-primary border border-transparent transition text-sm md:text-base" />
      <input type="email" placeholder="Your Email" className="bg-[#1e1e1e] text-white p-3 md:p-4 rounded outline-none focus:border-primary border border-transparent transition text-sm md:text-base" />
      <textarea placeholder="Your Message" rows="5" className="bg-[#1e1e1e] text-white p-3 md:p-4 rounded outline-none focus:border-primary border border-transparent transition resize-none text-sm md:text-base"></textarea>
      <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded transition text-sm md:text-base">SEND MESSAGE</button>
    </form>
  </div>
);

// ==========================================
// 6. MAIN APP ROUTING (GIMAKE RESPONSIVE)
// ==========================================
const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Logic para sa mobile menu toggle

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-primary selection:text-white pb-10 md:pb-20">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 md:py-6 px-6 md:px-10 border-b border-gray-800 bg-[#0a0a0a] sticky top-0 z-50">
          {/* <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black font-bold">RG</div>
          </Link> */}

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <li><Link to="/" className="hover:text-primary transition">HOME</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">ABOUT</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition">PROJECTS</Link></li>
            <li><Link to="/skills" className="hover:text-primary transition">SKILLS</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">CONTACT</Link></li>
          </ul>

          <button className="hidden md:block bg-primary hover:bg-red-700 text-white px-6 py-2 text-sm font-bold rounded transition">DOWNLOAD CV</button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-400 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-gray-800 p-6 flex flex-col gap-4 md:hidden z-50">
              <Link to="/" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link to="/projects" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>PROJECTS</Link>
              <Link to="/skills" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>SKILLS</Link>
              <Link to="/contact" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>CONTACT</Link>
              <button className="bg-primary hover:bg-red-700 text-white px-6 py-2 text-sm font-bold rounded transition w-full">DOWNLOAD CV</button>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const SkillItem = ({ icon, name }) => (
  <div className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-bold text-gray-400">
    <div className="bg-[#1e1e1e] p-2 md:p-3 rounded-lg border border-gray-800">{icon}</div>
    {name}
  </div>
);

export default App;