import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Container({ children, className }) {
  return (
    // <AnimatePresence exitBeforeEnter>
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ duration: 0.4, stiffness: 120 }}
      style={{ maxHeight: '100vh', height: '100vh' }}
      className="flex items-center justify-center relative overflow-hidden"
    >
      <div
        className={`border-all rounded-md bg-gray-900 bg-opacity-40  backdrop-filter backdrop-blur-2xl  ${className}`}
      >
        {children}
      </div>
    </motion.div>
    // </AnimatePresence>
  );
}

export default Container;
