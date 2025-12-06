import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Heart } from 'lucide-react';

type FloatingHeart = {
  id: number;
  left: number;
  delay: number;
  scale: number; // ← DITAMBAH INI
};

export const Password: React.FC = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const navigate = useNavigate();
  
  const CORRECT_PASSWORD = "love"; 

  useEffect(() => {
    // Generate random hearts
    const newHearts: FloatingHeart[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.5
    }));
    setHearts(newHearts);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === CORRECT_PASSWORD) {
      sessionStorage.setItem('isUnlocked', 'true');
      navigate('/video');
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4">

      {/* Floating Background Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-200 pointer-events-none"
          initial={{ y: '110vh', x: `${heart.left}vw`, opacity: 0, scale: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.8, 0],
            scale: [0, heart.scale, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            delay: heart.delay,
            ease: "linear"
          }}
        >
          <Heart fill="currentColor" size={40 * heart.scale} />
        </motion.div>
      ))}

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center relative z-10 border border-white/50"
      >
        <div className="mb-6 flex justify-center">
          <motion.div 
            animate={{ 
              rotate: error ? [0, -10, 10, -10, 10, 0] : 0,
              scale: error ? 1 : [1, 1.1, 1]
            }}
            transition={{ duration: 0.5 }}
            className={`p-5 rounded-full ${error ? 'bg-red-100 text-red-500' : 'bg-gradient-to-br from-rose-100 to-pink-100 text-rose-500'} shadow-inner`}
          >
            {error ? <Lock size={40} /> : <Unlock size={40} />}
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-rose-900 mb-2 font-handwriting">Secret Area</h2>
        <p className="text-rose-400 mb-8 font-medium">What's the magic word? ❤️</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'love'..."
              className={`w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all duration-300 text-center text-lg tracking-widest
                ${error 
                  ? 'border-red-300 focus:border-red-500 bg-red-50 placeholder-red-300' 
                  : 'border-rose-100 focus:border-rose-300 bg-rose-50/50 focus:bg-white placeholder-rose-300'
                }`}
            />

            <AnimatePresence>
              {input.length > 0 && !error && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-400"
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-playful text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-rose-200 flex items-center justify-center gap-2 group"
          >
            <span>Open My Heart</span>
            <Heart size={20} className="group-hover:animate-bounce" fill="currentColor" />
          </motion.button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm mt-4 font-medium bg-red-50 py-2 px-4 rounded-xl inline-block"
            >
              Not quite! Hint: It's what I feel for you ❤️
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
