import React from 'react';
import SectionTitle from './SectionTitle';

const DeveloperTools = ({ tools }) => {
  return (
    <section>
      <SectionTitle>My Dev Arsenal</SectionTitle>
      <div className="flex flex-wrap gap-4 max-w-4xl">
          {tools.map(tool => (
              <div key={tool} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-2">
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-200">{tool}</p>
              </div>
          ))}
      </div>
    </section>
  );
};

export default DeveloperTools;
