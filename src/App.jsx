import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, 
  FaPhp, FaLaravel, FaReact, FaCss3Alt, FaJs 
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
      <main className="max-w-7xl mx-auto px-10 pt-20 flex flex-col md:flex-row items-center justify-between min-h-[75vh]">
        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-xl font-semibold mb-2">Hello I am</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Reniel Glenn Aniora</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3">
             I'M AN <span className="text-primary">{text}<span className="animate-pulse">|</span></span>
          </h2>
          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            I build dynamic, secure, and user-friendly web applications. My recent work includes developing a Task Management System for Emergence Systems and Solutions, and crafting an RFID-based School Attendance System.
          </p>
          
          <Link to="/contact">
            <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 font-bold rounded mb-10 transition shadow-[0_0_15px_rgba(229,57,53,0.4)]">
              CONTACT ME
            </button>
          </Link>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:-translate-y-1 transition"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 bg-sky-500 rounded flex items-center justify-center hover:-translate-y-1 transition"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center hover:-translate-y-1 transition"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 bg-pink-600 rounded flex items-center justify-center hover:-translate-y-1 transition"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:-translate-y-1 transition"><FaGithub /></a>
          </div>
        </div>

        {/* Hero Image and Orbital Animation */}
        <div className="w-full md:w-1/2 flex justify-center mt-20 md:mt-0 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-gray-700/50 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e1e1e] p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaLaravel className="text-3xl text-[#FF2D20]" />
            </div>
            <div className="absolute bottom-10 left-10 bg-[#1e1e1e] p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaReact className="text-3xl text-[#61DAFB]" />
            </div>
            <div className="absolute top-20 right-5 bg-[#1e1e1e] p-3 rounded-xl border border-gray-700 animate-reverse-spin">
              <FaPhp className="text-3xl text-[#777BB4]" />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-600/50 rounded-full">
            <div className="absolute top-10 left-0 bg-[#1e1e1e] p-2 rounded-xl border border-gray-700 animate-bounce">
               <SiTailwindcss className="text-2xl text-[#38B2AC]" />
            </div>
            <div className="absolute bottom-5 right-5 bg-[#1e1e1e] p-2 rounded-xl border border-gray-700">
               <SiMysql className="text-2xl text-[#4479A1]" />
            </div>
          </div>

          <div className="relative z-10 w-[300px] h-[400px] overflow-hidden rounded-b-full bg-gradient-to-t from-dark to-transparent border-b-4 border-primary">
             <img 
               src="an.jpg" 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </main>

      {/* Marquee Skills Auto-Scroll */}
      <div className="mt-20 border-y border-gray-800 py-6 overflow-hidden flex bg-[#0a0a0a]">
        <div className="whitespace-nowrap flex animate-marquee items-center gap-16 px-10">
          <SkillItem icon={<FaLaravel className="text-[#FF2D20] text-2xl"/>} name="LARAVEL" />
          <SkillItem icon={<FaLaravel className="text-[#FF2D20] text-2xl"/>} name="BLADE" />
          <SkillItem icon={<FaPhp className="text-[#777BB4] text-2xl"/>} name="PHP" />
          <SkillItem icon={<FaReact className="text-[#61DAFB] text-2xl"/>} name="REACT" />
          <SkillItem icon={<SiTailwindcss className="text-[#38B2AC] text-2xl"/>} name="TAILWIND" />
          <SkillItem icon={<SiMysql className="text-[#4479A1] text-2xl"/>} name="MYSQL" />
          <SkillItem icon={<FaJs className="text-[#F7DF1E] text-2xl"/>} name="JAVASCRIPT" />
          <SkillItem icon={<FaCss3Alt className="text-[#1572B6] text-2xl"/>} name="CSS" />
        </div>
        <div className="whitespace-nowrap flex animate-marquee items-center gap-16 px-10" aria-hidden="true">
          <SkillItem icon={<FaLaravel className="text-[#FF2D20] text-2xl"/>} name="LARAVEL" />
          <SkillItem icon={<FaLaravel className="text-[#FF2D20] text-2xl"/>} name="BLADE" />
          <SkillItem icon={<FaPhp className="text-[#777BB4] text-2xl"/>} name="PHP" />
          <SkillItem icon={<FaReact className="text-[#61DAFB] text-2xl"/>} name="REACT" />
          <SkillItem icon={<SiTailwindcss className="text-[#38B2AC] text-2xl"/>} name="TAILWIND" />
          <SkillItem icon={<SiMysql className="text-[#4479A1] text-2xl"/>} name="MYSQL" />
          <SkillItem icon={<FaJs className="text-[#F7DF1E] text-2xl"/>} name="JAVASCRIPT" />
          <SkillItem icon={<FaCss3Alt className="text-[#1572B6] text-2xl"/>} name="CSS" />
        </div>
      </div>
    </>
  );
};

