import React from 'react';

const AboutView: React.FC = () => {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-gray-950 text-slate-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-100">
          ABOUT ME
        </h2>
        <div className="max-w-4xl mx-auto text-left text-lg text-white-1000 space-y-4">
          <p>
            Hello! I'm an <b>AI Engineer</b> with a strong foundation in software development and a specialization in machine learning. My passion lies in building intelligent applications that solve real-world problems and provide tangible value.
          </p>
          <p>
          As an AI Engineer, I’m fueled by the quiet thrill of turning complex problems into elegant systems—designing interfaces that feel natural, building reliable backends that hold everything together, and deploying models that make technology feel personal. For me, it’s not just about machines learning—it's about creating experiences that understand, adapt, and empower. That’s where the magic is.
          </p>
          <p>
            I am a lifelong learner, constantly exploring new technologies and methodologies.  Currently I am focused on deep learning, natural language processing, and their applications in creating smarter, more personalized user experiences. I'm super excited to play my role in <b>Artifical General Intelligence (AGI)</b> and in <b>Artifical Super Intelligence (ASI)</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutView; 