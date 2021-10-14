import React from 'react';
import PropsTypes from 'prop-types';
import { motion } from 'framer-motion';

function MessageCard({ message, author, type }) {
  return (
    <motion.div
      style={{ maxWidth: '50%' }}
      className={`p-2 ${
        type === 'sent'
          ? 'self-end rounded-tl-xl rounded-tr-sm bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500'
          : 'self-start border-all rounded-tr-xl rounded-tl-sm  bg-opacity-20 bg-gray-100  '
      } mb-4 transition-all px-4 w-max  text-sm   rounded-b-xl backdrop-filter backdrop-blur-lg`}
    >
      {message}
      <p
        className={`font-medium  ${
          type === 'received' ? 'text-right' : 'text-left'
        } text-sm  text-gray-300`}
      >
        {author}
      </p>
    </motion.div>
  );
}

MessageCard.PropsTypes = {
  message: PropsTypes.string,
  author: PropsTypes.string,
  type: PropsTypes.oneOf(['received', 'sent']),
};

export default MessageCard;
