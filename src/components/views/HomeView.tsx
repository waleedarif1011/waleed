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
          <h1 className="text-4xl md:text-5xl font-bold text-[#F4F6FF] mb-2">
            Hi, I'm Waleed Arif
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#FF6500] mb-4">
            AI Engineer
          </h2>
          <p className="text-lg text-[#F4F6FF] max-w-xl">
            An AI Engineer who has strong experience in the field of Artificial Intelligence. 
            I specialized in creating intelligent AI solutions. I engineer intelligent systems from raw data and build optimized software. My expertise lies in the power of machine learning and deep learning to see the unseen, with a keen to grow and revolutionize the world.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HomeView; 
