import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import { Polaroid } from '../../components/Polaroid/Polaroid';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import './gallery.css';

const photos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop",
    text: "The day we met..."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
    text: "Our first adventure"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1000&auto=format&fit=crop",
    text: "Always smiling with you"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop",
    text: "My favorite person"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1000&auto=format&fit=crop",
    text: "Here's to forever ❤️"
  }
];

export const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-8 px-4 pb-10 overflow-hidden relative z-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-rose-900 mb-1 font-handwriting">Our Moments</h1>
        <div className="h-1 w-12 bg-rose-300 mx-auto rounded-full"></div>
      </header>

      <div className="w-full max-w-sm flex-1 flex items-center justify-center py-8">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          className="w-[280px] h-[420px]"
          pagination={{ clickable: true }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={photo.id} className="bg-transparent">
              <Polaroid 
                image={photo.image} 
                text={photo.text} 
                rotation={index % 2 === 0 ? 2 : -2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 text-center max-w-xs mx-auto">
        <p className="text-rose-400 text-sm mb-8 font-medium">
          Swipe to see more memories...
        </p>
        
        {/* Interactive Button visible on all devices */}
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="btn-playful text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform"
          >
            <Home size={24} />
            <span className="font-bold text-lg">Back to Start</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
