import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = ({ contact }) => {
  return (
    <section className="text-center">
      <SectionTitle>Contact Me</SectionTitle>
      <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4">
          <a href={`mailto:${contact.email}`} className="flex items-center text-lg font-semibold hover:text-indigo-500 transition-colors"><Mail className="mr-2"/> Email</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-semibold hover:text-indigo-500 transition-colors"><Github className="mr-2"/> GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-semibold hover:text-indigo-500 transition-colors"><Linkedin className="mr-2"/> LinkedIn</a>
          <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-semibold hover:text-indigo-500 transition-colors"><Twitter className="mr-2"/> Twitter</a>
      </div>
    </section>
  );
};

export default Contact;
