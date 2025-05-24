//   import React, { useState, useEffect } from 'react';
// import { 
//   Github, 
//   Linkedin, 
//   Twitter, 
//   Download, 
//   Award, 
//   Code, 
//   Briefcase, 
//   Mail, 
//   Phone,
//   ChevronDown,
//   Star,
//   GitBranch,
//   Calendar,
//   MapPin,
//   Trophy,
//   Zap,
//   Database,
//   Globe,
//   Eye,
//   Heart,
//   Rocket,
//   Sparkles,
//   Terminal,
//   Coffee
// } from 'lucide-react';

// const KaustubhPortfolio = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Projects data with enhanced details
//   const projects = [
//     {
//       id: 1,
//       title: "Orbit - Gen Z Prediction Markets",
//       description: "Revolutionary prediction markets with Tinder-style swipe interface built on Electroneum Network. Features seamless Telegram integration and modern UI/UX for Gen Z users.",
//       tech: ["React", "TypeScript", "Vite", "Electroneum", "Telegram Mini Apps", "Smart Contracts"],
//       github: "https://github.com/Kaustubh-404/Orbit",
//       demo: "https://orbit-demo.vercel.app",
//       image: "🎲",
//       featured: true,
//       category: "Web3",
//       gradient: "from-[#d3aeff] to-[#ff6b9d]"
//     },
//     {
//       id: 2,
//       title: "SafeStakes - Blockchain Accountability",
//       description: "Cross-chain accountability platform built on Polkadot that helps users achieve goals through blockchain-enforced commitments with smart contract automation.",
//       tech: ["Next.js", "Polkadot", "Smart Contracts", "Cross-chain", "XCM"],
//       github: "https://github.com/Kaustubh-404/ChainCommit",
//       demo: "https://safestakes.vercel.app",
//       image: "🛡️",
//       featured: true,
//       category: "Web3",
//       gradient: "from-[#ff6b9d] to-[#d3aeff]"
//     },
//     {
//       id: 3,
//       title: "P2P-Address Logger",
//       description: "Decentralized P2P Address Book on Avail DA network that tracks and logs all peers connecting to the Avail network, creating a comprehensive peer discovery map.",
//       tech: ["Python", "Avail DA", "P2P Networking", "Blockchain"],
//       github: "https://github.com/Kaustubh-404/P2P-Address-Logger",
//       demo: "#",
//       image: "🌐",
//       category: "Blockchain",
//       gradient: "from-[#ff6b9d] to-[#45b7d1]"
//     },
//     {
//       id: 4,
//       title: "Lakshavya - Air Marshal Training",
//       description: "Advanced training simulation for air marshals providing realistic environments with immersive scenarios using computer vision and ragdoll physics.",
//       tech: ["Python", "OpenCV", "Simulation", "ML"],
//       github: "https://github.com/Kaustubh-404/Lakshavya",
//       demo: "#",
//       image: "✈️",
//       category: "AI/ML",
//       gradient: "from-[#ffd93d] to-[#45b7d1]"
//     },
//     {
//       id: 5,
//       title: "ElectraPay - DeFi Payment System",
//       description: "Decentralized payment ecosystem on Sonic with AI-driven automation for recurring payments, cross-chain bridging, and liquidity optimization for passive income.",
//       tech: ["Sonic Blockchain", "Smart Contracts", "AI", "DeFi", "Cross-chain"],
//       github: "https://github.com/Kaustubh-404/ElectraPay",
//       demo: "#",
//       image: "💳",
//       featured: true,
//       category: "DeFi",
//       gradient: "from-[#ff6b9d] to-[#d3aeff]"
//     },
//     {
//       id: 6,
//       title: "Sketchy - Web3 Drawing Game",
//       description: "Interactive blockchain-based drawing game where creativity meets competition. Players wager cryptocurrency in real-time drawing and guessing challenges.",
//       tech: ["Next.js", "Web3", "Smart Contracts", "Gaming", "Cryptocurrency"],
//       github: "https://github.com/Kaustubh-404/Sketchy",
//       demo: "#",
//       image: "🎨",
//       category: "Gaming",
//       gradient: "from-[#45b7d1] to-[#8b5cf6]"
//     }
//   ];

//   // Enhanced achievements
//   const achievements = [
//     { 
//       title: "Smart India Hackathon 2023", 
//       category: "Blockchain & Cybersecurity", 
//       icon: "🥇",
//       position: "1st Prize",
//       color: "bg-gradient-to-br from-yellow-400 to-yellow-600"
//     },
//     { 
//       title: "Unfold 2024", 
//       category: "Asia's largest hackathon - Agoric Bounty", 
//       icon: "🥉",
//       position: "3rd Prize",
//       color: "bg-gradient-to-br from-orange-400 to-red-500"
//     },
//     { 
//       title: "Electroneum Hackathon 2025", 
//       category: "Devpost", 
//       icon: "🏅",
//       position: "4th Prize",
//       color: "bg-gradient-to-br from-purple-400 to-pink-500"
//     },
//     { 
//       title: "Encode NEO X Hackathon 2023", 
//       category: "Web3", 
//       icon: "🥇",
//       position: "1st Prize",
//       color: "bg-gradient-to-br from-blue-400 to-purple-500"
//     },
//     { 
//       title: "ETH Mumbai 2024", 
//       category: "AvailDA track", 
//       icon: "🥉",
//       position: "3rd Prize",
//       color: "bg-gradient-to-br from-indigo-400 to-purple-500"
//     },
//     { 
//       title: "Web3 Conf Hackathon 2023", 
//       category: "Blockchain", 
//       icon: "🏅",
//       position: "4th Prize",
//       color: "bg-gradient-to-br from-pink-400 to-red-500"
//     }
//   ];

