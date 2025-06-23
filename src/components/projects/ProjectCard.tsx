import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, tags, githubUrl }) => {
  return (
    <div className="bg-[#1E3E62] backdrop-blur-sm border border-slate-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={22} />
        </a>
      )}
      <h3 className="text-xl font-bold text-[#F4F6FF] mb-2">{name}</h3>
      <p className="text-[#F4F6FF] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-[#FF6500] text-[#F4F6FF] text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 