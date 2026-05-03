'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SeasonalGreeting Component
 * A festive holiday modal that auto-displays after page load.
 * Features animated emojis, gradient styling, and smooth entrance/exit animations.
 */

export default function SeasonalGreeting() {
  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Effect: Auto-show modal after delay
   * Opens the greeting popup 1 second after component mounts for better UX
   * Cleanup: clears timer on unmount to prevent memory leaks
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handler to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay: darkens page and enables click-outside-to-close */}
          <motion.div
            initial={{ opacity: 0 }}        // Start invisible
            animate={{ opacity: 1 }}         // Fade in
            exit={{ opacity: 0 }}            // Fade out on close
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={closeModal}             // Close when clicking outside modal
          />

          {/* Main modal container with spring animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}    // Start: small, offset down
            animate={{ opacity: 1, scale: 1, y: 0 }}       // Animate to: full size, centered
            exit={{ opacity: 0, scale: 0.8, y: 20 }}       // Exit: shrink and move down
            transition={{ type: 'spring', duration: 0.5 }}   // Bouncy spring effect
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            {/* Modal card: festive red-white-green gradient with holiday border */}
            <div className="bg-gradient-to-br from-red-50 via-white to-green-50 rounded-3xl shadow-2xl max-w-md w-full p-8 relative border-4 border-red-200">
              {/* X button: positioned top-right for closing */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Centered holiday content container */}
              <div className="text-center">
                {/* Animated Christmas tree: wobbles on appear */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}    // Wobble animation
                  transition={{ duration: 0.5, delay: 0.3 }}   // Delay after modal opens
                  className="text-6xl mb-4"
                >
                  🎄
                </motion.div>
                
                {/* Holiday greeting heading with Santa emoji */}
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Season's Greetings! 🎅
                </h2>

                {/* Seasonal wish message */}
                <p className="text-lg text-gray-700 mb-4">
                  Wishing you a wonderful holiday season and a prosperous New Year! 🎉
                </p>

                {/* Animated emoji row: snowflake, snowman, gift - bounce in sequence */}
                <div className="flex justify-center gap-2 text-3xl mb-6">
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}>
                    ❄️
                  </motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}>
                    ⛄
                  </motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}>
                    🎁
                  </motion.span>
                </div>

                {/* CTA button: red-to-green gradient with hover scale effect */}
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Thank You! ✨
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
