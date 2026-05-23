'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "ClassSync",
    category: "Full Stack App (MERN)",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tripify",
    category: "AI Travel Planner",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "MTRN",
    category: "P2P Marketplace",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Geeta 3D Web",
    category: "3D Web Experience",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-10 relative z-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter">
          SELECTED <br/> WORKS
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={cardRef}
      className={`relative w-full flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className="w-full md:w-2/3 h-[50vh] md:h-[70vh] overflow-hidden rounded-xl cursor-none relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="hover"
      >
        <motion.img 
          src={project.image} 
          alt={project.title}
          style={{ y }}
          className="w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-center px-4">
        <p className="text-neutral-500 uppercase tracking-widest text-sm mb-2">
          {project.category}
        </p>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative overflow-hidden inline-block group">
           {project.title}
           <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </h3>
        <button 
          className="self-start text-sm uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          data-cursor="hover"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );
}
