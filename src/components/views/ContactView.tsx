import React from 'react';

const ContactView: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 md:py-24 bg-gray-950 text-slate-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F4F6FF]">GET IN TOUCH</h2>
        <p className="text-lg text-[#F4F6FF] mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <a 
          href="mailto:waleedarif1011@gmail.com" 
          className="inline-block bg-[#FF6500] text-white font-semibold text-lg px-8 py-4 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 shadow-lg"
        >
          Say Hello by mail
        </a>
      </div>
    </section>
  );
};

export default ContactView; 