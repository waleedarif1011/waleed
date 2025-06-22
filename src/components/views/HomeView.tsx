import React from 'react';
import profileImage from '../../assets/images/profile.jpg';

const HomeView: React.FC = () => {
  return (
    <section id="home-section" className="min-h-screen flex items-center justify-center text-center -mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        {/* Profile Image */}
        <div className="order-1 md:order-2">
          <img 
            src={profileImage}
            alt="Waleed Arif" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-contain bg-slate-800 border-4 border-gray-700 shadow-lg"
          />
        </div>

        {/* Introduction Text */}
        <div className="order-2 md:order-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">
            Hi, I'm Waleed Arif
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#4B44D8] mb-4">
            A Passionate Data Scientist
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            I specialize in creating intelligent AI models and best software solutions. My expertise lies in machine learning, data science, and frontend development, with a keen interest in building optimized applications.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HomeView; 