'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-20 px-4 md:px-10 border-t border-white/10 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter mb-6 md:mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          LET'S TALK
        </motion.h2>

        <a 
          href="mailto:imsachandra@gmail.com"
          className="text-xl md:text-3xl font-light underline decoration-1 underline-offset-8 hover:text-neutral-400 transition-colors"
          data-cursor="hover"
        >
          imsachandra@gmail.com
        </a>
        <p className="mt-4 text-neutral-400">+91 9131582971</p>

        <div className="mt-16 md:mt-32 w-full flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 uppercase tracking-widest gap-6">
          <p>© {new Date().getFullYear()} SATISH CHANDRA</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/satish-chandra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-cursor="hover">LinkedIn</a>
            <a href="https://github.com/Satish2004" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-cursor="hover">GitHub</a>
          </div>
          <p>BUILT WITH NEXT.JS</p>
        </div>
      </div>
    </footer>
  );
}
