'use client';

import { motion, Variants } from 'framer-motion';

const NewsTicker = () => {
  const message = 'Updates: Portfolio is still under maintenance, thanks for checking in 😊';

  const tickerVariants: Variants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 25,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="fixed top-16 w-full overflow-hidden bg-blue-600 text-white py-3 shadow-md z-40">
      <motion.div
        className="flex whitespace-nowrap"
        variants={tickerVariants}
        animate="animate"
      >
        {[...Array(3)].map((_, index) => (
          <div key={index} className="inline-flex items-center mx-12">
            <span className="text-lg font-semibold">📢 {message}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
