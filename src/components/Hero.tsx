'use client';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!textRef.current) return;
    
    const chars = textRef.current.innerText.split('');
    textRef.current.innerText = '';
    
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(50px)';
      span.style.display = 'inline-block';
      if (char === ' ') {
        span.style.width = '0.5em';
      }
      textRef.current?.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-purple-900/20 to-blue-900/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >

        <p className="text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.3em] mb-6 text-sm font-light">
          Full Stack Developer
        </p>
        <h1 
          ref={textRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none"
        >
          SATISH
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900 dark:from-neutral-200 dark:to-neutral-600 mt-2">
          CHANDRA
        </h2>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-neutral-300 dark:bg-neutral-800 relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-neutral-900 dark:bg-white origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "circOut"
            }}
          />
        </div>
      </div>
    </section>
  );
}
