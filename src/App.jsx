import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, 
  FaPhp, FaLaravel, FaReact, FaCss3Alt, FaJs,
  FaBars, FaTimes,
  FaFileWord, FaImage, FaPalette 
} from 'react-icons/fa';

import { 
  SiTailwindcss, SiMysql
} from 'react-icons/si';

// ==========================================
// 1. HOME PAGE COMPONENT
// ==========================================
const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Aspiring Web Developer";
  
  useEffect(() => {
    let timeout;
    let index = 0;
    let isDeleting = false;

    const playTyping = () => {
      setText(fullText.slice(0, index));

      if (!isDeleting && index <= fullText.length) {
        index++;
        timeout = setTimeout(playTyping, 150); 
      } else if (!isDeleting && index > fullText.length) {
        isDeleting = true;
        timeout = setTimeout(playTyping, 2000); 
      } else if (isDeleting && index > 0) {
        index--;
        timeout = setTimeout(playTyping, 100); 
      } else {
        isDeleting = false;
        timeout = setTimeout(playTyping, 500); 
      }
    };

    timeout = setTimeout(playTyping, 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-20 flex flex-col md:flex-row items-center justify-between min-h-[75vh]">
        
        <div className="w-full md:w-1/2 z-10 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">Hello I am</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Reniel Glenn Aniora</h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white h-12">
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

          <div className="flex gap-4 justify-center md:justify-start">
            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/renielglenn.aniora.1" className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaFacebookF /></a>
            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/rnyel_glnn?igsh=a3p2bGZ1MjhydWFh" className="w-10 h-10 bg-pink-600 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaInstagram /></a>
            <a target='_blank' rel="noreferrer" href="https://github.com/reniela97-design" className="w-10 h-10 bg-gray-800 text-white rounded flex items-center justify-center hover:-translate-y-1 transition"><FaGithub /></a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-24 md:mt-0 relative min-h-[350px] md:min-h-[600px] items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-red-600/20 rounded-full blur-[80px] md:blur-[100px] z-0"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-gray-800 z-10 pointer-events-none"></div>

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

          <div className="relative z-30 w-[240px] h-[300px] md:w-[350px] md:h-[450px] rounded-b-[120px] md:rounded-b-[200px] overflow-hidden border-b-4 border-primary bg-[#0f0f0f]">
            <img src="an.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      <div className="mt-10 md:mt-20 border-y border-gray-800 py-4 md:py-6 overflow-hidden flex bg-black/40 backdrop-blur-sm">
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
        <img src="ren.png" alt="Reniel" className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-gray-800" />
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    { 
      title: "Task Management System", 
      client: "Emergence Systems & Solutions", 
      tech: ["Laravel", "Blade", "MySQL", "Tailwind"], 
      image: "emer.png", 
      desc: "A comprehensive task tracking system to streamline workflow and monitor project progress.",
      fullDetails: "This project was built during my OJT. It focuses on solving the company's need for an internal task tracker. I utilized Laravel's eloquent ORM for complex database relationships."
    },
    { 
      title: "MSU Buug Website", 
      client: "Academic Institution", 
      tech: ["PHP", "CSS", "JavaScript", "HTML"], 
      image: "un.jpg", 
      desc: "A dedicated platform for MSU Buug to provide school resources and announcements.",
      fullDetails: "Built with core web technologies, it ensures fast loading times and a responsive design across all devices."
    },
    { 
      title: "RFID School Attendance", 
      client: "School Administration", 
      tech: ["Laravel", "PHP", "RFID", "MySQL"], 
      image: "on.png", 
      desc: "Automated attendance tracking utilizing RFID hardware for real-time reporting.",
      fullDetails: "Integrated an external RFID scanner with a Laravel backend to automate student attendance."
    },
    { 
      title: "Tree Coin Web App", 
      client: "Personal Project", 
      tech: ["HTML", "CSS", "Vanilla JS"], 
      image: "tree.png", 
      desc: "A front-end web application showcasing core design and JS principles.",
      fullDetails: "A UI-focused personal project that demonstrates my ability to design interactive elements from scratch."
    }
  ];

  return (
    <div className="min-h-[75vh] py-10 md:py-20 px-6 md:px-10 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 text-center text-white">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectList.map((proj, i) => (
          <div key={i} onClick={() => setSelectedProject(proj)} className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer group">
            <div className="h-48 overflow-hidden">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-primary text-sm mb-4">{proj.client}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#1e1e1e] px-2 py-1 rounded text-[10px] text-gray-300 border border-gray-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#111] border border-gray-700 rounded-2xl p-6 md:p-10 max-w-3xl w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-5 text-gray-400 hover:text-white" onClick={() => setSelectedProject(null)}><FaTimes size={20}/></button>
            <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
            <p className="text-primary mb-6">{selectedProject.client}</p>
            <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.fullDetails}</p>
            <div className="flex flex-wrap gap-3">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-md text-sm border border-primary/20">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. SKILLS PAGE
// ==========================================
const Skills = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-10 md:py-20">
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 text-white">Technical Skills</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl w-full">
      <SkillBox icon={<FaLaravel className="text-[#FF2D20] text-4xl md:text-5xl"/>} name="Laravel" />
      <SkillBox icon={<FaPhp className="text-[#777BB4] text-4xl md:text-5xl"/>} name="PHP" />
      <SkillBox icon={<FaReact className="text-[#61DAFB] text-4xl md:text-5xl"/>} name="React JS" />
      <SkillBox icon={<SiTailwindcss className="text-[#38B2AC] text-4xl md:text-5xl"/>} name="Tailwind" />
      <SkillBox icon={<SiMysql className="text-[#4479A1] text-4xl md:text-5xl"/>} name="MySQL" />
      <SkillBox icon={<FaJs className="text-[#F7DF1E] text-4xl md:text-5xl"/>} name="JavaScript" />
      <SkillBox icon={<FaCss3Alt className="text-[#1572B6] text-4xl md:text-5xl"/>} name="CSS 3" />
      <SkillBox icon={<FaGithub className="text-white text-4xl md:text-5xl"/>} name="Git / Github" />
      
      <SkillBox icon={<FaLaravel className="text-[#F05340] text-4xl md:text-5xl"/>} name="Blade" />
      <SkillBox icon={<FaImage className="text-[#31A8FF] text-4xl md:text-5xl"/>} name="Photoshop" />
      <SkillBox icon={<FaPalette className="text-[#00C4CC] text-4xl md:text-5xl"/>} name="Canva" />
      <SkillBox icon={<FaFileWord className="text-[#2B579A] text-4xl md:text-5xl"/>} name="MS Word" />
    </div>
  </div>
);

const SkillBox = ({ icon, name }) => (
  <div className="bg-[#111]/60 backdrop-blur-sm border border-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center gap-3 hover:-translate-y-2 transition border-primary/20 shadow-lg">
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
    <form className="flex flex-col gap-4 w-full max-w-md bg-[#111]/80 p-8 rounded-xl border border-gray-800 shadow-xl">
      <input type="text" placeholder="Your Name" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition" />
      <input type="email" placeholder="Your Email" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition" />
      <textarea placeholder="Your Message" rows="5" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition resize-none"></textarea>
      <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 rounded transition shadow-lg shadow-primary/20">SEND MESSAGE</button>
    </form>
  </div>
);

// ==========================================
// 6. MAIN APP ROUTING
// ==========================================
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white font-sans selection:bg-primary pb-10 transition-colors">
        
        <nav className="flex justify-between items-center py-4 md:py-6 px-6 md:px-10 border-b border-gray-800/50 bg-black/30 backdrop-blur-md sticky top-0 z-50">
          <div className="text-xl font-bold tracking-widest text-white">
            <span className="text-primary"></span>
          </div>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <li><Link to="/" className="hover:text-primary transition">HOME</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">ABOUT</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition">PROJECTS</Link></li>
            <li><Link to="/skills" className="hover:text-primary transition">SKILLS</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">CONTACT</Link></li>
          </ul>

          <button className="hidden md:block bg-primary hover:bg-red-700 text-white px-6 py-2 text-sm font-bold rounded transition shadow-lg shadow-primary/20">DOWNLOAD CV</button>
          
          <button className="md:hidden text-gray-400 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800 p-6 flex flex-col gap-4 md:hidden z-50">
              <Link to="/" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link to="/projects" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>PROJECTS</Link>
              <Link to="/skills" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>SKILLS</Link>
              <Link to="/contact" className="hover:text-primary transition" onClick={() => setIsOpen(false)}>CONTACT</Link>
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
  <div className="flex items-center gap-2 text-lg font-bold text-gray-300 hover:text-white transition">
    <div className="bg-[#1e1e1e]/80 p-2 rounded-lg border border-gray-700 shadow-inner">{icon}</div>
    {name}
  </div>
);

export default App;