import React from 'react';
import StyledButton from './StyledButton';
import { Download } from 'lucide-react';

const About = ({ info }) => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center text-center md:text-left">
      <h2 className="text-4xl md:text-6xl mb-4 font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
        {info.title}
      </h2>
      <p className="max-w-5xl text-base md:text-xl leading-relaxed my-8 text-gray-600 dark:text-gray-300">
        {info.about}
      </p>
      {/* Container for the buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <StyledButton href={`mailto:${info.contact.email}`}>
              Get In Touch
          </StyledButton>
          
          {/* Download Resume Button now links to Google Drive */}
          <a 
            href="https://drive.google.com/file/d/1wwr_rPnOw9940tHs8sU2KHq_vJ27p8cl/view?usp=sharing" // Replace this with your actual Google Drive share link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for opening new tabs
            className="inline-flex items-center bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-3 px-8 border border-indigo-500 hover:border-transparent rounded-lg transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </a>
      </div>
    </section>
  );
};

export default About;
