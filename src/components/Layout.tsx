import React from 'react';
import Header from './Header'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Fixed dark background
  const backgroundClass = 'bg-gray-950';

  return (
    <div className={`min-h-screen flex flex-col font-sans ${backgroundClass} transition-colors duration-300`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-slate-800 py-6 text-center">
        <p className="text-sm text-slate-400">
          Copyright © {new Date().getFullYear()} &nbsp;
          <a
            href="https://www.linkedin.com/in/waleed1011"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:text-[#4B44D8] transition-colors"
          >
            Code by Waleed Arif
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout; 