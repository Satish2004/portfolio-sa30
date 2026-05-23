'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Three.js", "GSAP", "Tailwind CSS", "Material UI", "Redux", "JavaScript (ES6+)"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB Atlas", "MySQL"]
  },
  {
    title: "Languages & Core",
    skills: ["Java", "Python", "C", "C++", "Data Structures", "Algorithms", "OS", "DBMS", "CN"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Azure", "Git", "GitHub", "Postman", "Cloudinary"]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-20 relative z-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold mb-10 md:mb-20 tracking-tighter"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          TECHNICAL <br/> ARSENAL
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-20">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-neutral-400 mb-6 border-b border-white/10 pb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 border border-white/20 rounded-full text-sm font-light hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
