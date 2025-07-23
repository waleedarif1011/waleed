import React from 'react';
import { FaBrain, FaCogs, FaChartBar, FaCode } from 'react-icons/fa';

const expertiseData = [
  {
    icon: <FaBrain size={40} className="mx-auto text-[#FF6500]" />,
    title: 'Machine Learning',
    description: 'Developing predictive models and algorithms to extract valuable insights from data.',
    skills: ['Supervised & Unsupervised Learning', 'Deep Learning', 'NLP', 'Computer Vision']
  },
  {
    icon: <FaChartBar size={40} className="mx-auto text-[#FF6500]" />,
    title: 'Data Science',
    description: 'Leveraging statistical analysis and machine learning to derive insights and drive decision-making.',
    skills: ['Statistical Modeling', 'Data Visualization', 'A/B Testing', 'Feature Engineering']
  },
  {
    icon: <FaCode size={40} className="mx-auto text-[#FF6500]" />,
    title: 'Frontend Development',
    description: 'Creating responsive and intuitive user interfaces for a seamless user experience.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'State Management']
  },
  {
    icon: <FaCogs size={40} className="mx-auto text-[#FF6500]" />,
    title: 'AI & Backend Systems',
    description: 'Building robust backend services and APIs to power intelligent applications.',
    skills: ['Python', 'FastAPI', 'Containerization (Docker)', 'CI/CD']
  }
  
];

const ExpertiseView: React.FC = () => {
  return (
    <section id="expertise-section" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">MY EXPERTISE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="bg-[#1E3E62] backdrop-blur-sm border border-slate-700 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F4F6FF] mb-2">{item.title}</h3>
              <p className="text-[#F4F6FF] text-sm mb-4">{item.description}</p>
              <ul className="text-left text-xs text-[#F4F6FF] space-y-1">
                {item.skills.map(skill => (
                  <li key={skill} className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseView; 