// ==========================================
// 2. ABOUT PAGE COMPONENT
// ==========================================
const About = () => (
  <div className="min-h-[75vh] flex flex-col md:flex-row items-center justify-center px-10 max-w-6xl mx-auto gap-12 py-20">
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-[350px] h-[350px]">
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
        {/* CHANGE 'about-pic.jpg' TO YOUR ACTUAL IMAGE NAME */}
        <img 
          src="ren.png" 
          alt="Reniel Glenn Aniora" 
          className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-gray-800 shadow-xl"
        />
      </div>
    </div>
    
    <div className="w-full md:w-1/2 text-left">
      <h1 className="text-5xl font-bold text-primary mb-6">About Me</h1>
      <p className="text-gray-400 text-lg leading-relaxed mb-4">
        I am a passionate aspiring web developer with a strong desire to continuously learn and expand my skill set. I am always eager to explore different front-end technologies, especially Laravel Blade and React, to build dynamic, responsive, and user-friendly web applications.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        My goal is to master modern web development tools and frameworks, allowing me to create seamless digital experiences and solve real-world problems through efficient coding.
      </p>
      <Link to="/contact">
        <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-bold rounded transition">
          LET'S CONNECT
        </button>
      </Link>
    </div>
  </div>
);

// ==========================================
// 3. PROJECTS PAGE COMPONENT
// ==========================================
const Projects = () => {
  const projectList = [
    {
      title: "Task Management System",
      client: "Emergence Systems and Solutions",
      tech: ["Laravel", "Blade", "MySQL", "Tailwind"],
      image: "emer.png", // CHANGE THIS IMAGE FILENAME
      desc: "A comprehensive task tracking and management system designed to streamline employee workflow, monitor project progress, and enhance team productivity."
    },
    {
      title: "MSU Buug Website",
      client: "Academic Institution",
      tech: ["PHP", "CSS", "JavaScript", "HTML"],
      image: "un.jpg", // CHANGE THIS IMAGE FILENAME
      desc: "A dedicated web platform developed for MSU Buug to provide students, faculty, and visitors with accessible information, announcements, and school resources."
    },
    {
      title: "RFID School Attendance System",
      client: "School Administration",
      tech: ["Laravel", "PHP", "RFID Technology", "MySQL"],
      image: "on.png", // CHANGE THIS IMAGE FILENAME
      desc: "An automated attendance tracking system utilizing RFID hardware to securely and efficiently monitor student logs and generate real-time attendance reports."
    },
    {
      title: "Tree Coin Web App",
      client: "Personal Web Application",
      tech: ["Pure HTML", "Pure CSS", "Vanilla JS"],
      image: "tree.png", // CHANGE THIS IMAGE FILENAME
      desc: "A purely front-end web application built entirely from scratch without frameworks, showcasing fundamental web design principles and core JavaScript functionality."
    }
  ];

  return (
    <div className="min-h-[75vh] py-20 px-10">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">Featured Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectList.map((proj, i) => (
          <div key={i} className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition duration-300 group">
            {/* Project Image */}
            <div className="h-56 overflow-hidden relative">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-300"></div>
            </div>
            
            {/* Project Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{proj.client}</p>
              <p className="text-gray-400 mb-6 line-clamp-3">{proj.desc}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#1e1e1e] px-3 py-1 rounded text-xs font-semibold text-gray-300 border border-gray-700">
                    {t}
                  </span>
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
// 4. SKILLS PAGE COMPONENT
// ==========================================
const Skills = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-10 py-20">
    <h1 className="text-5xl font-bold text-primary mb-10">Technical Skills</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
      <SkillBox icon={<FaLaravel className="text-[#FF2D20] text-5xl"/>} name="Laravel" />
      <SkillBox icon={<FaLaravel className="text-[#FF2D20] text-5xl"/>} name="Laravel Blade" />
      <SkillBox icon={<FaPhp className="text-[#777BB4] text-5xl"/>} name="PHP" />
      <SkillBox icon={<FaReact className="text-[#61DAFB] text-5xl"/>} name="React JS" />
      <SkillBox icon={<SiTailwindcss className="text-[#38B2AC] text-5xl"/>} name="Tailwind CSS" />
      <SkillBox icon={<SiMysql className="text-[#4479A1] text-5xl"/>} name="MySQL" />
      <SkillBox icon={<FaJs className="text-[#F7DF1E] text-5xl"/>} name="JavaScript" />
      <SkillBox icon={<FaCss3Alt className="text-[#1572B6] text-5xl"/>} name="CSS 3" />
    </div>
  </div>
);

const SkillBox = ({ icon, name }) => (
  <div className="bg-[#111111] border border-gray-800 p-8 rounded-xl flex flex-col items-center gap-4 hover:-translate-y-2 transition duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,57,53,0.2)]">
    {icon}
    <span className="text-xl font-semibold text-gray-300">{name}</span>
  </div>
);

// ==========================================
// 5. CONTACT PAGE COMPONENT
// ==========================================
const Contact = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-10 py-20">
    <h1 className="text-5xl font-bold text-primary mb-4">Get In Touch</h1>
    <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10">
      Have a project in mind or looking for a developer? Feel free to send me a message.
    </p>
    
    <form className="flex flex-col gap-5 w-full max-w-md bg-[#111111] p-8 rounded-xl border border-gray-800" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Your Name" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition" />
      <input type="email" placeholder="Your Email" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition" />
      <textarea placeholder="Your Message" rows="5" className="bg-[#1e1e1e] text-white p-4 rounded outline-none focus:border-primary border border-transparent transition resize-none"></textarea>
      <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 rounded transition mt-2">SEND MESSAGE</button>
    </form>
  </div>
);

// ==========================================
// 6. MAIN APPLICATION ROUTING
// ==========================================
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white pb-20">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black font-bold">RG</div>
            <span className="text-xl font-bold tracking-widest text-white"></span>
          </Link>
          
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <li><Link to="/" className="cursor-pointer hover:text-primary transition">HOME</Link></li>
            <li><Link to="/about" className="cursor-pointer hover:text-primary transition">ABOUT</Link></li>
            <li><Link to="/projects" className="cursor-pointer hover:text-primary transition">PROJECTS</Link></li>
            <li><Link to="/skills" className="cursor-pointer hover:text-primary transition">SKILLS</Link></li>
            <li><Link to="/contact" className="cursor-pointer hover:text-primary transition">CONTACT</Link></li>
          </ul>

          <button className="bg-primary hover:bg-red-700 text-white px-6 py-2 text-sm font-bold rounded transition">
            DOWNLOAD CV
          </button>
        </nav>

        {/* Page Routes */}
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
  <div className="flex items-center gap-3 text-xl font-bold text-gray-400">
    <div className="bg-[#1e1e1e] p-3 rounded-lg border border-gray-800">
      {icon}
    </div>
    {name}
  </div>
);

export default App;