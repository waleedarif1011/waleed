import React from 'react';

const AboutView: React.FC = () => (
  <section id="about-section" className="py-10">
    {/* font-display-strong removed, h1 gets Oswald globally */}
    <h1 className="uppercase text-3xl sm:text-4xl mb-8 text-center text-indigo-400">About Me</h1>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* prose-invert works with the new global body text-gray-300 */}
      <div className="prose prose-lg prose-invert max-w-none"> 
        <p>
          Hello! I'm Waleed Arif, a dedicated Data Scientist with a fervent passion for Machine Learning and Artificial Intelligence.
          My journey into the world of data was driven by an insatiable curiosity to uncover patterns, derive insights, and build intelligent systems that solve real-world problems.
        </p>
        <p>
          I specialize in deep learning, with significant expertise in Natural Language Processing (NLP) and Computer Vision.
          I thrive on tackling complex challenges, designing innovative algorithms, and developing robust AI models that push the boundaries of technology.
          My experience spans across the full lifecycle of ML projects, from data acquisition and preprocessing to model training, evaluation, and deployment.
        </p>
        <p>
          My ultimate goal is to leverage my expertise in AI to create impactful, data-driven products and contribute to advancements in the field.
          When I'm not immersed in data or algorithms, I enjoy exploring new research papers and contributing to open-source AI projects.
        </p>
      </div>
      <img
        src="https://picsum.photos/600/400?random=aboutsection"
        alt="About Me - Waleed Arif"
        className="rounded-lg shadow-xl w-full h-auto object-cover"
      />
    </div>
  </section>
);

export default AboutView;