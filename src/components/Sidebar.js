import React from 'react';
import { Sun, Moon, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Sidebar = ({ info, theme, toggleTheme, isOpen, setIsOpen }) => {
  const navLinks = ["About", "Projects", "Tools", "Competitive", "Contact"];
  
  const handleLinkClick = () => {
      // Close the sidebar when a link is clicked on mobile
      if (window.innerWidth < 768) { 
          setIsOpen(false);
      }
  }

  return (
    <aside className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 p-8 flex flex-col z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      {/* Profile Image & Theme Toggle */}
      <div className="flex items-start justify-between">
        <a href="#about" onClick={handleLinkClick}>
          <img 
            src="https://placehold.co/100x100/6366f1/white?text=You" 
            alt={info.name}
            className="rounded-full border-4 border-gray-200 dark:border-gray-700"
          />
        </a>
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
        </button>
      </div>

      {/* Name and Title */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>{info.name}</h1>
        <p className="text-md text-gray-500 dark:text-gray-400">{info.title}</p>
      </div>

      {/* Navigation */}
      <nav className="mt-12 flex-grow">
        <ul className="space-y-4">
          {navLinks.map(link => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                onClick={handleLinkClick}
                className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
              >
                <span className="w-8 h-px bg-gray-400 dark:bg-gray-600 mr-4"></span>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <a href={info.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500"><Github /></a>
        <a href={info.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500"><Linkedin /></a>
        <a href={info.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500"><Twitter /></a>
        <a href={`mailto:${info.contact.email}`} className="text-gray-500 hover:text-indigo-500"><Mail /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
