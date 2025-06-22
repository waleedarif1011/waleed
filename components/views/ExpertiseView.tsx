import React from 'react';
import { FaReact, FaDocker, FaPython } from 'react-icons/fa';

interface TechPillProps {
  name: string;
}

const TechPill: React.FC<TechPillProps> = ({ name }) => {
  const pillClasses = 'bg-slate-700 text-gray-100'; // Adjusted for slightly brighter text
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs sm:text-sm font-semibold mr-2 mb-2 ${pillClasses}`}>
      {name}
    </span>
  );
};

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description, techStack }) => {
  const cardClasses = 'bg-slate-800 shadow-2xl'; 
  const iconColor = 'text-indigo-400';
  // h3 title will inherit global heading color (text-gray-200), or can be brighter like text-gray-100
  const titleTextColor = 'text-gray-100'; 
  // Description will inherit global body text-gray-300
  const techStackLabelColor = 'text-gray-200'; // h4 will inherit this globally


  return (
    <div className={`p-6 rounded-xl flex flex-col ${cardClasses} transition-all duration-300`}>
      <div className={`mb-4 text-4xl sm:text-5xl ${iconColor}`}>
        {icon}
      </div>
      {/* font-display-strong removed, h3 gets Oswald globally */}
      <h3 className={`text-xl sm:text-2xl mb-3 ${titleTextColor}`}>{title}</h3>
      {/* This paragraph will inherit global body color: text-gray-300 */}
      <p className={`text-sm sm:text-base mb-4 leading-relaxed flex-grow`}>
        {description}
      </p>
      <div>
        {/* h4 gets Oswald globally, color updated */}
        <h4 className={`text-sm sm:text-base font-semibold mb-2 ${techStackLabelColor}`}>Tech stack:</h4>
        <div className="flex flex-wrap">
          {techStack.map(tech => <TechPill key={tech} name={tech} />)}
        </div>
      </div>
    </div>
  );
};

const ExpertiseView: React.FC = () => {
  const expertiseData = [
    {
      icon: <FaReact />,
      title: 'Full Stack Web Development',
      description: 'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.',
      techStack: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Flask', 'Python', 'SQL', 'PostgreSQL', 'Postman']
    },
    {
      icon: <FaDocker />,
      title: 'DevOps & Automation',
      description: 'Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.',
      techStack: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Azure', 'Linux', 'Snowflake', 'Pandas', 'Selenium']
    },
    {
      icon: <FaPython />,
      title: 'GenAI & LLM',
      description: 'Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.',
      techStack: ['OpenAI', 'Groq', 'LangChain', 'Qdrant', 'Hugging Face', 'LlamaIndex', 'Streamlit']
    }
  ];

  return (
    <section id="expertise-section" className="py-10 md:py-16">
      {/* font-display-strong removed, h1 gets Oswald globally */}
      <h1 className="uppercase text-4xl sm:text-5xl mb-12 text-left text-indigo-400"> 
        Expertise
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map(item => (
          <ExpertiseCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            techStack={item.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseView;