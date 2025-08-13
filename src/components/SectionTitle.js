import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl mb-12 font-bold text-gray-800 dark:text-gray-100" style={{ fontFamily: "'Roboto Slab', serif" }}>
        {children}
    </h2>
  );
};

export default SectionTitle;