import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, MailOpen } from 'lucide-react';

export const Video: React.FC = () => {
  const navigate = useNavigate();
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    const isUnlocked = sessionStorage.getItem('isUnlocked');
    if (!isUnlocked) {
      navigate('/password');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 px-4 pb-20 relative z-10">
      <header className="mb-8 text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-rose-900 mb-1 font-handwriting">Our Memory</h1>
        <div className="h-1 w-12 bg-rose-300 mx-auto rounded-full"></div>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-xl mb-8 border border-white/50"
      >
        <div className="aspect-video bg-stone-900 rounded-2xl overflow-hidden relative group shadow-inner">
          {/* Placeholder for MP4 video */}
          <video 
            className="w-full h-full object-cover"
            controls
            poster="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1000&auto=format&fit=crop"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 text-center">
          <p className="text-rose-500 italic font-medium">"A moment to remember forever..."</p>
        </div>
      </motion.div>

      {/* Love Button to Open Card */}
      {!isCardOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCardOpen(true)}
          className="bg-rose-500 text-white p-4 rounded-full shadow-lg animate-bounce mb-8"
        >
          <Heart size={32} fill="currentColor" />
        </motion.button>
      )}

      <AnimatePresence>
        {isCardOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, scale: 0.8 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-rose-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 to-pink-300"></div>
              <MailOpen className="w-8 h-8 text-rose-400 mx-auto mb-4" />
              
              <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar text-left space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  My Dearest,
                </p>
                <p className="text-stone-600 leading-relaxed">
                  I wanted to share this special video with you. It reminds me of how happy you make me feel every single day.
                  Every moment with you is a treasure I hold close to my heart.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  You are the sunshine that lights up my world and the calm in every storm. I promise to love you more with each passing day.
                  No matter where life takes us, my heart will always find its way back to you.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Thank you for being you, and for being mine.
                </p>
                <p className="text-stone-700 font-handwriting text-xl text-right mt-4">
                  Forever Yours ❤️
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-8 right-8 z-10"
      >
        <Link 
          to="/gallery" 
          className="btn-playful text-white w-14 h-14 rounded-full flex items-center justify-center"
          aria-label="Next page"
        >
          <ArrowRight size={24} />
        </Link>
      </motion.div>
    </div>
  );
};
