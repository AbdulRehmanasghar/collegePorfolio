import React from 'react';
import TechIcon from '../../Components/TechIcon'; 
const WhyRajanpurCard = ({ iconName, title, description }) => {
  return (
    <div className="bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center text-center backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 rounded-full mb-6">
        <TechIcon name={iconName} className="w-8 h-8 md:w-10 md:h-10 text-accent" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

export default WhyRajanpurCard;
