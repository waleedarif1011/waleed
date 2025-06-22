import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, imageUrl, tags }) => {
  const titleColor = 'text-gray-100'; // Brighter than global h3 default (text-gray-200)
  const descriptionColor = 'text-gray-300'; // Matches global body text

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col">
      <img src={imageUrl} alt={name} className="w-full h-56 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        {/* font-display-strong removed, h3 gets Oswald globally */}
        <h3 className={`text-xl mb-2 ${titleColor}`}>{name}</h3>
        <p className={`text-sm mb-4 flex-grow ${descriptionColor}`}>{description}</p>
        <div className="mt-auto">
          {tags.map(tag => (
            <span key={tag} className="inline-block bg-indigo-900 text-indigo-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;