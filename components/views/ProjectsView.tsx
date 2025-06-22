import React from 'react';
import ProjectCard from '../projects/ProjectCard'; 

const ProjectsView: React.FC = () => {
  const projects = [
    { id: 1, name: 'E-commerce Platform', description: 'A fully responsive e-commerce website with payment gateway integration and admin panel.', imageUrl: 'https://picsum.photos/400/300?random=10', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
    { id: 2, name: 'Task Management App', description: 'A collaborative task management tool with real-time updates and user authentication.', imageUrl: 'https://picsum.photos/400/300?random=11', tags: ['Vue.js', 'Firebase', 'TailwindCSS'] },
    { id: 3, name: 'Personal Portfolio API', description: 'A RESTful API to power a dynamic personal portfolio, built with Express and TypeScript.', imageUrl: 'https://picsum.photos/400/300?random=12', tags: ['Express.js', 'TypeScript', 'JWT', 'Docker'] },
    { id: 4, name: 'Data Visualization Dashboard', description: 'An interactive dashboard for visualizing complex datasets using D3.js and React.', imageUrl: 'https://picsum.photos/400/300?random=13', tags: ['React', 'D3.js', 'Python', 'Flask'] },
  ];

  return (
    <section id="projects-section" className="py-10">
      {/* font-display-strong removed, h1 gets Oswald globally */}
      <h1 className="uppercase text-3xl sm:text-4xl mb-10 text-center text-indigo-400">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsView;