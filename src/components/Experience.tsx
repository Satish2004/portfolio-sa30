'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Postulate Info Tech Pvt. Ltd.",
    date: "Nov 2024 – Dec 2024",
    description: "Engineered responsive frontend architectures using React and Angular, and developed scalable Node.js/Express RESTful APIs integrated with MongoDB to reduce backend latency."
  },
  {
    role: "2nd Runner-Up",
    company: "Flash Hack '25 (GDSC R1)",
    date: "Apr 2025",
    description: "Recognized for developing innovative technical solutions under a 24-hour constraint."
  },
  {
    role: "Participant & Builder",
    company: "DevsHouse '25 Hackathon (VIT Chennai)",
    date: "Apr 2025",
    description: "Built an IoT-integrated application: Arduino-based posture detection system with real-time vibration alerts and a React dashboard."
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-20 relative z-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold mb-12 md:mb-20 tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          EXPERIENCE & <br/> ACHIEVEMENTS
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="group border-b border-white/10 pb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-neutral-500 uppercase tracking-widest text-sm mt-2 md:mt-0">
                  {exp.date}
                </span>
              </div>
              <p className="text-xl text-neutral-300 mb-4">{exp.company}</p>
              <p className="text-neutral-500 font-light max-w-2xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
