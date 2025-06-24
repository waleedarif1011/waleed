import React from 'react';
import ProjectCard from '../projects/ProjectCard';

const ProjectsView: React.FC = () => {

  // Dummy data for projects
  const projects = [
    { name: 'StoryAI', description: 'An AI application which convert complex data science results into simple stories.', tags: ['Python', 'TensorFlow', 'Unsloth', 'Llama', 'Hugging Face'], githubUrl: 'https://github.com/waleedarif1011/StoryAI' },
    { name: 'PoseMate', description: 'An AI application that helps user to track their body pose while difficult workouts.', tags: ['Python', 'OpenCV', 'Computer Vision', 'MediaPipe'], githubUrl: 'https://github.com/waleedarif1011/PoseMate' },
    { name: 'Air Quality Prediction', description: 'An ML model to predict air quality based on weather and pollution data.', tags: ['Python', 'Exploratory Data Analysis (EDA)', 'Scikit-Learn', 'Random Forest'], githubUrl: 'https://github.com/waleedarif1011/Air-Quality-Prediction' },
    { name: 'Working on many more amazing ideas', description: 'Excited to solve real world problems through new emerging technologies', tags: [] },
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
