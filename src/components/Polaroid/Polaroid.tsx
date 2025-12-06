import React from 'react';
import { motion } from 'framer-motion';

interface PolaroidProps {
  image: string;
  text: string;
  rotation?: number;
}

export const Polaroid: React.FC<PolaroidProps> = ({ image, text, rotation = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-4 pb-8 shadow-lg rounded-sm max-w-[280px] mx-auto polaroid-shadow transform transition-transform duration-300 hover:scale-105 hover:z-10"
      style={{ rotate: `${rotation}deg` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-square bg-stone-200 mb-4 overflow-hidden">
        <img 
          src={image} 
          alt="Memory" 
          className="w-full h-full object-cover filter sepia-[0.2] contrast-[1.1]"
          loading="lazy"
        />
      </div>
      <div className="text-center px-2">
        <p className="font-handwriting text-stone-700 text-lg leading-tight font-medium" style={{ fontFamily: '"Nunito", sans-serif' }}>
          {text}
        </p>
      </div>
    </motion.div>
  );
};
