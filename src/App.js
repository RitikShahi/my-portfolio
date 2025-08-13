import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Sidebar from './components/Sidebar';
import AboutMe from './components/About';
import Projects from './components/Projects';
import DeveloperTools from './components/DeveloperTools';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- Helper function to load Google Fonts ---
const loadGoogleFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Slab:wght@700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    loadGoogleFonts();
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setTheme(current => {
      const newTheme = current === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  // Your portfolio data. You can move this to a separate file later if you want.
  const developerInfo = {
    name: "Ritik Kumar Shahi",
    title: "Frontend.Backend.Developer",
    about: "I’m a passionate Full Stack Developer who loves turning ideas into seamless experiences.I bring projects to life from concept to deployment. Whether it’s crafting responsive UIs, building scalable backends, or optimizing performance, I thrive on solving challenges and delivering high-quality solutions.Driven by curiosity and a commitment to continuous learning, I enjoy working on innovative projects that push my skills further. My goal is to create applications that are not only functional but also make a lasting impact.",
    contact: {
      email: "ritikshahi071@gmail.com",
      github: "https://github.com/RitikShahi",
      linkedin: "https://www.linkedin.com/in/ritik-kumar-shahi-792466288/?originalSubdomain=in",
      twitter: "https://twitter.com/yourusername",
    },
    competitiveProgramming: {
        leetcode: "https://leetcode.com/u/Ritik_x_Shahi/",
        codeforces: "https://codeforces.com/profile/ununNILium_09",
        codechef: "https://www.codechef.com/users/kakkarot_shahi",
        atcoder:"https://atcoder.jp/users/ProtoDominator",
    },
    tools: [
      "React", "TypeScript", "Node.js", "Go", "Firebase", "PostgreSQL",
      "Tailwind CSS", "C++", "Git", "Docker", "Next.js", "JavaScript"
    ],
    projects: [
      {
        title: "Project: AI Task Manager",
        description: "Built with Next.js, Drizzle ORM, and Docker for scalable and portable deployment.Enables users to create, organize, and prioritize tasks with a clean and responsive interface.Integrates AI to suggest, summarize, and optimize tasks for improved productivity.",
        tags: ["NextJS", "TypeScript", "Docker"],
        liveUrl: "https://ai-task-manager-5.netlify.app/",
        repoUrl: "https://github.com/RitikShahi/AI_TASK_MANAGER",
      },
      {
        title: "Project: Product Management System",
        description: "This project is a product management system built with Laravel 10.It functions as a complete e-commerce website with features for Browse products, managing a shopping cart, and user authentication.The system also includes an admin panel for product and user management.",
        tags: ["Laravel", "LiveWire", "PostgreSQL","PHP"],
        liveUrl: "https://www.loom.com/share/afbf1c4a1f0e4ebeb6351bbfe1ed1273",
        repoUrl: "https://github.com/RitikShahi/Product_Management_System",
      },
      {
        title: "Project: Landing Page-SkinCare",
        description: "This project was about to test my mapping skills on UI-UX.The main objective was to bring the figma design to life through coding skills.",
        tags: ["React", "HTML", "CSS",],
        liveUrl: "https://skincare-a2qt-5cuxzend5-ritik-shahis-projects.vercel.app/",
        repoUrl: "https://github.com/RitikShahi/SKINCARE?tab=readme-ov-file",
      }
      // ... other projects
    ],
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <div className="relative md:flex max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
           <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
               {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

        {/* Sidebar */}
        <Sidebar 
          info={developerInfo} 
          theme={theme} 
          toggleTheme={toggleTheme} 
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 md:ml-72 p-6 md:p-12">
          <div id="about">
            <AboutMe info={developerInfo} />
          </div>
          <div id="projects" className="pt-24">
            <Projects projects={developerInfo.projects} />
          </div>
          <div id="tools" className="pt-24">
             <DeveloperTools tools={developerInfo.tools} />
          </div>
          <div id="competitive" className="pt-24">
            <CompetitiveProgramming profiles={developerInfo.competitiveProgramming} />
          </div>
          <div id="contact" className="pt-24">
            <Contact contact={developerInfo.contact} />
          </div>
          <Footer name={developerInfo.name} />
        </main>
      </div>
    </div>
  );
};

export default App;
