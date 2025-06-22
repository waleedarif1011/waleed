import React from 'react';

const experienceData = [
  {
    companyName: 'Techanzy Limited',
    title: 'Software Engineer - AI',
    duration: 'May 2025 - Present',
    description: 'Designed and optimized AI agents in Python, collaborating with teams to refine performance and meet requirements.',
    achievements: [
      'Designed and deployed AI agents using Python',
      'Improved agent performance through testing and feedback',
      'Collaborated with teams to define and gather requirements'
    ],
    skills: ['Python', 'Make.com', 'Vocera', 'FastAPI']
  },
  {
    companyName: 'ALtaurux',
    title: 'Associate Software Engineer',
    duration: 'August 2024 - February 2025',
    description: 'Developed multiple web applications and integrated machine learning models into applications.',
    achievements: [
      'Developed multiple web applications',
      'Integrated machine learning models into applications',
      'Collaborated with teams to gather requirements'
    ],
    skills: ['Python', 'JavaScript', 'React', 'FastAPI']
  },
  {
    companyName: 'Speridian Technologies',
    title: 'Software Engineer Intern',
    duration: 'August 2023 - September 2023',
    description: 'Developed and maintained full-stack web applications for various clients, focusing on scalability and user experience.',
    achievements: [
      'Developed multiple front-end apps according to user requirements',
      'Created technical specifications and delivered timely solutions',
      'Collaborated with stakeholders to gather requirements'
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MYSQL']
  }
];

const ExperienceCard = ({ experience }: { experience: typeof experienceData[0] }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8 w-full">
    {/* Card Header: Company, Title, Duration */}
    <div className="mb-4">
      <h3 className="text-[#4B44D8] text-2xl font-bold mb-1">
        {experience.companyName}
      </h3>
      <p className="text-gray-300 text-lg">
        {experience.title} - {experience.duration}
      </p>
    </div>
    {/* Main Description */}
    <p className="text-gray-400 mb-4">
      {experience.description}
    </p>
    {/* Achievements (if any) */}
    {experience.achievements && experience.achievements.length > 0 && (
      <ul className="list-disc list-inside text-gray-400 mb-4">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    )}
    {/* Skills/Technologies */}
    <div className="flex flex-wrap gap-2">
      {experience.skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceView: React.FC = () => {
  return (
    <section id="experience-section" className="container mx-auto py-16 px-4">
      <h2 className="text-center text-white text-4xl mb-12">EXPERIENCE</h2>
      <div className="max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceView; 