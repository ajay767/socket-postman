import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { motion } from 'framer-motion';

function Alert({ message, onClose, title }) {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      className="z-50  w-96 shadow-xl  rounded-lg bg-black p-4 absolute bottom-10 left-10"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-300 text-base font-medium">{title}</h3>
        <VscChromeClose
          size={24}
          className="text-gray-400 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="text-white  text-sm">{message}</div>
    </motion.div>
  );
}

export default Alert;
