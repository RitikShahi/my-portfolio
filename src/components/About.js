import React from 'react';
import StyledButton from './StyledButton';

const AboutMe = ({ info }) => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <h2 className="text-5xl md:text-6xl mb-4 font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
        {info.title}
      </h2>
      <p className="max-w-5xl text-lg md:text-xl leading-relaxed my-8 text-gray-900 dark:text-gray-300">
        {info.about}
      </p>
      <div className="mt-20">
          <StyledButton href={`mailto:${info.contact.email}`}>
              Get In Touch
          </StyledButton>
      </div>
    </section>
  );
};

export default AboutMe;
