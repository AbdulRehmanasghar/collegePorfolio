import React from 'react';
import logo from "../../assets/images/logo.png";
import { motion } from 'framer-motion';

const About_page = () => {
  return (
    <div className='flex flex-col items-center w-full bg-gradient-to-tr from-[#002147] to-[#001830]'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        className="relative w-full"
      >
        <img 
          src={logo} 
          alt="Rajanpur College Logo" 
          className='object-contain object-center w-full h-[250px] md:h-[450px] scale-95 brightness-90 contrast-105'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[2px]' />
        
        <span className='absolute flex flex-col items-center justify-center inset-0'>
          <h1 className='text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg'>
            About Us
          </h1>
        </span>
      </motion.div>

      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.7,ease:"easeIn"}}
        className='m-5 px-4 max-w-5xl space-y-6'
      >
        <span>
          <h1 className='text-3xl font-bold text-white'>About Rajanpur College</h1>
          <p className='text-lg font-light text-gray-200 mt-3'>
            Rajanpur College is a distinguished educational institution located in Rajanpur District, Pakistan, committed to providing quality education to students in both school and college levels. Under the visionary leadership of Principal Muhammad Awais Rehmani, our institution has been dedicated to fostering academic excellence, character development, and preparing students for future success in their chosen fields.
          </p>
        </span>

        <span>
          <h1 className='text-3xl font-bold text-white'>Our Leadership</h1>
          <p className='text-lg font-light text-gray-200 mt-3'>
            Principal Muhammad Awais Rehmani brings years of educational experience and a passion for student development to Rajanpur College. Under his guidance, our institution maintains high academic standards while creating a supportive learning environment.
          </p>
        </span>

        <span>
          <h1 className='text-3xl font-bold text-white'>Our Faculty & Staff</h1>
          <p className='text-lg font-light text-gray-200 mt-3'>
            Our dedicated team of experienced teachers and staff members work collaboratively to provide comprehensive education across various disciplines. Each faculty member is carefully selected for their expertise and commitment to student success.
          </p>
        </span>

        <span>
          <h2 className='text-2xl text-white font-semibold'>Our Academic Programs:</h2>
          <ul className='flex flex-col items-start space-y-1 mt-3 pl-4 list-disc'>
            <li className='text-lg font-light text-gray-200 hover:text-accent cursor-pointer'>Primary Education (Classes 1-5)</li>
            <li className='text-lg font-light text-gray-200 hover:text-accent cursor-pointer'>Middle School (Classes 6-8)</li>
            <li className='text-lg font-light text-gray-200 hover:text-accent cursor-pointer'>Secondary Education (Classes 9-10)</li>
            <li className='text-lg font-light text-gray-200 hover:text-accent cursor-pointer'>Higher Secondary Education (Classes 11-12)</li>
            <li className='text-lg font-light text-gray-200 hover:text-accent cursor-pointer'>College Programs & Degree Courses</li>
          </ul>
        </span>
        <span>
          <h1 className='text-3xl font-bold text-white'>Our Students & Community</h1>
          <p className='text-lg font-light text-gray-200 mt-3'>
            Our students come from diverse backgrounds across Rajanpur District and surrounding areas. We are committed to providing accessible, quality education that prepares students for higher education opportunities and professional careers.
          </p>
        </span>

        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6, ease:"easeOut"}} 
          className='p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg mt-8'
        >
          <h1 className='text-3xl font-bold text-accent'>Our Digital Partner: DevSum</h1>
          <p className='text-lg font-light text-gray-200 mt-3'>
            This website was proudly developed in collaboration with <span className='text-accent font-semibold'>DevSum</span>, 
            a leading software development company known for creating innovative and high-performance digital solutions. 
            Their expertise and commitment to quality have helped bring our vision to life, providing a modern and 
            user-friendly platform for our students, parents, and community.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About_page;
