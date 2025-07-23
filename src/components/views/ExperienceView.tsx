import React from 'react';

const experienceData = [
  {
    company: 'Techanzy Limited',
    role: 'Software Engineer- AI',
    period: 'May 2025 - June 2025',
    description: 'Developing and testing diverse voice AI agents for seamless speech-to-text and text-to-speech conversion.',
    tags: ['Python', 'NLP', 'Vapi', 'Vocera', 'Make', 'FastAPI']
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
  <div className="bg-gradient-to-br from-[#223a5f] to-[#1E3E62] border border-slate-700 rounded-2xl shadow-2xl p-8 w-full max-w-3xl mx-auto mb-12 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_10px_rgba(34,58,95,0.4)] hover:border-[#FF6500]/80 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent hover:border-[#FF6500]/60 transition-all duration-300"></div>
    <p className="text-sm text-[#F4F6FF] mb-1 opacity-80">{job.period}</p>
    <h3 className="text-2xl font-extrabold text-[#F4F6FF] drop-shadow mb-1">{job.role}</h3>
    <p className="text-lg text-[#FF6500] font-semibold mb-3">{job.company}</p>
    <p className="text-[#F4F6FF] text-base mb-5 opacity-90">{job.description}</p>
    <div className="flex flex-wrap gap-2">
      {job.tags.map(tag => (
        <span key={tag} className="bg-[#FF6500] text-[#F4F6FF] text-xs font-semibold px-3 py-1 rounded-full shadow">
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