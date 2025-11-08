'use client';

import { motion, Variants } from 'framer-motion';

const Ticker = () => {
  const items = [
    'BRANDING',
    'WEB DESIGN',
    'UI/UX DESIGN',
    'DEVELOPMENT',
    'MOTION DESIGN'
  ];

  const tickerVariants: Variants = {
    animate: {
      x: [0, -1030],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden bg-black text-white py-4">
      <motion.div
        className="flex whitespace-nowrap"
        variants={tickerVariants}
        animate="animate"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-xl md:text-2xl font-bold italic tracking-wider">{item}</span>
            {index < items.length * 2 - 1 && (
              <span className="mx-8 text-2xl opacity-50">•</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
