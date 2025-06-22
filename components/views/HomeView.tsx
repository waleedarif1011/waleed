import React from 'react';

const HEADER_ID_FOR_HOME_VIEW = "app-main-header"; 

const HomeView: React.FC = () => {
  
  const handleViewWorkScroll = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(sectionId);
    const headerElement = document.getElementById(HEADER_ID_FOR_HOME_VIEW);

    if (targetElement && headerElement) {
      const headerHeight = headerElement.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home-section" className="text-center py-10 md:py-16">
      <img
        src="https://picsum.photos/150/150?grayscale&random=avatar"
        alt="My Avatar"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-xl border-4 border-indigo-400"
      />
      {/* font-display-strong removed, h1 gets Oswald globally */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4"> 
        <span className="text-gray-200">Hello, I'm </span>
        <span className="text-indigo-400">Waleed Arif</span>
      </h1>
      {/* Tagline uses a specific gray, body default is text-gray-300 */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"> 
        A passionate Data Scientist transforming data into intelligent solutions.
      </p>
      <a
        href="#projects-section"
        onClick={(e) => handleViewWorkScroll(e, "#projects-section")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
      >
        View My Work
      </a>
      <img
        src="https://picsum.photos/1200/400?random=homepagebanner"
        alt="Homepage Banner"
        className="mt-12 md:mt-16 rounded-lg shadow-2xl mx-auto w-full max-w-5xl object-cover h-64 md:h-80"
      />
    </section>
  );
};

export default HomeView;