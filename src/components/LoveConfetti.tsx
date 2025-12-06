import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const LoveConfetti: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; scale: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ['text-rose-300', 'text-pink-300', 'text-red-300', 'text-rose-200'];
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      scale: Math.random() * 0.6 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color}`}
          initial={{ y: '110vh', x: `${heart.left}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 180, 360],
            x: [`${heart.left}vw`, `${heart.left + (Math.random() * 10 - 5)}vw`]
          }}
          transition={{ 
            duration: 8 + Math.random() * 5, 
            repeat: Infinity, 
            delay: heart.delay,
            ease: "linear"
          }}
        >
          <Heart fill="currentColor" size={30 * heart.scale} />
        </motion.div>
      ))}
    </div>
  );
};
