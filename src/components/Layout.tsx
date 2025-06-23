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
          Copyright © {new Date().getFullYear()} <span className="mx-1">Waleed Tech Journey.</span>
          <span className="ml-4">Developed by Waleed Arif</span>
        </p>
      </footer>
    </div>
  );
};

export default Layout; 