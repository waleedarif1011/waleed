import React from 'react';
import ProjectCard from '../projects/ProjectCard';

const ProjectsView: React.FC = () => {

  // Dummy data for projects
  const projects = [
    { name: 'StoryAI', description: 'An AI application which convert complex data science results into simple stories', tags: ['Python', 'TensorFlow', 'Hugging Face', 'Llama'], github: 'https://github.com/waleedarif1011/StoryAI' },
    { name: 'PoseMate', description: 'An AI application for tracking and analyzing human pose data.', tags: ['Pyhton', 'TensorFlow', 'OpenCV', 'MediaPipe'], github: 'https://github.com/waleedarif1011/PoseMate' },
    { name: 'Air-Quality-Prediction', description: 'A machine learning project for air quality prediction.', tags: ['Python', 'Machine Learning', 'Scikit-learn', ], github: 'https://github.com/waleedarif1011/Air-Quality-Prediction' },
    // { name: 'Project Delta', description: 'An e-commerce platform with a recommendation engine.', tags: ['Vue.js', 'Django', 'PostgreSQL'] },
  ];

  return (
    <section id="projects-section" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">MY PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <ProjectCard key={project.name} {...project} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsView; 