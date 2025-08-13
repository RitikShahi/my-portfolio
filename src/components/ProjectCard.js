import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col h-full">
        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3" style={{ fontFamily: "'Roboto Slab', serif" }}>{project.title}</h3>
        <p className="text-base text-gray-600 dark:text-gray-300 flex-grow mb-4">{project.description}</p>
        <div className="mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-sm font-medium px-3 py-1 mr-2 mb-2 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                <ExternalLink size={18} className="mr-2"/> Live Demo
            </a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                <Github size={18} className="mr-2"/> Source Code
            </a>
        </div>
    </div>
  );
};

export default ProjectCard;