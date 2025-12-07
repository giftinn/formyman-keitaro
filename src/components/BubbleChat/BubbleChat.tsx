import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { CheckCheck } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'partner';
  time: string;
}

const messages: Message[] = [
  { id: 1, text: "Hai sayangg", sender: 'partner', time: '10:00 AM' },
  { id: 2, text: "Just wanted to say...", sender: 'partner', time: '10:01 AM' },
  { id: 3, text: "I'm so lucky to have you.", sender: 'partner', time: '10:02 AM' },
  { id: 4, text: "You make every day better.", sender: 'partner', time: '10:03 AM' },
  { id: 5, text: "Can't wait to see you later! 😘", sender: 'partner', time: '10:05 AM' },
  { id: 6, text: "Love you so much! And happy mensiversary for us", sender: 'partner', time: '10:06 AM' },
];

export const BubbleChat: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 w-full pb-20 bg-[#efe7dd] min-h-[60vh] rounded-lg shadow-inner relative overflow-hidden">
      {/* WhatsApp Doodle Background Pattern (CSS simulated) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'url("")', backgroundSize: '400px' }}>
      </div>

      {messages.map((msg, index) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.5, duration: 0.3 }}
          className={clsx(
            "max-w-[85%] p-2 px-3 rounded-lg shadow-sm relative text-sm z-10 flex flex-col",
            msg.sender === 'partner' 
              ? "self-start bg-white text-gray-800 rounded-tl-none" 
              : "self-end bg-[#dcf8c6] text-gray-800 rounded-tr-none"
          )}
        >
          <p className="leading-relaxed pb-1">{msg.text}</p>
          <div className="flex items-center justify-end gap-1 self-end -mt-1 opacity-70">
            <span className="text-[10px] text-gray-500">
              {msg.time}
            </span>
            <CheckCheck size={14} className="text-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
