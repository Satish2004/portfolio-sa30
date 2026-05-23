'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4 md:px-20 min-h-screen flex items-center relative z-20 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            ENGINEERING <br />
            <span className="text-neutral-500">SCALABLE</span> <br />
            SOLUTIONS
          </h2>
          <div className="w-20 h-[1px] bg-white mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed space-y-6"
        >
          <p>
            I am a Full Stack Developer currently pursuing my B.Tech in Computer Science Engineering 
            at Rungta College of Engineering and Technology (2022-2026). 
          </p>
          <p>
            I specialize in engineering responsive frontend architectures using React and Angular, 
            along with developing scalable backend RESTful APIs using Node.js, Express, and MongoDB. 
            My approach focuses on high performance, robust state management, and reliable architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
