import React, { useState }from 'react'
import { Globe ,   Users, ChevronRight , Tag  } from "lucide-react";
import {ArrowRight} from 'lucide-react';

const Events  = () => {
  const [expanded,setExpanded]=useState(null);
  const events=[
    {
    id:1,
    image:'src/assets/WhatsApp Image 2025-08-20 at 18.11.58_c0a0cfe6.jpg',
    location:'Rajanpur',
    date:'Athletics',
    title:'Unleashing the Spirit of Sports – RajanPur College Annual Games',
    description:"Experience the thrill of competition at our Annual Sports Festival! Come together to cheer for our talented athletes and celebrate their achievements.....",
    type:"Sports",
    organizer:"RAJANPUR COLLEGE",
    extra:{
      longDescription:"Students from all departments participate in cricket, football, races, and many more. It's the highlight of the year filled with energy, cheers, and celebrations.",
    images:[
      
        { src: "src/assets/WhatsApp Image 2025-08-20 at 18.11.58_c0a0cfe6.jpg", caption: "Join us in celebrating the remarkable achievements of our college sports teams at the Annual Sports Awards Ceremony! We will honor the winning teams and individual athletes for their dedication, teamwork, and outstanding performances throughout the year!" },
        { src: "src/assets/news_4707_all-set-for-school-college-games-2019_mn (1).png", caption: "Experience the excitement of college football as our teams clash on the field, showcasing their skills and sportsmanship. Join us for a thrilling match filled with teamwork, strategy, and unforgettable moments!" },
          { src: "src/assets/sports2.jpg", caption: "Capture the spirit of camaraderie as our students pose together, celebrating friendships and memories at college. This moment reflects the joy of shared experiences and the bonds forged during their academic journey!" },
          
        
        ],
    },
    },
    {
    id:2,
    image:'src/assets/fare3.jpg',
    location:'Rajanpur',
    date:'Legacy',
    title:'Farewell to Our Beloved Seniors – Wishing You Success Beyond College!',
    description:"Come together for a memorable farewell celebration, honoring the journey and achievements of our beloved graduates. Let’s create lasting memories as we say goodbye!...",
    type:"Farewell",
    organizer:"RAJANPUR COLLEGE",
    extra:{
      longDescription:"Students from all departments participate in cricket, football, races, and many more. It's the highlight of the year filled with energy, cheers, and celebrations.",
    images:[
        { src: "src/assets/fare2.jpg", caption: "Join us for an unforgettable farewell party as students come together to celebrate friendships and memories before graduation. This annual event is filled with joy, laughter, and heartfelt goodbyes, marking a significant milestone in our college journey!" },
          { src: "src/assets/fare3.jpg", caption: "Join us for a memorable farewell party as we celebrate the achievements and journeys of our graduating students. This annual event is a heartfelt gathering filled with laughter, nostalgia, and new beginnings. Let’s create lasting memories together as we bid farewell to our friends!" },
          { src: "src/assets/fare4.jpg", caption: "Celebrate our dedicated educators at the annual farewell party, where teachers come together to reflect on a year of growth and inspiration. This special gathering honors their contributions and the lasting impact they've made on students’ lives!" },
         
        ],
    },
    },
    {
    id:3,
    image:'src/assets/farewell1.jpg',
    location:'Rajanpur',
    date:'Assessment',
    title:'Celebrating Excellence: Annual Results Showcase',
    description:"Join us for our Annual Function, a night of talent and inspiration showcasing the creativity of our students. Celebrate achievements and enjoy captivating performances!...",
    type:"Annual Function",
    organizer:"RAJANPUR COLLEGE",
    extra:{
      longDescription:"Students from all departments participate in cricket, football, races, and many more. It's the highlight of the year filled with energy, cheers, and celebrations.",
    images:[
        { src: "src/assets/reslut.jpg", caption: "As the exam day arrives, students gather in focused anticipation, ready to showcase their knowledge and hard work. This important moment reflects their dedication and commitment to academic excellence!" },
          { src: "src/assets/result2.jpg", caption: "Teachers diligently oversee the examination process, ensuring a fair and supportive environment for all students. Their guidance and presence reflect a commitment to academic integrity and student success." },
          { src: "src/assets/result3.jpg", caption: "The annual term exam marks a pivotal moment in our academic journey, evaluating the knowledge and skills. This significant assessment challenges students to demonstrate their understanding and readiness for future endeavors!" },
          
        ],
    },
    },
  ]
  return (
   <section className='px-4 md:px-16 py-12 bg-[#002140] min-h-screen'>
    {/* top */}
    <div className='flex spaxe-x-4 gap-2'>
      <a href="/" className=' text-orange-500 hover:text-orange-600'>
      Home</a>
      <ChevronRight className='text-gray-500 pt-1' size={24} />
      <span href="/events" className=' text-gray-700 
      onClick={(e) => e.preventDefault()} '>
      Events</span>
    </div>





    {/* heading  */}
    <h3 className='mt-12 text-3xl md:text-5xl font-bold text-gray-100 mb-6'>
      News <span className='text-orange-500'>&</span> Events
    </h3>
    <p className='text-gray-400 text-base md:text-lg max-w-2xl  leading-relaxed'>
       Stay updated with our latest classes, campus events, and student workshops!
    </p>
    {/* grid columns */}
    <div className='mt-12 space-y-8 '>
  {events.map((event) => (
    <div
      key={event.id}
      className='bg-[#002147] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300'
    >
      {/* grid for left + right content */}
      <div className='grid md:grid-cols-2  transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl'>
        {/* left side */}
        <img
          src={event.image}
          alt="Picture"
          className='w-full h-74 object-cover'
        />

        {/* right side */}
        <div className='p-6 flex flex-col justify-between'>
          <div>
            <p className='pl-3 text-[16px] text-gray-300 mb-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12'>
              <span className='flex items-center gap-1'>
                <Tag size={16} className='text-orange-500' />
                {event.type}
              </span>
              <span className='flex items-center gap-1'>
                <Globe  size={16} className='text-orange-500' />
                {event.date}
              </span>
              <span className='flex items-center gap-1'>
                <Users className="w-4 h-4 text-orange-500" />
                {event.organizer}
              </span>
            </p>

            {/* title */}
            <h2 className='mt-6 text-xl md:text-3xl font-bold text-slate-200 mb-3 tracking-wide'>
              {event.title}
            </h2>

            {/* short description */}
            <p className='mt-6 text-gray-400 text-[16px] text-sm mb-4'>
              {event.description}
            </p>
          </div>

          {/* show more button */}
          <div className='flex justify-center'>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-orange-600 group"
              onClick={() =>
                setExpanded(expanded === event.id ? null : event.id)
              }
            >
              <span className='group-hover:order-2'>
                {expanded === event.id ? "Show Less" : "Show More"}
              </span>
              <ArrowRight className='w-5 h-5 group-hover:order-1 transition-transform duration-300 group-hover:rotate-360' />
            </button>
          </div>
        </div>
      </div> {/* ✅ Close grid here */}

      {/* expanded content full width */}
      {expanded === event.id && (
        <div className='mt-6 p-6'>
          
          
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {event.extra.images.map((img, i) => (
              <div
                key={i}
                className='bg-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col  transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl'
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex-grow flex items-center justify-center">
                  <p className="text-gray-300 text-sm text-center md:text-base lg:text-lg">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ))}
</div>

   </section>
  )
}

export default Events;
