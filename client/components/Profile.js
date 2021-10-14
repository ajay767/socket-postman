import React from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { IoMdPersonAdd } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function Profile() {
  return (
    <motion.div className="p-5 flex-grow">
      <div className="h-36  w-36 rounded-full border-4 bg-clip-border  border-transparent  mx-auto relative">
        <img
          src="/images/u3.jpeg"
          className="h-full w-full rounded-full object-cover  shadow-lg "
        />
      </div>
      <h4 className="text-xl text-center my-2">Ashutosh Singh </h4>
      <p className="flex-center">
        Online
        <span className="h-3 w-3 ml-2 rounded-full bg-green-500 z-10"></span>
      </p>

      <div className="mt-4">
        <label className="text-sm text-gray-300">What's on your mind</label>
        <textarea
          className="bg-transparent rounded-md outline-none border-all px-4 py-5 h-44 w-full scrollbar-hide"
          placeholder="What's on your mind!"
        >
          It is a long established fact that a reader will be distracted by the
          readable
        </textarea>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="p-2 px-4 flex-center rounded text-sm bg-yellow-600 text-white block ml-auto "
      >
        Update
      </motion.button>
    </motion.div>
  );
}

export default Profile;
