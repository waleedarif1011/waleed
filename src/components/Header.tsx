import React, { useState, useEffect, useCallback } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

const HEADER_ID = "app-main-header";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: "#home-section", label: "Home" },
    { id: "#about-section", label: "About" },
    { id: "#expertise-section", label: "Expertise" },
    { id: "#experience-section", label: "Experience" },
    { id: "#projects-section", label: "Projects" },
    { id: "#contact-section", label: "Contact" },
  ];

  const performScrollToHash = useCallback((hash: string) => {
    if (!hash || hash === "#") { 
        hash = "#home-section";
    }
    const targetElement = document.querySelector(hash);
    const headerElement = document.getElementById(HEADER_ID);

    if (targetElement && headerElement) {
      const headerHeight = headerElement.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);


  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    performScrollToHash(sectionId);
    
    const targetHash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;

    if (window.location.hash !== targetHash) {
      const baseUrlWithoutHash = window.location.href.split('#')[0];
      const newUrl = baseUrlWithoutHash + targetHash;
      history.pushState(null, '', newUrl);
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const sectionElements = navLinks.map(link => document.querySelector(link.id)).filter(el => el !== null) as HTMLElement[];
    const navLinkElements = document.querySelectorAll(`a[data-nav-link-id]`);
    const headerElement = document.getElementById(HEADER_ID);

    const handleActiveLinkHighlighting = () => {
      if (!headerElement) return;
      const headerHeight = headerElement.offsetHeight;
      const scrollY = window.scrollY;
      let currentActiveSectionId = "";
      let minDistance = Infinity;

      sectionElements.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - headerHeight;
        const distance = Math.abs(sectionTop);
        if (distance < minDistance) {
          minDistance = distance;
          currentActiveSectionId = '#' + section.id;
        }
      });

      // Special check for the last section when scrolled to the bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        currentActiveSectionId = navLinks[navLinks.length - 1].id;
      }

      navLinkElements.forEach(link => {
        link.classList.remove('nav-link-is-active');
        if (link.getAttribute('data-nav-link-id') === currentActiveSectionId) {
          link.classList.add('nav-link-is-active');
        }
      });

      if (currentActiveSectionId && currentActiveSectionId !== "" && window.location.hash !== currentActiveSectionId) {
        const baseUrlWithoutHash = window.location.href.split('#')[0];
        const newUrl = baseUrlWithoutHash + currentActiveSectionId;
        history.replaceState(null, '', newUrl);
      }
    };
    
    let rafId: number | null = null;
    const rafHandler = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleActiveLinkHighlighting);
    };
    window.addEventListener('scroll', rafHandler);
    handleActiveLinkHighlighting();

    return () => {
      window.removeEventListener('scroll', rafHandler);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [navLinks, performScrollToHash]); 


  useEffect(() => {
    const handlePopState = () => {
      performScrollToHash(window.location.hash || "#home-section");
      setTimeout(() => {
          const event = new Event('scroll');
          window.dispatchEvent(event);
      }, 150); 
    };

    if (window.location.hash && window.location.hash !== "#") {
      setTimeout(() => {
          performScrollToHash(window.location.hash);
          setTimeout(() => {
            const event = new Event('scroll');
            window.dispatchEvent(event);
          }, 200); 
      }, 100);
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [performScrollToHash]);


  const headerBaseClasses = "h-14 shadow-md sticky top-0 z-50 transition-colors duration-300";
  const headerThemeClasses = "bg-gray-950/90 backdrop-blur-lg text-slate-100"; // Lighter, glassy background

  const portfolioTitleColor = "text-gray-100 hover:text-[#FF6500]"; // Updated accent hover
  
  const iconColorPropValue = "#E5E7EB"; // text-gray-200 equivalent

  const iconButtonBaseClasses = "p-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-200";
  const iconButtonThemeSpecificClasses = 'hover:bg-gray-700/70 focus:ring-[#FF6500] focus:ring-offset-gray-950'; // Updated accent for ring

  const mobileMenuBackground = "bg-gray-950/95 backdrop-blur-lg"; // Solid dark bg for mobile menu

  const pillButtonBase = "rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 transition-colors duration-300";
  const pillButtonHover = "hover:bg-[#FF6500] hover:text-slate-100 hover:border-transparent";

  return (
    <>
      <header 
        id={HEADER_ID}
        className={`${headerBaseClasses} ${headerThemeClasses}`}
        aria-label="Application Header"
      >
        <div className="container mx-auto flex justify-between items-center w-full h-full px-4">
          <div className="text-xl font-bold tracking-tight">
            <a 
              href="#home-section"
              data-nav-link-id="#home-section"
              onClick={(e) => handleSmoothScroll(e, "#home-section")}
              className={`portfolio-logo ${portfolioTitleColor} transition-colors duration-200`}
            >
              Waleed Arif
            </a>
          </div>
          
          <nav className="hidden md:flex items-center md:space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.id} 
                  data-nav-link-id={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`${pillButtonBase} ${pillButtonHover} px-3 py-1 text-xs font-medium`}
                >
                  {link.label}
                </a>
              ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 md:space-x-3">
              <a href="https://www.linkedin.com/in/waleed1011" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="block p-1 rounded-full transition-all duration-200 ease-in-out group bg-transparent">
                <span className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200">
                  <FaLinkedin size={22} className="text-gray-200 group-hover:text-[#0A66C2] transition-colors duration-200" />
                </span>
              </a>
              <a href="https://github.com/waleedarif1011" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="block p-1 rounded-full transition-all duration-200 ease-in-out group bg-transparent">
                <span className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 bg-white group-hover:bg-black">
                  <FaGithub size={22} className="text-black group-hover:text-white transition-colors duration-200" />
                </span>
              </a>
              <a href="https://www.kaggle.com/waleedarif" target="_blank" rel="noopener noreferrer" aria-label="Kaggle Profile" className="block p-1 rounded-full transition-all duration-200 ease-in-out group bg-transparent">
                <span className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200">
                  <SiKaggle size={32} className="text-gray-200 group-hover:text-[#20BEFF] transition-colors duration-200" />
                </span>
              </a>
            </div>
            <button
              type="button"
              className={`md:hidden ${iconButtonBaseClasses} ${iconButtonThemeSpecificClasses}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} color={iconColorPropValue} />
              ) : (
                <FaBars size={24} color={iconColorPropValue} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${mobileMenuBackground} ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav 
          className={`flex flex-col items-center justify-center h-full space-y-4 px-4 pb-4 pt-20 sm:pt-24 transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.label}`}
              href={link.id} 
              data-nav-link-id={link.id}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={`${pillButtonBase} ${pillButtonHover} px-5 py-3 text-lg font-medium block w-full max-w-xs mx-auto text-center`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        nav .nav-link-is-active {
          background-color: #FF6500 !important;
          color: #fff !important;
          border-color: #FF6500 !important;
          font-weight: 600;
        }
        nav a:hover {
          background-color: #FF6500 !important;
          color: #fff !important;
          border-color: #FF6500 !important;
        }
        .portfolio-logo.nav-link-is-active {
          text-decoration: underline;
          text-decoration-color: #FF6500 !important;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }
      `}</style>
    </>
  );
};

export default Header; 