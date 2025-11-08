'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'We bring your brand, app, or website to life.';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50); // Adjust typing speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto mb-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative">
                {text.split(' ').map((word, i) => {
                  // Highlight key words with blue
                  const highlight = ['brand', 'app', 'website'].includes(word.toLowerCase().replace(/[.,!?]/g, ''));
                  return (
                    <span key={i} className={`inline-block mr-2 ${highlight ? 'text-blue-600 font-semibold' : ''}`}>
                      {word}
                      {highlight && (
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 -z-10 rounded-full"></span>
                      )}
                    </span>
                  );
                })}
                <motion.span 
                  className="inline-block w-1 h-12 bg-blue-500 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
              </span>
            </motion.h1>
            <p className="text-xl text-gray-800 mb-8">
              Visions that truly <span className="text-blue-600 font-medium">work</span>! We build your <span className="text-blue-600 font-medium">website</span>, <span className="text-blue-600 font-medium">app</span>, or <span className="text-blue-600 font-medium">brand</span> across all platforms, for every user group.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={openModal}
                className="bg-black text-white px-8 py-4 rounded-full text-center font-medium hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </button>
              <Link 
                href="/services" 
                className="border-2 border-black px-8 py-4 rounded-full text-center font-medium hover:bg-gray-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative w-full h-auto max-w-2xl mx-auto lg:max-w-none lg:ml-auto">
            <img 
              src="/ME2.png" 
              alt="Professional portrait" 
              className="w-full h-auto object-contain"
              style={{ maxHeight: '700px' }}
            />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onCloseAction={closeModal} />
    </section>
  );
}