//   // Enhanced skills
//   const skills = {
//     languages: ["Python", "JavaScript", "TypeScript", "Go"],
//     frameworks: ["Next.js", "React.js", "Express.js", "Tailwind CSS", "Web3.js"],
//     tools: ["Git", "Linux", "VS Code", "Docker"],
//     databases: ["MySQL", "PostgreSQL", "MongoDB"],
//     blockchain: ["Ethereum", "Polkadot", "Avail DA", "Smart Contracts", "DeFi"]
//   };

//   // Experience with enhanced styling
//   const experience = [
//     {
//       title: "MERN Stack Developer",
//       company: "Small Group",
//       period: "2024 - Present",
//       description: "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Working on scalable solutions and modern web technologies.",
//       tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript"],
//       color: "from-[#d3aeff] to-[#ff6b9d]"
//     },
//     {
//       title: "React Developer Intern",
//       company: "Coderpreneurs IT Services & Solutions",
//       period: "Dec 2023 - Feb 2024",
//       description: "Developed responsive React applications and collaborated on various client projects. Gained experience in modern frontend development practices.",
//       tech: ["React.js", "JavaScript", "CSS", "Git"],
//       color: "from-[#ff6b9d] to-[#45b7d1]"
//     },
//     {
//       title: "Technical Training",
//       company: "TNSIF Training Program",
//       period: "Sept 2024 - Dec 2024",
//       description: "Intensive training in technical and soft skills development. Focused on industry-relevant technologies and professional development.",
//       tech: ["Full Stack Development", "Professional Skills", "Project Management"],
//       color: "from-[#45b7d1] to-[#d3aeff]"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

// const downloadResume = () => {
//   const link = document.createElement('a');
//   link.href = 'https://drive.google.com/uc?export=download&id=19QFEAPYmTNcTlYDqEM98veH9VD58o88P';
//   link.target = '_blank'; 
//   link.rel = 'noopener noreferrer';
//   link.click();
// };



//   return (
//     <div className="min-h-screen bg-[#efe7f7] font-mono relative overflow-x-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-[#d3aeff] rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#ff6b9d] rounded-full opacity-30 animate-bounce"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#45b7d1] rounded-full opacity-25 animate-ping"></div>
//         <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#8b5cf6] rounded-full opacity-20 animate-pulse"></div>
//       </div>

