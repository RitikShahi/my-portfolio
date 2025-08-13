import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard'; // We will create this component next

const Projects = ({ projects }) => {
  return (
    <section>
      <SectionTitle>My Work</SectionTitle>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
