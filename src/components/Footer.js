import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="text-center py-12 mt-24 border-t border-gray-200 dark:border-gray-800">
        <p className="text-base text-gray-600 dark:text-gray-400">
            Designed & Built by {name} &copy; {new Date().getFullYear()}
        </p>
    </footer>
  );
};

export default Footer;
