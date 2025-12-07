import React from 'react';
import { BubbleChat } from '../../components/BubbleChat/BubbleChat';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Video, MoreVertical, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-4 px-0 sm:px-4 bg-stone-100">
      {/* WhatsApp Header */}
      <header className="w-full max-w-md bg-[#075e54] text-white p-3 flex items-center justify-between shadow-md z-20 rounded-t-lg sm:mt-4">
        <div className="flex items-center gap-3">
          <ChevronLeft size={24} />
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white/20">
            <img src="https://files.catbox.moe/x96wyv.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-semibold text-base leading-tight">My Love ❤️</h1>
            <p className="text-xs text-white/80">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pr-2">
          <Video size={20} />
          <Phone size={20} />
          <MoreVertical size={20} />
        </div>
      </header>
      
      <main className="w-full max-w-md flex-1 bg-[#efe7dd] relative shadow-xl">
        <BubbleChat />
      </main>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="fixed bottom-8 z-30 w-full max-w-md px-8 flex justify-center pointer-events-none"
      >
        <Link 
          to="/password" 
          className="btn-playful text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-xl pointer-events-auto w-full sm:w-auto"
          aria-label="Next page"
        >
          <span className="font-bold text-lg">Go to Next Page</span>
          <ArrowRight size={24} />
        </Link>
      </motion.div>
    </div>
  );
};
