
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact-us' },
    { label: 'Programs', path: '/programs' },
    { label: 'Events', path: '/events' },
    { label: 'Faculty', path: '/faculty' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const renderLogo = (className = '') => (
    <img
      src="./src/assets/images/logo.png"
      alt="RajanpurLogo"
      className={`${className} h-15 md:!h-18 !w-18 object-contain`} 
    />
  );

  const renderNavButton = (item, isMobile = false) => {
    const baseClass = isMobile 
      ? "block w-full text-left text-white text-lg font-medium py-4 hover:text-orange-400 transition-colors duration-200"
      : "text-white hover:text-orange-400 transition-colors duration-200 font-medium";
    
    return (
      <button
        key={item.label}
        onClick={() => handleNavigation(item.path)}
        className={baseClass}
      >
        {item.label}
      </button>
    );
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <nav className="bg-[#002147] text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <button
              onClick={() => handleNavigation('/')}
              className="flex-shrink-0 hover:opacity-90 transition-opacity duration-200"
            >
              {renderLogo("h-12 lg:h-16 w-auto")}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => renderNavButton(item))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavigation('/programs')}
                className="hidden lg:block bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors duration-200 font-semibold cursor-pointer"
              >
                Enroll now
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-white hover:text-orange-400 transition-colors duration-200 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-[#002147] z-[70] lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-600">
                  {renderLogo("h-12 w-auto")}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-orange-400 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <div key={item.label}>
                      {renderNavButton(item, true)}
                      {index < navItems.length - 1 && (
                        <div className="border-b border-gray-700 my-2" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600">
                  <button
                    onClick={() => handleNavigation('/enroll')}
                    className="w-full bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors duration-200 font-semibold text-lg"
                  >
                    Enroll now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;