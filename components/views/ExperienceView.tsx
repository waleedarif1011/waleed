import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceItemProps {
  date: string;
  title: string;
  location: string;
  description: string;
  alignLeft?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, location, description, alignLeft = false }) => {
  const cardBaseClasses = "p-6 rounded-lg shadow-xl w-full max-w-md relative";
  // Card text will inherit global body text-gray-300
  const cardThemeClasses = "bg-slate-800"; 

  const pointerClasses = alignLeft
    ? "absolute top-1/2 -right-3 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px]"
    : "absolute top-1/2 -left-3 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px]";
  
  const pointerThemeClasses = alignLeft ? "border-l-slate-800" : "border-r-slate-800";

  const dateColor = "text-gray-400"; // For secondary info
  const titleTextColor = "text-indigo-400"; // Accent color for title
  const locationColor = "text-gray-400"; // For secondary info


  return (
    <div className={`flex items-start my-8 ${alignLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Content Card */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} ${alignLeft ? 'mr-8' : 'ml-8'}`}>
        <div className={`${pointerClasses} ${pointerThemeClasses}`}></div>
        {/* font-display-strong removed, h3 gets Oswald globally */}
        <h3 className={`text-xl mb-1 ${titleTextColor}`}>{title}</h3>
        <p className={`text-sm ${locationColor} mb-2`}>{location}</p>
        {/* This paragraph will inherit global body color: text-gray-300 */}
        <p className="text-sm leading-relaxed">{description}</p>
      </div>

      {/* Timeline Icon and Date */}
      <div className={`flex flex-col items-center mx-4 ${alignLeft ? 'order-last' : ''}`}>
        <div className="bg-indigo-600 rounded-full p-3 shadow-md">
          <FaBriefcase size={20} className="text-white" />
        </div>
        <p className={`mt-2 text-xs font-semibold ${dateColor}`}>{date}</p>
      </div>
    </div>
  );
};


const ExperienceView: React.FC = () => {
  const experiences: Omit<ExperienceItemProps, 'alignLeft'>[] = [
    {
      date: '2022 - present',
      title: 'Technology Consultant',
      location: 'Dallas, TX',
      description: 'Full-stack Web Development, GenAI/LLM, Project Management, Business Development',
    },
    {
      date: '2020 - 2022',
      title: 'Full Stack Engineer',
      location: 'Laie, HI',
      description: 'Frontend Development, Backend Development, User Experience, Team Leading',
    },
  ];

  return (
    <section id="experience-section" className="py-10 md:py-16">
      {/* font-display-strong removed, h1 gets Oswald globally */}
      <h1 className="uppercase text-4xl sm:text-5xl mb-12 text-left text-indigo-400"> 
        Career History
      </h1>
      <div className="relative">
        {/* Central Timeline Bar */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-700 transform -translate-x-1/2"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-center">
            <div className={`w-full max-w-4xl flex items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <ExperienceItem
                date={exp.date}
                title={exp.title}
                location={exp.location}
                description={exp.description}
                alignLeft={index % 2 === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceView;