import React from 'react'
import logo from "../../assets/images/logo.png"
import { motion } from 'framer-motion'

const About_page = () => {
  return (
    <div className='flex flex-col items-center w-full bg-gradient-to-tr from-[#002147] to-[#002140]'>
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }} className="relative">
<img src={logo} alt="Rajanpur College Logo" className='object-cover object-center w-full h-[300px] md:h-[550px]'/>
<span className='absolute flex flex-col items-center justify-center inset-0 '>
  <h1 className='bg-clip-text text-shadow-xs text-shadow-white bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 outline-1 outline-white stroke-teal-200 bg-transparent text-4xl md:text-6xl text-clip text-transparent z-20'>About Us</h1>
</span>
<div className='absolute inset-0 bg-black/65 bg-opacity-5'/>
      </motion.div>
      
      <motion.div initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.7,ease:"easeIn"}}
         className='m-5 px-2 space-y-3'>
        
        <span>
          <h1 className='text-3xl font-bold text-white'>
            About Rajanpur College
          </h1>
          <p className='text-lg font-light text-white m-4 tracking-wide'>
            Rajanpur College is a distinguished educational institution located in Rajanpur District, Pakistan, committed to providing quality education to students in both school and college levels. Under the visionary leadership of Principal Muhammad Awais Rehmani, our institution has been dedicated to fostering academic excellence, character development, and preparing students for future success in their chosen fields.
          </p>
        </span>

        <span>
          <h1 className='text-3xl font-bold text-white'>
            Our Leadership
          </h1>
          <p className='text-lg font-light text-white m-4 tracking-wide'>
            Principal Muhammad Awais Rehmani brings years of educational experience and a passion for student development to Rajanpur College. Under his guidance, our institution maintains high academic standards while creating a supportive learning environment. His commitment to educational excellence and student welfare has been instrumental in shaping the college's reputation as a center of learning and character building in Rajanpur District.
          </p>
        </span>

        <span>
          <h1 className='text-3xl font-bold text-white'>
            Our Faculty & Staff
          </h1>
          <p className='text-lg font-light text-white m-4 tracking-wide'>
            Our dedicated team of experienced teachers and staff members work collaboratively to provide comprehensive education across various disciplines. Each faculty member is carefully selected for their expertise and commitment to student success. Our teachers employ modern pedagogical methods while maintaining strong foundational values, ensuring that students receive both academic knowledge and moral guidance.
          </p>
        </span>

        <span>
          <h2 className='text-2xl text-white'>Our Academic Programs:</h2>
          <ul className='flex flex-col items-start space-y-1 m-4'>
            <li className='text-lg font-light text-white underline hover:text-orange-500'>Primary Education (Classes 1-5)</li>
            <li className='text-lg font-light text-white underline hover:text-orange-500'>Middle School (Classes 6-8)</li>
            <li className='text-lg font-light text-white underline hover:text-orange-500'>Secondary Education (Classes 9-10)</li>
            <li className='text-lg font-light text-white underline hover:text-orange-500'>Higher Secondary Education (Classes 11-12)</li>
            <li className='text-lg font-light text-white underline hover:text-orange-500'>College Programs & Degree Courses</li>
          </ul>
        </span>

        <span>
          <h1 className='text-3xl font-bold text-white'>
            Our Students & Community
          </h1>
          <p className='text-lg font-light text-white m-4 tracking-wide'>
            Our students come from diverse backgrounds across Rajanpur District and surrounding areas. We are committed to providing accessible, quality education that prepares students for higher education opportunities and professional careers. Our supportive learning environment encourages critical thinking, creativity, and personal growth.
            
            We maintain strong connections with parents and the local community, believing that education is a collaborative effort. Our college serves as a hub of learning and cultural activities, contributing to the educational and social development of Rajanpur District.
            
            At Rajanpur College, we take pride in our students' achievements and their contributions to society. Our graduates go on to pursue successful careers in various fields, carrying with them the values and knowledge they gained during their time with us.
          </p>
        </span>
      </motion.div>
    </div>
  )
}

export default About_page;