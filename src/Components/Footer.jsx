
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechIcon from './TechIcon'; 
import Button from './Button'; 

const Footer = () => {
  const navigate = useNavigate();

  const importantLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact-us' },
  ];

  const usefulLinks = [
    { label: 'Programs', path: '/programs' },
    { label: 'Events', path: '/events' },
    { label: 'Faculty', path: '/faculty' },
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: 'facebook', label: 'Facebook' },
    { icon: 'instagram', label: 'Instagram' },
    { icon: 'linkedin', label: 'LinkedIn' },
    { icon: 'youtube', label: 'YouTube' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSocialClick = (label) => {
    const socialUrls = {
      'Facebook': 'https://facebook.com/yourpage',
      'Instagram': 'https://instagram.com/yourpage',
      'LinkedIn': 'https://linkedin.com/company/yourcompany',
      'YouTube': 'https://youtube.com/yourchannel'
    };
    
    if (socialUrls[label]) {
      window.open(socialUrls[label], '_blank', 'noopener,noreferrer');
    }
  };

  const renderLogo = () => (
    <img
      src="./src/assets/images/logo.png"
      alt="Beaconhouse International College"
      className="h-18 w-auto mb-4"
    />
  );

  return (
    <footer className="bg-bg2 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              {renderLogo()}
              <p className="text-soft-white text-lg font-medium mb-6">
                Website proudly crafted by our partners at DevSum.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSocialClick(social.label)}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-400 text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <TechIcon name={social.icon} className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left p-0 h-auto justify-start"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left p-0 h-auto justify-start"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span>{' '}
                <Button
                  variant="ghost"
                  onClick={() => window.location.href = 'tel:+923367822121'}
                  className="hover:text-orange-400 transition-colors duration-200 p-0 h-auto text-gray-300"
                >
                  +92 336 782 2121
                </Button>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <Button
                  variant="ghost"
                  onClick={() => window.location.href = 'mailto:hawais37@gmail.com'}
                  className="hover:text-orange-400 transition-colors duration-200 p-0 h-auto text-gray-300"
                >
                  hawais37@gmail.com
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © 2025 DevSum All Rights Reserved
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6">
              {legalLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  onClick={() => handleNavigation(link.path)}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm p-0 h-auto"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;