//       {/* Cursor Follower */}
//       <div 
//         className="fixed w-6 h-6 bg-[#d3aeff] rounded-full pointer-events-none z-50 opacity-50 transition-all duration-100 ease-out mix-blend-difference"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//           transform: `scale(${isLoaded ? 1 : 0})`,
//         }}
//       />

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-[#efe7f7]/80 backdrop-blur-md border-b-4 border-black z-40">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-black flex items-center gap-2">
//               <div className="w-8 h-8 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] rounded-lg border-2 border-black flex items-center justify-center">
//                 <Terminal className="w-4 h-4" />
//               </div>
//               Kaustubh.dev
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {['home', 'about', 'projects', 'achievements', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize font-medium transition-all duration-300 relative group ${
//                     activeSection === section ? 'text-[#d3aeff]' : 'hover:text-[#d3aeff]'
//                   }`}
//                 >
//                   {section}
//                   <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#d3aeff] transform transition-transform duration-300 ${
//                     activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//                   }`}></span>
//                 </button>
//               ))}
//               <button
//                 onClick={downloadResume}
//                 className="bg-gradient-to-r from-[#ff6b9d] to-[#d3aeff] text-black px-6 py-3 border-4 border-black rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
//               >
//                 <Download className="inline w-4 h-4 mr-2" />
//                 Resume
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden relative z-50"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <div className="w-8 h-8 flex flex-col justify-center space-y-1">
//                 <div className={`h-1 w-8 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
//                 <div className={`h-1 w-8 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
//                 <div className={`h-1 w-8 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
//             <div className="border-t-2 border-black pt-4">
//               {['home', 'about', 'projects', 'achievements', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="block w-full text-left py-3 capitalize font-medium hover:text-[#d3aeff] transition-colors"
//                 >
//                   {section}
//                 </button>
//               ))}
//               <button
//                 onClick={downloadResume}
//                 className="mt-4 bg-gradient-to-r from-[#ff6b9d] to-[#d3aeff] text-black px-6 py-3 border-4 border-black rounded-2xl font-bold w-full"
//               >
//                 <Download className="inline w-4 h-4 mr-2" />
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 relative">
//         <div className="max-w-6xl mx-auto text-center relative">
//           {/* Floating Elements */}
//           <div className="absolute -top-10 left-10 animate-float">
//             <div className="w-16 h-16 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] rounded-2xl border-4 border-black flex items-center justify-center text-2xl rotate-12">
//               🚀
//             </div>
//           </div>
//           <div className="absolute top-20 right-10 animate-float-delayed">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b9d] to-[#45b7d1] rounded-full border-4 border-black flex items-center justify-center">
//               ⚡
//             </div>
//           </div>

//           <div className="mb-12 relative">
//             <div className="w-65 h-65 mx-auto mb-8 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] rounded-lg border-8 border-black relative overflow-hidden group">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b9d] to-[#d3aeff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <img 
//                 src="/kaustubh.jpg" 
//                 alt="Kaustubh Pardeshi" 
//                 className="w-110px h-110px object-cover  relative z-10 group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
            
//             <div className="relative">
//               <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
//                 <span className="bg-gradient-to-r from-black via-[#d3aeff] to-black bg-clip-text text-transparent animate-gradient bg-300% bg-left">
//                   KAUSTUBH
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-[#d3aeff] via-[#ff6b9d] to-[#45b7d1] bg-clip-text text-transparent animate-gradient bg-300% bg-right">
//                   PARDESHI
//                 </span>
//                 <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#d3aeff]/20 to-[#ff6b9d]/20 blur-3xl"></div>
//               </h1>
//             </div>

//             <div className="space-y-4 mb-12">
//               <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-black to-[#d3aeff] bg-clip-text text-transparent">
//                 Fullstack Developer • Web3 Enthusiast
//               </p>
//               <p className="text-lg md:text-xl font-semibold text-black/70">
//                 Hackathon Winner • Blockchain Builder • Future Creator
//               </p>
//             </div>

//             <div className="flex flex-wrap justify-center gap-6">
//               <a
//                 href="https://github.com/Kaustubh-404"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative bg-black text-white px-8 py-4 border-4 border-black rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(211,174,255,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
//               >
//                 <Github className="w-5 h-5 mr-3 group-hover:animate-spin" />
//                 GitHub
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#d3aeff] to-[#ff6b9d] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//               </a>
              
//               <a
//                 href="https://linkedin.com/in/kaustubh-pardeshi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative bg-gradient-to-r from-[#d3aeff] to-[#ff6b9d] text-black px-8 py-4 border-4 border-black rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
//               >
//                 <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
//                 LinkedIn
//               </a>
              
//               <a
//                 href="https://twitter.com/kaustubh404"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative bg-gradient-to-r from-[#ff6b9d] to-[#45b7d1] text-black px-8 py-4 border-4 border-black rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
//               >
//                 <Twitter className="w-5 h-5 mr-3 group-hover:animate-pulse" />
//                 Twitter
//               </a>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="mt-20 animate-bounce">
//             <ChevronDown className="w-10 h-10 mx-auto text-[#d3aeff]" />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-black mb-16 text-center bg-gradient-to-r from-[#d3aeff] to-[#ff6b9d] bg-clip-text text-transparent">
//             About Me
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 mb-16">
//             <div className="group bg-white border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(211,174,255,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
//               <h3 className="text-3xl font-bold mb-6 flex items-center">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] rounded-xl border-2 border-black flex items-center justify-center mr-4">
//                   <Code className="w-6 h-6" />
//                 </div>
//                 My Journey
//               </h3>
//               <div className="space-y-4 text-lg leading-relaxed">
//                 <p>
//                   Passionate fullstack developer with expertise in both Web2 and Web3 technologies. 
//                   Currently working as a MERN Stack Developer at Small Group, I specialize in creating 
//                   innovative, user-centric solutions that bridge traditional and blockchain ecosystems.
//                 </p>
//                 <p>
//                   With multiple hackathon wins including Smart India Hackathon 2023 and ETH Mumbai 2024, 
//                   I thrive on building cutting-edge applications that solve real-world problems.
//                 </p>
//                 <div className="flex items-center text-[#d3aeff] font-semibold">
//                   <MapPin className="w-5 h-5 mr-2" />
//                   Pune, Maharashtra, India
//                 </div>
//               </div>
//             </div>

//             <div className="group bg-white border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(255,107,157,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b9d] to-[#45b7d1] opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
//               <h3 className="text-3xl font-bold mb-6 flex items-center">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b9d] to-[#45b7d1] rounded-xl border-2 border-black flex items-center justify-center mr-4">
//                   <Briefcase className="w-6 h-6" />
//                 </div>
//                 Experience
//               </h3>
//               {experience.map((exp, index) => (
//                 <div key={index} className="mb-8 last:mb-0 group/item">
//                   <div className="relative">
//                     <h4 className="font-bold text-xl mb-1">{exp.title}</h4>
//                     <div className={`absolute -left-4 top-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}></div>
//                   </div>
//                   <p className="text-[#d3aeff] font-bold text-lg">{exp.company}</p>
//                   <p className="text-sm text-gray-600 mb-3 flex items-center">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {exp.period}
//                   </p>
//                   <p className="text-base mb-3 leading-relaxed">{exp.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.tech.map((tech, techIndex) => (
//                       <span key={techIndex} className="bg-gradient-to-r from-[#efe7f7] to-[#d3aeff]/20 px-3 py-1 rounded-xl text-sm border-2 border-black font-semibold">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Skills Section */}
//           <div className="bg-white border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d3aeff] via-[#ff6b9d] to-[#45b7d1]"></div>
//             <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
//               <Sparkles className="w-8 h-8 mr-3 text-[#d3aeff]" />
//               Technical Arsenal
//             </h3>
//             <div className="grid md:grid-cols-5 gap-8">
//               {Object.entries(skills).map(([category, skillList]) => (
//                 <div key={category} className="group">
//                   <h4 className="font-bold mb-4 capitalize flex items-center text-lg">
//                     {category === 'languages' && <Code className="w-5 h-5 mr-2 text-[#d3aeff]" />}
//                     {category === 'frameworks' && <Globe className="w-5 h-5 mr-2 text-[#ff6b9d]" />}
//                     {category === 'tools' && <Zap className="w-5 h-5 mr-2 text-[#45b7d1]" />}
//                     {category === 'databases' && <Database className="w-5 h-5 mr-2 text-[#8b5cf6]" />}
//                     {category === 'blockchain' && <GitBranch className="w-5 h-5 mr-2 text-[#ffd93d]" />}
//                     {category}
//                   </h4>
//                   <div className="space-y-3">
//                     {skillList.map((skill, index) => (
//                       <div key={index} className="group/skill bg-gradient-to-r from-[#efe7f7] to-white px-4 py-3 rounded-2xl border-2 border-black text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer">
//                         {skill}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4 bg-gradient-to-br from-[#d3aeff]/10 to-[#ff6b9d]/10 relative">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#d3aeff] to-[#ff6b9d] bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Innovative solutions that bridge Web2 and Web3, featuring cutting-edge technology and user-centric design
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform hover:-translate-x-3 hover:-translate-y-3 ${
//                   project.featured ? 'md:col-span-2 lg:col-span-1' : ''
//                 }`}
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
//                 }}
//               >
//                 <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
//                 <div className="p-6 relative">
//                   <div className="absolute top-4 right-4 opacity-20 text-6xl group-hover:opacity-40 transition-opacity duration-300">
//                     {project.image}
//                   </div>
                  
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="text-xl font-bold leading-tight pr-16">{project.title}</h3>
//                     {project.featured && (
//                       <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-lg text-xs font-bold border-2 border-black">
//                         <Star className="w-3 h-3 inline mr-1" />
//                         FEATURED
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="mb-4">
//                     <span className={`text-xs bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-xl border-2 border-black font-bold`}>
//                       {project.category}
//                     </span>
//                   </div>
                  
//                   <p className="text-sm mb-6 text-gray-700 leading-relaxed">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.slice(0, 3).map((tech, techIndex) => (
//                       <span key={techIndex} className="bg-[#efe7f7] text-black px-3 py-1 rounded-xl text-xs border-2 border-black font-semibold">
//                         {tech}
//                       </span>
//                     ))}
//                     {project.tech.length > 3 && (
//                       <span className="bg-gray-200 text-black px-3 py-1 rounded-xl text-xs border-2 border-black font-semibold">
//                         +{project.tech.length - 3} more
//                       </span>
//                     )}
//                   </div>
                  
//                   <div className="flex gap-3">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center bg-black text-white px-4 py-2 rounded-xl text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(211,174,255,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 group/btn"
//                     >
//                       <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
//                       Code
//                     </a>
//                     {project.demo !== '#' && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`flex items-center bg-gradient-to-r ${project.gradient} text-black px-4 py-2 rounded-xl text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 group/btn`}
//                       >
//                         <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
//                         Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section id="achievements" className="py-20 px-4 relative">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#ffd93d] to-[#ff6b9d] bg-clip-text text-transparent">
//               Achievements & Awards
//             </h2>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Recognition for innovation in blockchain, Web3, and cybersecurity across major hackathons
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 className={`group bg-white border-4 border-black rounded-3xl p-6 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden`}
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
//                 }}
//               >
//                 <div className={`absolute top-0 left-0 w-full h-2 ${achievement.color}`}></div>
//                 <div className="relative z-10">
//                   <div className="text-5xl mb-4 group-hover:animate-bounce">{achievement.icon}</div>
//                   <div className="bg-gradient-to-r from-black to-[#d3aeff] bg-clip-text text-transparent font-black text-sm mb-2">
//                     {achievement.position}
//                   </div>
//                   <h3 className="font-bold text-lg mb-3 leading-tight">{achievement.title}</h3>
//                   <p className="text-sm text-gray-600 mb-4">{achievement.category}</p>
//                   <div className="flex items-center">
//                     <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
//                     <span className="text-xs font-bold bg-gradient-to-r from-[#ffd93d] to-[#ff6b9d] bg-clip-text text-transparent">
//                       HACKATHON WINNER
//                     </span>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#d3aeff]/20 to-[#ff6b9d]/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b9d] to-[#d3aeff] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <Award className="w-16 h-16 mx-auto mb-4 text-black" />
//               <h3 className="text-3xl font-black mb-3 text-black">6+ Hackathon Wins</h3>
//               <p className="text-black font-semibold text-lg">
//                 Consistently delivering innovative solutions in blockchain, cybersecurity, and Web3 domains
//               </p>
//               <div className="flex justify-center items-center mt-4 space-x-2">
//                 <Rocket className="w-5 h-5 text-black" />
//                 <span className="font-bold text-black">Innovation • Excellence • Impact</span>
//                 <Heart className="w-5 h-5 text-red-500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#ff6b9d]/10 to-[#45b7d1]/10 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-12">
//             <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#ff6b9d] to-[#45b7d1] bg-clip-text text-transparent">
//               Let's Build Something Amazing
//             </h2>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
//               Ready to bring your next project to life? Let's connect and create something extraordinary together!
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             <div className="group bg-white border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(255,107,157,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ff6b9d] to-[#d3aeff] opacity-10 rounded-full transform translate-x-12 -translate-y-12"></div>
//               <Mail className="w-12 h-12 mx-auto mb-4 text-[#ff6b9d] group-hover:animate-bounce" />
//               <h3 className="font-bold text-xl mb-3">Email</h3>
//               <a href="mailto:kaustubhp2003@gmail.com" className="text-[#ff6b9d] font-bold text-lg hover:underline break-all">
//                 kaustubhp2003@gmail.com
//               </a>
//             </div>
            
//             <div className="group bg-white border-4 border-black rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(69,183,209,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#45b7d1] to-[#8b5cf6] opacity-10 rounded-full transform translate-x-12 -translate-y-12"></div>
//               <Phone className="w-12 h-12 mx-auto mb-4 text-[#45b7d1] group-hover:animate-bounce" />
//               <h3 className="font-bold text-xl mb-3">Phone</h3>
//               <a href="tel:+917058400616" className="text-[#45b7d1] font-bold text-lg hover:underline">
//                 +91 7058400616
//               </a>
//             </div>
//           </div>

//           <div className="flex justify-center gap-8 mb-12">
//             <a
//               href="https://github.com/Kaustubh-404"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-black text-white p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-black"
//             >
//               <Github className="w-8 h-8 group-hover:animate-spin" />
//             </a>
            
//             <a
//               href="https://linkedin.com/in/kaustubh-pardeshi"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] text-black p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-black"
//             >
//               <Linkedin className="w-8 h-8 group-hover:animate-bounce" />
//             </a>
            
//             <a
//               href="https://twitter.com/kaustubh404"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-gradient-to-br from-[#ff6b9d] to-[#45b7d1] text-black p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-black"
//             >
//               <Twitter className="w-8 h-8 group-hover:animate-pulse" />
//             </a>
//           </div>

//           <div className="bg-gradient-to-r from-[#d3aeff] to-[#ff6b9d] border-4 border-black rounded-3xl p-8 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b9d] to-[#d3aeff] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <Coffee className="w-12 h-12 mx-auto mb-4 text-black" />
//               <h3 className="text-2xl font-black mb-3 text-black">Ready to Collaborate?</h3>
//               <p className="text-black font-semibold mb-6">
//                 Whether it's Web3 innovation, full-stack development, or hackathon collaboration - I'm always excited to work on challenging projects!
//               </p>
//               <div className="flex justify-center items-center space-x-3">
//                 <span className="font-bold text-black">Available for</span>
//                 <div className="flex space-x-2">
//                   <span className="bg-black text-white px-3 py-1 rounded-xl text-sm font-bold">Freelance</span>
//                   <span className="bg-black text-white px-3 py-1 rounded-xl text-sm font-bold">Full-time</span>
//                   <span className="bg-black text-white px-3 py-1 rounded-xl text-sm font-bold">Collaboration</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-12 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#d3aeff]/10 to-[#ff6b9d]/10"></div>
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <div className="mb-6">
//             <div className="text-3xl font-black flex items-center justify-center gap-3 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-[#d3aeff] to-[#ff6b9d] rounded-xl border-2 border-white flex items-center justify-center">
//                 <Terminal className="w-5 h-5 text-black" />
//               </div>
//               Kaustubh.dev
//             </div>
//             <p className="text-lg text-gray-300 mb-6">
//               Built with ❤️ using React, TypeScript & Tailwind CSS
//             </p>
//           </div>
          
//           <div className="border-t border-gray-700 pt-6">
//             <p className="text-gray-400 mb-2">
//               © 2024 Kaustubh Pardeshi. All rights reserved.
//             </p>
//             <p className="text-sm text-gray-500">
//               Fullstack Developer • Web3 Enthusiast • Problem Solver • Future Creator
//             </p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(5deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-5deg); }
//         }
        
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 3s ease-in-out infinite 1s;
//         }
        
//         .animate-gradient {
//           animation: gradient 3s ease infinite;
//         }
        
//         .bg-300% {
//           background-size: 300% 300%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KaustubhPortfolio;
"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Award,
  Code,
  Briefcase,
  Mail,
  Phone,
  ChevronDown,
  Star,
  GitBranch,
  Calendar,
  MapPin,
  Trophy,
  Zap,
  Database,
  Globe,
  Eye,
  Heart,
  Rocket,
  Sparkles,
  Terminal,
  Coffee,
} from "lucide-react"

const KaustubhPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Projects data with enhanced details
  const projects = [
    {
      id: 1,
      title: "Orbit - Gen Z Prediction Markets",
      description:
        "Revolutionary prediction markets with Tinder-style swipe interface built on Electroneum Network. Features seamless Telegram integration and modern UI/UX for Gen Z users.",
      tech: ["React", "TypeScript", "Vite", "Electroneum", "Telegram Mini Apps", "Smart Contracts"],
      github: "https://github.com/Kaustubh-404/Orbit",
      demo: "https://orbit-demo.vercel.app",
      image: "🎲",
      featured: true,
      category: "Web3",
      gradient: "from-[#64748b] to-[#475569]",
    },
    {
      id: 2,
      title: "SafeStakes - Blockchain Accountability",
      description:
        "Cross-chain accountability platform built on Polkadot that helps users achieve goals through blockchain-enforced commitments with smart contract automation.",
      tech: ["Next.js", "Polkadot", "Smart Contracts", "Cross-chain", "XCM"],
      github: "https://github.com/Kaustubh-404/ChainCommit",
      demo: "https://safestakes.vercel.app",
      image: "🛡️",
      featured: true,
      category: "Web3",
      gradient: "from-[#475569] to-[#64748b]",
    },
    {
      id: 3,
      title: "P2P-Address Logger",
      description:
        "Decentralized P2P Address Book on Avail DA network that tracks and logs all peers connecting to the Avail network, creating a comprehensive peer discovery map.",
      tech: ["Python", "Avail DA", "P2P Networking", "Blockchain"],
      github: "https://github.com/Kaustubh-404/P2P-Address-Logger",
      demo: "#",
      image: "🌐",
      category: "Blockchain",
      gradient: "from-[#64748b] to-[#334155]",
    },
    {
      id: 4,
      title: "Lakshavya - Air Marshal Training",
      description:
        "Advanced training simulation for air marshals providing realistic environments with immersive scenarios using computer vision and ragdoll physics.",
      tech: ["Python", "OpenCV", "Simulation", "ML"],
      github: "https://github.com/Kaustubh-404/Lakshavya",
      demo: "#",
      image: "✈️",
      category: "AI/ML",
      gradient: "from-[#64748b] to-[#334155]",
    },
    {
      id: 5,
      title: "ElectraPay - DeFi Payment System",
      description:
        "Decentralized payment ecosystem on Sonic with AI-driven automation for recurring payments, cross-chain bridging, and liquidity optimization for passive income.",
      tech: ["Sonic Blockchain", "Smart Contracts", "AI", "DeFi", "Cross-chain"],
      github: "https://github.com/Kaustubh-404/ElectraPay",
      demo: "#",
      image: "💳",
      featured: true,
      category: "DeFi",
      gradient: "from-[#64748b] to-[#334155]",
    },
    {
      id: 6,
      title: "Sketchy - Web3 Drawing Game",
      description:
        "Interactive blockchain-based drawing game where creativity meets competition. Players wager cryptocurrency in real-time drawing and guessing challenges.",
      tech: ["Next.js", "Web3", "Smart Contracts", "Gaming", "Cryptocurrency"],
      github: "https://github.com/Kaustubh-404/Sketchy",
      demo: "#",
      image: "🎨",
      category: "Gaming",
      gradient: "from-[#334155] to-[#475569]",
    },
  ]

  // Enhanced achievements
  const achievements = [
    {
      title: "Smart India Hackathon 2023",
      category: "Blockchain & Cybersecurity",
      icon: "🥇",
      position: "1st Prize",
      color: "bg-gradient-to-br from-[#64748b] to-[#475569]",
    },
    {
      title: "Unfold 2024",
      category: "Asia's largest hackathon - Agoric Bounty",
      icon: "🥉",
      position: "3rd Prize",
      color: "bg-gradient-to-br from-[#475569] to-[#334155]",
    },
    {
      title: "Electroneum Hackathon 2025",
      category: "Devpost",
      icon: "🏅",
      position: "4th Prize",
      color: "bg-gradient-to-br from-[#64748b] to-[#334155]",
    },
    {
      title: "Encode NEO X Hackathon 2023",
      category: "Web3",
      icon: "🥇",
      position: "1st Prize",
      color: "bg-gradient-to-br from-[#64748b] to-[#475569]",
    },
    {
      title: "ETH Mumbai 2024",
      category: "AvailDA track",
      icon: "🥉",
      position: "3rd Prize",
      color: "bg-gradient-to-br from-[#475569] to-[#334155]",
    },
    {
      title: "Web3 Conf Hackathon 2023",
      category: "Blockchain",
      icon: "🏅",
      position: "4th Prize",
      color: "bg-gradient-to-br from-[#64748b] to-[#334155]",
    },
  ]

  // Enhanced skills
  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "Go"],
    frameworks: ["Next.js", "React.js", "Express.js", "Tailwind CSS", "Web3.js"],
    tools: ["Git", "Linux", "VS Code", "Docker"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    blockchain: ["Ethereum", "Polkadot", "Avail DA", "Smart Contracts", "DeFi"],
  }

  // Experience with enhanced styling
  const experience = [
    {
      title: "MERN Stack Developer",
      company: "Small Group",
      period: "2024 - Present",
      description:
        "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Working on scalable solutions and modern web technologies.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript"],
      color: "from-[#64748b] to-[#475569]",
    },
    {
      title: "React Developer Intern",
      company: "Coderpreneurs IT Services & Solutions",
      period: "Dec 2023 - Feb 2024",
      description:
        "Developed responsive React applications and collaborated on various client projects. Gained experience in modern frontend development practices.",
      tech: ["React.js", "JavaScript", "CSS", "Git"],
      color: "from-[#475569] to-[#334155]",
    },
    {
      title: "Technical Training",
      company: "TNSIF Training Program",
      period: "Sept 2024 - Dec 2024",
      description:
        "Intensive training in technical and soft skills development. Focused on industry-relevant technologies and professional development.",
      tech: ["Full Stack Development", "Professional Skills", "Project Management"],
      color: "from-[#334155] to-[#64748b]",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "https://drive.google.com/uc?export=download&id=19QFEAPYmTNcTlYDqEM98veH9VD58o88P"
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.click()
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-mono relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#64748b] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#475569] rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#334155] rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#64748b] rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed w-6 h-6 bg-[#64748b] rounded-full pointer-events-none z-50 opacity-50 transition-all duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#f8fafc]/80 backdrop-blur-md border-b-4 border-[#e2e8f0] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-black flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#64748b] to-[#475569] rounded-lg border-2 border-[#e2e8f0] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#1e293b]">Kaustubh.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "projects", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 relative group ${
                    activeSection === section ? "text-[#64748b]" : "text-[#1e293b] hover:text-[#64748b]"
                  }`}
                >
                  {section}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64748b] transform transition-transform duration-300 ${
                      activeSection === section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="bg-gradient-to-r from-[#64748b] to-[#475569] text-white px-6 py-3 border-4 border-[#e2e8f0] rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
              >
                <Download className="inline w-4 h-4 mr-2" />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-8 h-8 flex flex-col justify-center space-y-1">
                <div
                  className={`h-1 w-8 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></div>
                <div
                  className={`h-1 w-8 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`h-1 w-8 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 pb-6" : "max-h-0"}`}
          >
            <div className="border-t-2 border-[#e2e8f0] pt-4">
              {["home", "about", "projects", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 capitalize font-medium text-[#1e293b] hover:text-[#64748b] transition-colors"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="mt-4 bg-gradient-to-r from-[#64748b] to-[#475569] text-white px-6 py-3 border-4 border-[#e2e8f0] rounded-2xl font-bold w-full"
              >
                <Download className="inline w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Floating Elements */}
          <div className="absolute -top-10 left-10 animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-[#64748b] to-[#475569] rounded-2xl border-4 border-[#e2e8f0] flex items-center justify-center text-2xl rotate-12">
              🚀
            </div>
          </div>
          <div className="absolute top-20 right-10 animate-float-delayed">
            <div className="w-12 h-12 bg-gradient-to-br from-[#475569] to-[#334155] rounded-full border-4 border-[#e2e8f0] flex items-center justify-center">
              ⚡
            </div>
          </div>

          <div className="mb-12 relative">
            <div className="w-65 h-65 mx-auto mb-8 bg-gradient-to-br from-[#64748b] to-[#475569] rounded-lg border-8 border-[#e2e8f0] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#475569] to-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/kaustubh.jpg?height=110&width=110"
                alt="Kaustubh Pardeshi"
                className="w-110px h-110px object-cover  relative z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
                <span className="bg-gradient-to-r from-[#1e293b] via-[#64748b] to-[#1e293b] bg-clip-text text-transparent animate-gradient bg-300% bg-left">
                  KAUSTUBH
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#64748b] via-[#475569] to-[#334155] bg-clip-text text-transparent animate-gradient bg-300% bg-right">
                  PARDESHI
                </span>
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#64748b]/20 to-[#475569]/20 blur-3xl"></div>
              </h1>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#1e293b] to-[#64748b] bg-clip-text text-transparent">
                Fullstack Developer • Web3 Enthusiast
              </p>
              <p className="text-lg md:text-xl font-semibold text-[#64748b]">
                Hackathon Winner • Blockchain Builder • Future Creator
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/Kaustubh-404"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-[#1e293b] px-8 py-4 border-4 border-[#e2e8f0] rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
              >
                <Github className="w-5 h-5 mr-3 group-hover:animate-spin" />
                GitHub
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64748b] to-[#475569] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://www.linkedin.com/in/kaustubh-pardeshi-81787b259/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-[#64748b] to-[#475569] text-white px-8 py-4 border-4 border-[#e2e8f0] rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                LinkedIn
              </a>

              <a
                href="https://twitter.com/flackk_"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-[#475569] to-[#334155] text-white px-8 py-4 border-4 border-[#e2e8f0] rounded-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center"
              >
                <Twitter className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Twitter
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-10 h-10 mx-auto text-[#64748b]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center bg-gradient-to-r from-[#64748b] to-[#475569] bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="group bg-white border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#64748b] to-[#475569] opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h3 className="text-3xl font-bold mb-6 flex items-center text-[#1e293b]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#64748b] to-[#475569] rounded-xl border-2 border-[#e2e8f0] flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                My Journey
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-[#64748b]">
                <p>
                  Passionate fullstack developer with expertise in both Web2 and Web3 technologies. Currently working as
                  a MERN Stack Developer at Small Group, I specialize in creating innovative, user-centric solutions
                  that bridge traditional and blockchain ecosystems.
                </p>
                <p>
                  With multiple hackathon wins including Smart India Hackathon 2023 and ETH Mumbai 2024, I thrive on
                  building cutting-edge applications that solve real-world problems.
                </p>
                <div className="flex items-center text-[#64748b] font-semibold">
                  <MapPin className="w-5 h-5 mr-2" />
                  Pune, Maharashtra, India
                </div>
              </div>
            </div>

            <div className="group bg-white border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#475569] to-[#334155] opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h3 className="text-3xl font-bold mb-6 flex items-center text-[#1e293b]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#475569] to-[#334155] rounded-xl border-2 border-[#e2e8f0] flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                Experience
              </h3>
              {experience.map((exp, index) => (
                <div key={index} className="mb-8 last:mb-0 group/item">
                  <div className="relative">
                    <h4 className="font-bold text-xl mb-1 text-[#1e293b]">{exp.title}</h4>
                    <div
                      className={`absolute -left-4 top-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <p className="text-[#64748b] font-bold text-lg">{exp.company}</p>
                  <p className="text-sm text-[#94a3b8] mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>
                  <p className="text-base mb-3 leading-relaxed text-[#64748b]">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-white to-[#64748b]/20 px-3 py-1 rounded-xl text-sm border-2 border-[#e2e8f0] font-semibold text-[#1e293b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#64748b] via-[#475569] to-[#334155]"></div>
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-[#1e293b]">
              <Sparkles className="w-8 h-8 mr-3 text-[#64748b]" />
              Technical Arsenal
            </h3>
            <div className="grid md:grid-cols-5 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="group">
                  <h4 className="font-bold mb-4 capitalize flex items-center text-lg text-[#1e293b]">
                    {category === "languages" && <Code className="w-5 h-5 mr-2 text-[#64748b]" />}
                    {category === "frameworks" && <Globe className="w-5 h-5 mr-2 text-[#475569]" />}
                    {category === "tools" && <Zap className="w-5 h-5 mr-2 text-[#334155]" />}
                    {category === "databases" && <Database className="w-5 h-5 mr-2 text-[#64748b]" />}
                    {category === "blockchain" && <GitBranch className="w-5 h-5 mr-2 text-[#475569]" />}
                    {category}
                  </h4>
                  <div className="space-y-3">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="group/skill bg-gradient-to-r from-white to-[#1e293b] px-4 py-3 rounded-2xl border-2 border-[#e2e8f0] text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer text-[#1e293b]"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-[#64748b]/10 to-[#475569]/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#64748b] to-[#475569] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
              Innovative solutions that bridge Web2 and Web3, featuring cutting-edge technology and user-centric design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white border-4 border-[#e2e8f0] rounded-3xl overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-500 transform hover:-translate-x-3 hover:-translate-y-3 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6 relative">
                  <div className="absolute top-4 right-4 opacity-20 text-6xl group-hover:opacity-40 transition-opacity duration-300">
                    {project.image}
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold leading-tight pr-16 text-[#1e293b]">{project.title}</h3>
                    {project.featured && (
                      <div className="bg-gradient-to-r from-[#64748b] to-[#475569] text-white px-2 py-1 rounded-lg text-xs font-bold border-2 border-[#e2e8f0]">
                        <Star className="w-3 h-3 inline mr-1" />
                        FEATURED
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <span
                      className={`text-xs bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-xl border-2 border-[#e2e8f0] font-bold text-white`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm mb-6 text-[#64748b] leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white text-[#1e293b] px-3 py-1 rounded-xl text-xs border-2 border-[#e2e8f0] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-[#94a3b8] text-white px-3 py-1 rounded-xl text-xs border-2 border-[#e2e8f0] font-semibold">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-white text-[#1e293b] px-4 py-2 rounded-xl text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                      Code
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-xl text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 group/btn`}
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#64748b] to-[#475569] bg-clip-text text-transparent">
              Achievements & Awards
            </h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
              Recognition for innovation in blockchain, Web3, and cybersecurity across major hackathons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white border-4 border-[#e2e8f0] rounded-3xl p-6 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-500 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${achievement.color}`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:animate-bounce">{achievement.icon}</div>
                  <div className="bg-gradient-to-r from-white to-[#64748b] bg-clip-text text-transparent font-black text-sm mb-2">
                    {achievement.position}
                  </div>
                  <h3 className="font-bold text-lg mb-3 leading-tight text-[#1e293b]">{achievement.title}</h3>
                  <p className="text-sm text-[#94a3b8] mb-4">{achievement.category}</p>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#64748b] to-[#475569] bg-clip-text text-transparent">
                      HACKATHON WINNER
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#64748b]/20 to-[#475569]/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-br from-[#64748b] to-[#475569] border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#475569] to-[#64748b] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Award className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-3xl font-black mb-3 text-white">6+ Hackathon Wins</h3>
              <p className="text-white font-semibold text-lg">
                Consistently delivering innovative solutions in blockchain, cybersecurity, and Web3 domains
              </p>
              <div className="flex justify-center items-center mt-4 space-x-2">
                <Rocket className="w-5 h-5 text-white" />
                <span className="font-bold text-white">Innovation • Excellence • Impact</span>
                <Heart className="w-5 h-5 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#475569]/10 to-[#334155]/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#475569] to-[#334155] bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              Ready to bring your next project to life? Let's connect and create something extraordinary together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-white border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#475569] to-[#64748b] opacity-10 rounded-full transform translate-x-12 -translate-y-12"></div>
              <Mail className="w-12 h-12 mx-auto mb-4 text-[#475569] group-hover:animate-bounce" />
              <h3 className="font-bold text-xl mb-3 text-[#1e293b]">Email</h3>
              <a
                href="mailto:kaustubhp2003@gmail.com"
                className="text-[#475569] font-bold text-lg hover:underline break-all"
              >
                kaustubhp2003@gmail.com
              </a>
            </div>

            <div className="group bg-white border-4 border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[12px_12px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-3 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#334155] to-[#64748b] opacity-10 rounded-full transform translate-x-12 -translate-y-12"></div>
              <Phone className="w-12 h-12 mx-auto mb-4 text-[#334155] group-hover:animate-bounce" />
              <h3 className="font-bold text-xl mb-3 text-[#1e293b]">Phone</h3>
              <a href="tel:+917058400616" className="text-[#334155] font-bold text-lg hover:underline">
                +91 7058400616
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://github.com/Kaustubh-404"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#1e293b] p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-[#e2e8f0]"
            >
              <Github className="w-8 h-8 group-hover:animate-spin" />
            </a>

            <a
              href="https://www.linkedin.com/in/kaustubh-pardeshi-81787b259/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#64748b] to-[#475569] text-white p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-[#e2e8f0]"
            >
              <Linkedin className="w-8 h-8 group-hover:animate-bounce" />
            </a>

            <a
              href="https://twitter.com/flackk_"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#475569] to-[#334155] text-white p-6 rounded-2xl hover:shadow-[8px_8px_0px_0px_rgba(100,116,139,1)] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 border-4 border-[#e2e8f0]"
            >
              <Twitter className="w-8 h-8 group-hover:animate-pulse" />
            </a>
          </div>

          <div className="bg-gradient-to-r from-[#64748b] to-[#475569] border-4 border-[#e2e8f0] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#475569] to-[#64748b] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-black mb-3 text-white">Ready to Collaborate?</h3>
              <p className="text-white font-semibold mb-6">
                Whether it's Web3 innovation, full-stack development, or hackathon collaboration - I'm always excited to
                work on challenging projects!
              </p>
              <div className="flex justify-center items-center space-x-3">
                <span className="font-bold text-white">Available for</span>
                <div className="flex space-x-2">
                  <span className="bg-[#94a3b8] text-white px-3 py-1 rounded-xl text-sm font-bold">Freelance</span>
                  <span className="bg-[#94a3b8] text-white px-3 py-1 rounded-xl text-sm font-bold">Full-time</span>
                  <span className="bg-[#94a3b8] text-white px-3 py-1 rounded-xl text-sm font-bold">Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#64748b]/10 to-[#475569]/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <div className="text-3xl font-black flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#64748b] to-[#475569] rounded-xl border-2 border-white flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              Kaustubh.dev
            </div>
            <p className="text-lg text-[#64748b] mb-6">Built with ❤️ using React, TypeScript & Tailwind CSS</p>
          </div>

          <div className="border-t border-gray-600 pt-6">
            <p className="text-[#94a3b8] mb-2">© 2024 Kaustubh Pardeshi. All rights reserved.</p>
            <p className="text-sm text-gray-500">
              Fullstack Developer • Web3 Enthusiast • Problem Solver • Future Creator
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  )
}

export default KaustubhPortfolio
