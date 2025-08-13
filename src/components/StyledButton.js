import React from 'react';

const StyledButton = ({ href, children, className = '' }) => {
  return (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-500 transition-all transform hover:-translate-y-px shadow-lg hover:shadow-xl ${className}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
    >
        {children}
    </a>
  );
};

export default StyledButton;
