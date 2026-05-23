import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingControls() {
  const [isDark, setIsDark] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize theme based on document class
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    // Initialize audio (make sure you have an audio.mp3 in your public folder!)
    audioRef.current = new Audio('/audio.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft background volume

    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Autoplay blocked until user interacts:', err));
      }
      // Remove listeners once audio is triggered
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Browsers require user interaction to play audio, so this click handles it
      audioRef.current.play().catch(err => console.log('Audio playback failed:', err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-cursor="hover"
        className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shadow-lg border border-neutral-300 dark:border-neutral-700 backdrop-blur-md"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-cursor="hover"
        className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shadow-lg border border-neutral-300 dark:border-neutral-700 backdrop-blur-md"
        aria-label="Toggle Audio"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </div>
  );
}
