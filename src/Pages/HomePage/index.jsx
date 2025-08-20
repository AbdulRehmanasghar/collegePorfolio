import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoModal from '../../Components/VideoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import homeVideo from '../../assets/Videos/home/homeVideo.mp4';
import videoPic from '../../assets/images/home/videoPic.jpg';
import EventCard from './EventCard';
import events from './eventData';
import Button from '../../Components/Button';
import TechIcon from '../../Components/TechIcon';
import CounterSection from './CounterSection';
import Testimonials from './Testimonials';
import CampusCard from './CampusCard';
import campusData from './campusData';
import WhyRajanpurCard from './WhyCard';
import { whyRajanpurData } from './whyData';
import { heroData } from './heroData';

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  //for aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoOpen(true); //video open when visited
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  //image changing
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentHeroIndex((prevIndex) => 
          prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); 
      
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-hidden">

   {/* Section 1 */}
   <section className="bg min-h-screen relative flex items-center justify-center overflow-hidden">
    <div 
     className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
     }`}
     style={{
      backgroundImage: `url(${heroData[currentHeroIndex].image})`
     }}
    />
    <div className="absolute inset-0 bg-black/50" />
    
    <div className="container relative z-10">
     <div className="text-center">
      <h1
       className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
       Welcome to Rajanpur College
      </h1>
      <p
       className={`text-xl md:text-2xl text-[#d3dce6d7] max-w-3xl mx-auto mb-8 transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
       }`}
      >
       {heroData[currentHeroIndex].text}
      </p>
      <Button
         variant="primary"
         size="lg"
         onClick={() => navigate('/programs')}
         className="text-white px-8 py-4 rounded-lg text-lg font-semibold"
       >
         Explore Now
        </Button>
     </div>
    </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroIndex 
                  ? 'bg-accent' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentHeroIndex(index);
                  setIsTransitioning(false);
                }, 250);
              }}
            />
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen bg-bg2 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Why <span className="text-accent">Rajanpur College</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mt-4">
              Unleash your potential with our unique offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyRajanpurData.map((card, index) => (
              <div key={card.id} data-aos="fade-up" data-aos-delay={index * 150}>
                <WhyRajanpurCard
                  iconName={card.iconName}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg py-20">
        <div className="container px-4">
          <div className="text-center mb-16" data-aos="zoom-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our <span className='text-accent'>Campus</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto" data-aos="fade-up">
            <CampusCard
              campus={campusData[0]}
              className="transform transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen bg-bg2 flex items-center justify-center">
        <Testimonials />
      </section>

      <section className="min-h-screen bg flex items-center justify-center py-20">
        <div className="w-full px-4">
          <div className="text-center mb-16" data-aos="zoom-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our <span className='text-accent'>Story</span>
            </h2>
          </div>

          <div
            className="w-full max-w-7xl mx-auto "
            data-aos="zoom-in"
            data-aos-offset="200"
          >
            
            <div
              className="relative w-full h-[70vh] md:h-[90vh] rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `url(${videoPic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => setIsVideoOpen(true)}
            >

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-accent hover:bg-[#ea7c2b] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xl md:text-2xl font-semibold drop-shadow-lg">
                  Watch Our Story
                </p>
                <p className="text-sm md:text-base text-gray-200 drop-shadow-lg">
                  Click to play video
                </p>
              </div>
            </div>
          </div>
        </div>
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={homeVideo}
          title="Our Institution Story"
        />
      </section>

      {/* Section 4 */}
      <section className="min-h-screen bg-bg2 flex flex-col items-center py-20">
        <div className="container px-4">
          <div
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
            data-aos="fade-down"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              News <span className='text-accent'>&</span> Events
            </h2>
           <Button
                 onClick={() => navigate('/events')}
                 className="group bg-orange-400 hover:bg-orange-500 text-white px-8 py-6 rounded-full text-sm md:text-base font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
               View All News & Events
               <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                 <TechIcon name="arrow-right" />
                 </span>
          </Button>

          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 lg:max-w-[60%] h-full" data-aos="fade-right">
              <EventCard
                image={events[0].image}
                title={events[0].title}
                location={events[0].location}
                date={events[0].date}
                description={events[0].description}
                className="h-full"
              />
            </div>

            <div className="flex-1 lg:max-w-[40%] flex flex-col gap-8">
              {events.slice(1, 4).map((event, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                >
                  <EventCard
                    image={event.image}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Section 5*/}
      <CounterSection />
    </div>
  );
};

export default HomePage;
