import React from 'react';
import { motion } from 'framer-motion';

function Button({ className, children, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`border-all font-medium p-2 px-4 text-sm text-gray-200 rounded-md  my-2 bg-gray-400 bg-opacity-25 backdrop-filter backdrop-blur-lg ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
