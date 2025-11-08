'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function ContactModal({ isOpen, onCloseAction }: { isOpen: boolean; onCloseAction: () => void }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCloseAction}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <button
            onClick={onCloseAction}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close contact modal"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
          
          <div className="space-y-4">
            <a
              href="tel:+2347018080377"
              className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FaPhone className="w-5 h-5" />
              <span>Phone Call</span>
            </a>
            
            <a
              href="https://wa.me/2347018080377"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
