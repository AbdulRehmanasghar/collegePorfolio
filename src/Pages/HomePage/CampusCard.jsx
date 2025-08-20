import React from 'react';
import TechIcon from '../../Components/TechIcon';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const CampusCard = ({ campus, className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-navy-dark rounded-2xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500 flex flex-col md:flex-row ${className}`}>

      <div className="relative md:w-1/2 h-64 md:h-full overflow-hidden">
        <img 
          src={campus.image} 
          alt={campus.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Est. {campus.established}
        </div>
      </div>

      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">{campus.name}</h3>
          </div>

          <div className="flex items-center mb-4">
            <TechIcon name="map-pin" className="text-gray-400 mr-2" size={16} />
            <span className="text-gray-300 text-sm">RAJAN PUR COLLEGE Rajanpur, COLLEGE, Rajanpur District, Pakistan</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex space-x-3 mb-6">
            {['facebook', 'instagram', 'linkedin', 'youtube'].map((icon) => (
              <button
                key={icon}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-400 text-white transition-colors duration-200"
                aria-label={icon}
              >
                <TechIcon name={icon} className="w-5 h-5" />
              </button>
            ))}
          </div>

          <Button
            className="w-full bg-accent hover:bg-orange-500 text-white py-5 px-8 rounded-xl font-semibold flex items-center justify-center"
            onClick={() => navigate('/programs')}
          >
            <span>Explore Campus</span>
            <TechIcon name="moveright" className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampusCard;