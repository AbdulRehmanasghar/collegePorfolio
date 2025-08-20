import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechIcon from '../../Components/TechIcon'; 

const EventCard = ({ image, title, location, date, description, className }) => {
  const isLargeCard = !!description;
  const navigate = useNavigate(); 
  
  const handleReadMoreClick = () => {
    navigate('/events'); 
  };

  return (
    <div className={`w-full bg-navy-dark rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300 ${className}`}>
      <div className={`flex ${isLargeCard ? 'flex-col' : 'flex-row'}`}>
        <div className={`relative ${isLargeCard ? 'w-full' : 'w-1/3'} overflow-hidden`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className={`${isLargeCard ? 'w-full' : 'w-2/3'} p-6 flex flex-col justify-between`}>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
            <div className="flex items-center text-soft-white  text-sm mb-2">
              <TechIcon name="map-pin" className="mr-2 text-xl" /> {location}
            </div>
            <div className="flex items-center text-soft-white text-sm">
              <TechIcon name="clock" className="mr-2 text-xl" /> {date}
            </div>
            {isLargeCard && (
              <p className="mt-4 text-[#d3dce6d7] text-base">{description}</p>
            )}
          </div>
          <button 
            onClick={handleReadMoreClick} 
            className="mt-4 text-white font-semibold flex items-center gap-1 cursor-pointer hover:underline focus:outline-none"
          >
            Read More
            <TechIcon name="moveright" className="ml-1 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

