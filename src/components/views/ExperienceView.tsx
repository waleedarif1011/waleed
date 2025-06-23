import React from 'react';

const experienceData = [
  {
    company: 'Techanzy Limited',
    role: 'Software Engineer- AI',
    period: 'May 2025 - Present',
    description: 'Developing and testing diverse voice AI agents for seamless speech-to-text and text-to-speech conversion.',
    tags: ['Python', 'Make.com', 'Vocera', 'FastAPI']
  },
  {
    company: 'Altaurux',
    role: 'Associate Software Engineer',
    period: 'August 2024 - February 2025',
    description: 'Developed multiple web apps and implemented AI models for diverse applications.',
    tags: ['Python', 'JavaScript', 'NextJS', 'Deep Learning']
  },
  {
    company: 'Speridian Technologies',
    role: 'Software Engineer Intern',
    period: 'August 2023 - September 2023',
    description: 'Learned and implemented multiple web applications for various clients, focused on user requirements and user experience.',
    tags: ['JavaScript', 'React', 'NextJS', 'MySQL']
  }
];

const JobCard = ({ job }: { job: typeof experienceData[0] }) => (
  <div className="bg-[#1E3E62] backdrop-blur-sm border border-slate-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:shadow-2xl hover:border-indigo-500/50">
    <p className="text-sm text-[#F4F6FF] mb-1">{job.period}</p>
    <h3 className="text-xl font-bold text-[#F4F6FF]">{job.role}</h3>
    <p className="text-md text-[#F4F6FF] mb-3">{job.company}</p>
    <p className="text-[#F4F6FF] text-sm mb-4">{job.description}</p>
    <div className="flex flex-wrap gap-2">
      {job.tags.map(tag => (
        <span key={tag} className="bg-[#FF6500] text-[#F4F6FF] text-xs font-semibold px-2.5 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceView: React.FC = () => {
  return (
    <section id="experience-section" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">WORK EXPERIENCE</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-slate-700 -translate-x-1/2"></div>
          {experienceData.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="mb-8 flex justify-between items-center w-full">
                {/* Left Card Slot */}
                <div className={`w-1/2 ${isLeft ? 'pr-4' : ''}`}>
                  {isLeft && <JobCard job={job} />}
                </div>

                {/* Right Card Slot */}
                <div className={`w-1/2 ${!isLeft ? 'pl-4' : ''}`}>
                  {!isLeft && <JobCard job={job} />}
                </div>

                {/* This is the timeline circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-slate-600"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceView; 