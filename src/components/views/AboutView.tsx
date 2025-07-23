import React from 'react';

const AboutView: React.FC = () => {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-gray-950 text-slate-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-100">
          ABOUT ME
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-[#F4F6FF] space-y-4">
          <p>
            Hello! I'm an <b>AI Engineer</b>, who is curious to new emerging technologies and deep desire to make a positive impact on community. Currently I have a strong foundation in software development and a specialization in ML and DL. What truly excites me is the opportunity to research and develop intelligent solutions that don’t just exist, actively solving real-world challenges and delivering value to people’s lives.
          </p>
          <p>
            With a background in AI and software development, I enjoy working across functional teams to learn from others. From designing user defined interfaces to integrating cutting-edge technologies to deploy scalable models. I am always eager to learn and grow, and I am excited to bring my skills and experience to the next level.
          </p>
          <p>
            I am a lifelong quick learner, constantly exploring new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape. I am currently focused on Computre Vision & Natural Language Processing to play my role in  <b>Artifical General Intelligence (AGI)</b> and in <b>Artificial Super Intelligence (ASI)</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutView; 
