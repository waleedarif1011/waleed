import React, { useState, useEffect, useCallback } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const HEADER_ID = "main-header";

const navLinks = [
  { label: "Home", id: "#home-section" },
  { label: "About", id: "#about-section" },
  { label: "Expertise", id: "#expertise-section" },
  { label: "Experience", id: "#experience-section" },
  { label: "Projects", id: "#projects-section" },
  { label: "Contact", id: "#contact-section" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const performScrollToHash = useCallback((hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    performScrollToHash(sectionId);
    setTimeout(() => {
      const event = new Event("scroll");
      window.dispatchEvent(event);
    }, 200);
  };

  useEffect(() => {
    let scrollTimeout: number | undefined;

    const handleActiveLinkHighlighting = () => {
      const headerElement = document.getElementById(HEADER_ID);
      if (!headerElement) return;

      const navLinkElements = Array.from(
        document.querySelectorAll("[data-nav-link-id]")
      ) as HTMLElement[];
      const sectionElements = navLinks
        .map((link) => document.querySelector(link.id))
        .filter(Boolean) as HTMLElement[];

      const headerHeight = headerElement.offsetHeight;
      const scrollY = window.scrollY;
      let currentActiveSectionId = "";

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        const viewPortTopWithHeader = scrollY + headerHeight;

        if (
          viewPortTopWithHeader >= sectionTop - headerHeight * 0.2 &&
          viewPortTopWithHeader <
            sectionTop + sectionHeight - headerHeight * 0.2
        ) {
          currentActiveSectionId = "#" + section.id;
        }
      });

      // If at the very bottom of the page, set the last section as active
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      ) {
        const lastSection = sectionElements[sectionElements.length - 1];
        if (lastSection) {
          currentActiveSectionId = "#" + lastSection.id;
        }
      }

      if (!currentActiveSectionId && sectionElements.length > 0) {
        let closestSectionId = "#" + sectionElements[0].id;
        let minDistance = Infinity;

        sectionElements.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(
            scrollY + headerHeight - (sectionTop + sectionHeight / 3)
          );

          if (scrollY + headerHeight >= sectionTop - sectionHeight * 0.1) {
            if (distance < minDistance) {
              minDistance = distance;
              closestSectionId = "#" + section.id;
            }
          }
        });
        currentActiveSectionId = closestSectionId;
      }
      if (
        scrollY <
        (sectionElements[0]?.offsetTop || 0) - headerHeight + 50
      ) {
        currentActiveSectionId = "#home-section";
      }

      navLinkElements.forEach((link) => {
        link.classList.remove("nav-link-is-active");
        if (
          link.getAttribute("data-nav-link-id") === currentActiveSectionId
        ) {
          link.classList.add("nav-link-is-active");
        }
      });

      if (
        currentActiveSectionId &&
        currentActiveSectionId !== "" &&
        window.location.hash !== currentActiveSectionId
      ) {
        const baseUrlWithoutHash = window.location.href.split("#")[0];
        const newUrl = baseUrlWithoutHash + currentActiveSectionId;
        history.replaceState(null, "", newUrl);
      }
    };

    const throttledHandler = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = window.setTimeout(handleActiveLinkHighlighting, 150);
    };

    window.addEventListener("scroll", throttledHandler);
    setTimeout(handleActiveLinkHighlighting, 100);

    return () => {
      window.removeEventListener("scroll", throttledHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [navLinks, performScrollToHash]);

  useEffect(() => {
    const handlePopState = () => {
      performScrollToHash(window.location.hash || "#home-section");
      setTimeout(() => {
        const event = new Event("scroll");
        window.dispatchEvent(event);
      }, 150);
    };

    if (window.location.hash && window.location.hash !== "#") {
      setTimeout(() => {
        performScrollToHash(window.location.hash);
        setTimeout(() => {
          const event = new Event("scroll");
          window.dispatchEvent(event);
        }, 200);
      }, 100);
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [performScrollToHash]);

  const headerBaseClasses =
    "h-14 shadow-md sticky top-0 z-[999] transition-colors duration-300";
  const headerThemeClasses = "bg-gray-950/90 text-slate-100 backdrop-blur";
  const portfolioTitleColor = "text-gray-100 hover:text-[#A9B4A8]";
  const iconColorPropValue = "#E5E7EB";
  const iconButtonBaseClasses =
    "p-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-200";
  const iconButtonThemeSpecificClasses =
    "hover:bg-gray-700/70 focus:ring-[#A9B4A8] focus:ring-offset-gray-950";
  const mobileMenuBackground = "bg-gray-950/95 backdrop-blur-lg";
  const navButtonBase = "rounded-full border border-[#A9B4A8] bg-transparent text-white px-4 py-0.5 text-sm font-medium transition-colors duration-200 focus:outline-none";
  const navButtonHover = "hover:bg-[#232B3A] hover:text-white";

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

          <nav className="hidden md:flex items-center md:space-x-2 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.id}
                data-nav-link-id={link.id}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`${navButtonBase} ${navButtonHover}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 md:space-x-3">
              <a
                href="https://www.linkedin.com/in/waleed1011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="block p-1 transition-all duration-200 ease-in-out hover:opacity-85 hover:scale-110"
              >
                <FaLinkedin size={22} color={iconColorPropValue} />
              </a>
              <a
                href="https://github.com/waleedarif1011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="block p-1 transition-all duration-200 ease-in-out hover:opacity-85 hover:scale-110"
              >
                <FaGithub size={22} color={iconColorPropValue} />
              </a>
              <a
                href="https://www.kaggle.com/waleedarif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle Profile"
                className="block p-1 transition-all duration-200 ease-in-out hover:opacity-85 hover:scale-110"
              >
                <img
                  className="h-8 w-8"
                  src="/kaggle-logo.png"
                  alt="Kaggle"
                  title="Kaggle"
                />
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
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${mobileMenuBackground} ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className={`flex flex-col items-center justify-center h-full space-y-4 px-4 pb-4 pt-20 sm:pt-24 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.label}`}
              href={link.id}
              data-nav-link-id={link.id}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className={`${navButtonBase} ${navButtonHover} w-full max-w-xs text-lg block text-center`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;